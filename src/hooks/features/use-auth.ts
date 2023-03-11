import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginUser } from "../../api/services/index";

const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
});

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/all-products");
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

  const handleLoginUser = async (data) => {
    try {
      const res = await loginUser(data);
      if (res.data?.accessToken) {
        localStorage.setItem("token", res.data?.accessToken);
        toast.success(". به پنل ادمین خوش آمدید");
        navigate("/admin/all-products");
      }
    } catch (ex) {
      toast.error("!!!نام کاربری  یا رمز عبور صحیح نیست ");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    handleLoginUser,
  };
};

export default useAuth;
