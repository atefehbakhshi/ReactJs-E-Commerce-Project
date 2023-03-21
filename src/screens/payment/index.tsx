import { Icon } from "@iconify/react";
import { PaymentForm } from "../../components/payment";
import ShaparakLogo from "/img/logo/ShaparakLogo.jpg";

const Payment = () => {
  return (
    <div>
      <header className="flex gap-4 border-pink-400 border-t-4 sm:gap-8">
        <img
          src={ShaparakLogo}
          alt="درگاه اینترنتی سپهر"
          className="max-w-[4rem] p-1 sm:max-w-[5rem] sm:p-2"
        />
        <h1 className="bg-pink-400 p-2 inline-block rounded-b-xl text-white sm:p-4">
          درگاه اینترنتی پرداخت الکترونیک سپهر
        </h1>
      </header>
      <main className="flex flex-col gap-4 text-xs border-4 border-gray-300 my-16 mx-2 p-2 max-w-[40rem] sm:mx-auto">
        <div className="grid grid-cols-3 items-center mb-4">
          <h1 className="col-span-1 w-2/3 sm:w-1/2 sm:text-base font-bold text-pink-600 bg-[#fef1ff] py-2 px-1 sm:px-2 border-b-2 border-red-500">
            اطلاعات کارت
          </h1>
          <div className="col-span-2 flex items-center gap-2 sm:px-8">
            <Icon icon="mdi:clock-outline" width="18" color="#1e40af" />
            <p className="text-blue-800 font-semibold">مدت زمان باقی مانده :</p>
            <div className="text-blue-800 font-semibold">09:52</div>
          </div>
        </div>
        <PaymentForm />
      </main>
    </div>
  );
};

export default Payment;
