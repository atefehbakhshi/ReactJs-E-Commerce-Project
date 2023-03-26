import { Icon } from "@iconify/react";
import { usePayment } from "../../../hooks/features/use-payment";
import ErrorMessage from "../../error-message";
import { Buttons, Inputs } from "../index";

export const PaymentForm = () => {
  const { register, handleSubmit, errors, handlePayment } = usePayment();

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.location.href = "/payment-result/failure";
  };

  return (
    <form className="flex flex-col gap-4">
      <Inputs
        mainText="شماره کارت :"
        subText="شماره ۱۶ رقمی درج شده بر روی کارت"
        error={errors.cartNumber?.message}
        validation={{ ...register("cartNumber") }}
      />
      <Inputs
        mainText="شماره شناسایی دوم (cvv2) :"
        subText="شماره ۳ یا ۴ رقمی درج شده بر روی کارت"
        error={errors.cv?.message}
        validation={{ ...register("cv") }}
      />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex flex-col gap-1">
          <p className="text-blue-900 font-bold">تاریخ انقضای کارت :</p>
          <p className="text-gray-400 text-xs hidden sm:block">
            دو رقم ماه / دو رقم آخر سال را وارد کنید .
          </p>
          <ErrorMessage error={errors.year?.message} />
          <ErrorMessage error={errors.month?.message} />
        </div>
        <div className="col-span-2 flex gap-2 items-center ">
          <input
            {...register("month")}
            className="p-1 border rounded max-w-[3rem]"
          />
          /
          <input
            {...register("year")}
            className="p-1 border rounded max-w-[3rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex flex-col gap-1">
          <p className="text-blue-900 font-bold"> کد امنیتی :</p>
          <p className="text-gray-400 text-xs hidden sm:block">
            کد وارد شده در کادر روبه رو را وارد کنید .
          </p>
          <ErrorMessage error={errors.securityCode?.message} />
        </div>
        <div className="col-span-2 flex gap-2 items-center ">
          <input
            type="text"
            className="p-1 border rounded max-w-[5rem]"
            {...register("securityCode")}
          />
          <p className="py-1 px-4 bg-gray-100 rounded max-w-[4rem]">88402</p>
          <Icon icon="lucide:rotate-cw" width="16" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex flex-col gap-1">
          <p className="text-blue-900 font-bold"> رمز دوم (رمز اینترنتی):</p>
          <p className="text-gray-400 text-xs hidden sm:block">
            رمز پویا رمز یکبار مصرفی ست که به جای رمز دوم استفاده می شود .
          </p>
          <ErrorMessage error={errors.bankCode?.message} />
        </div>
        <div className="col-span-2 flex gap-2 items-center">
          <input
            className="p-1 border rounded max-w-[5rem]"
            {...register("bankCode")}
          />
          <div className="flex gap-2 p-1 border rounded max-w-[8rem]">
            <Icon icon="wpf:message-outline" color="#1e40af" width="16" />
            <p className="text-blue-800">درخواست رمز پویا</p>
          </div>
        </div>
      </div>
      <Inputs
        mainText="ایمیل (اختیاری) :"
        subText="رسید پرداخت به این آدرس ایمیل خواهد شد ."
      />
      <div className="grid grid-cols-3 gap-2 max-w-[33rem] mb-8">
        <Buttons
          colSpan="col-span-2"
          bg="bg-[#0ec592]"
          onClick={handleSubmit(handlePayment)}
        >
          پرداخت
        </Buttons>
        <Buttons colSpan="col-span-1" bg="bg-[#fcbe56]" onClick={handleCancel}>
          انصراف
        </Buttons>
      </div>
    </form>
  );
};
