import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../api/services/index";
import { LoginI } from "../../type/interface";
import { FieldValues } from "react-hook-form/dist/types";

const loginSchema = yup.object({
  username: yup.string().required("نام کاربری الزامیست ."),
  password: yup.string().required("رمز عبور الزامیست ."),
});

export const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin");
    }
  }, [localStorage.getItem("token")]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const handleLoginUser = async (data: FieldValues | LoginI) => {
    try {
      const res = await loginUser(data);
      if (res.data?.accessToken) {
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        toast.success(". به پنل ادمین خوش آمدید");
        navigate("/admin");
      }
    } catch (ex) {
      toast.error("!!!نام کاربری  یا رمز عبور صحیح نمی باشد ");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleLoginUser,
  };
};
