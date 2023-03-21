import { Icon } from "@iconify/react";
import { Buttons, Inputs } from "../index";

export const PaymentForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Inputs
        mainText="شماره کارت :"
        subText="شماره ۱۶ رقمی درج شده بر روی کارت"
        length={16}
        type="number"
      />
      <Inputs
        mainText="شماره شناسایی دوم (cvv2) :"
        subText="شماره ۳ یا ۴ رقمی درج شده بر روی کارت"
        length={4}
        type="number"
      />
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex flex-col gap-1">
          <p className="text-blue-900 font-bold">تاریخ انقضای کارت :</p>
          <p className="text-gray-400 text-xs hidden sm:block">
            دو رقم ماه / دو رقم آخر سال را وارد کنید .
          </p>
        </div>

        <div className="col-span-2 flex gap-2 items-center ">
          <input
            type="number"
            minLength={2}
            maxLength={2}
            className="p-1 border rounded max-w-[2rem]"
          />
          /
          <input
            type="number"
            minLength={2}
            maxLength={2}
            className="p-1 border rounded max-w-[2rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex flex-col gap-1">
          <p className="text-blue-900 font-bold"> کد امنیتی :</p>
          <p className="text-gray-400 text-xs hidden sm:block">
            کد وارد شده در کادر روبه رو را وارد کنید .
          </p>
        </div>
        <div className="col-span-2 flex gap-2 items-center ">
          <input
            type="number"
            minLength={2}
            maxLength={2}
            className="p-1 border rounded max-w-[5rem]"
          />
          <p className="py-1 px-4 bg-gray-100 rounded max-w-[4rem]">88402</p>
          <Icon icon="lucide:rotate-cw" width="16" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-1 flex flex-col gap-1">
          <p className="text-blue-900 font-bold"> رمز دوم (رمز اینترنتی):</p>
          <p className="text-gray-400 text-xs hidden sm:block">
            رمز پویا رمز یکبار مصرفی ست که به جای رمز دوم استفاده می شود .{" "}
          </p>
        </div>
        <div className="col-span-2 flex gap-2 items-center">
          <input
            type="number"
            minLength={2}
            maxLength={2}
            className="p-1 border rounded max-w-[5rem]"
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
        type="email"
      />
      <div className="grid grid-cols-3 gap-2 max-w-[33rem] mb-8">
        <Buttons colSpan="col-span-2" bg="bg-[#0ec592]">
          پرداخت
        </Buttons>
        <Buttons colSpan="col-span-1" bg="bg-[#fcbe56]">
          انصراف
        </Buttons>
      </div>
    </form>
  );
};
