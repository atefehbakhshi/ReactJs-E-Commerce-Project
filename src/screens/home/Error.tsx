import cloud from "/img/error/cloud.gif";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-[75vh]">
      <img src={cloud} alt="rainy-cloud" className="max-w-[30rem] mx-auto" />
      <p className="text-base font-bold">متاسفانه مشکلی رخ داده است .</p>
      <p className="text-gray-500 text-xs">
        شاید این صفحات برای شما جذاب باشند .
      </p>
      <div className="flex gap-2">
        <Link
          to="/products/clothes"
          className="text-[#41c1c6] text-base cursor-pointer"
        >
          لباس
        </Link>
        <div className="border-x border-[#afafaf50] px-2">
          <Link
            to="/products/shoes"
            className="text-[#41c1c6] text-base  cursor-pointer"
          >
            کفش
          </Link>
        </div>
        <Link
          to="/products/watch"
          className="text-[#41c1c6] text-base  cursor-pointer"
        >
          ساعت
        </Link>
      </div>
    </div>
  );
};
