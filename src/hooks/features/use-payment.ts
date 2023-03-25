import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { loginUser } from "../../api/services/index";

const paymentSchema = yup.object({
  cartNumber: yup
    .string()
    .required("شماره کارت الزامیست .")
    .matches(/^[0-9]+$/, "لطفا از اعداد انگلیسی استفاده شود .")
    .length(16, "شماره کارت باید 16 رقم باشد ."),
  cv: yup
    .string()
    .required("شماره شناسایی الزامیست .")
    .matches(/^[0-9]+$/, "لطفا از اعداد انگلیسی استفاده شود .")
    .length(4, "شماره شناسایی باید ۴ رقمی باشد ."),
  year: yup
    .string()
    .matches(
      /^(0[0-9]|1[0123456789]|2[0123456789]|3[0123456789]|4[0123456789]|5[0123456789]|6[0123456789]|7[0123456789]|8[0123456789]|9[0123456789])$/,
      "لطفا از اعداد بین 0 تا 99  برای سال استفاده شود ."
    )
    .required(" سال انقضا الزامیست ."),
  month: yup
    .string()
    .matches(
      /^(0[1-9]|1[012])$/,
      "لطفا از اعداد بین 1 تا 12 برای ماه استفاده شود ."
    )
    .required(" ماه انقضا الزامیست ."),
  securityCode: yup.string().required("کد امنیتی  الزامیست ."),
  bankCode: yup
    .string()
    .matches(/^[0-9]+$/, "لطفا از اعداد انگلیسی استفاده شود .")
    .required(" رمز پویا الزامیست ."),
});

export const usePayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(paymentSchema),
    mode: "onChange",
  });

  const handlePayment = async (data) => {
    console.log(data);
    // try {
    //   const res = await loginUser(data);
    //   if (res.data?.accessToken) {
    //     localStorage.setItem("token", res.data.accessToken);
    //     localStorage.setItem("refresh_token", res.data.refreshToken);
    //     toast.success(". به پنل ادمین خوش آمدید");
    //     navigate("/admin");
    //   }
    // } catch (ex) {
    //   toast.error("!!!نام کاربری  یا رمز عبور صحیح نمی باشد ");
    // }
  };

  return {
    register,
    handleSubmit,
    errors,
    handlePayment,
  };
};
