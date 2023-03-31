import cloud from "/img/error/cloud.gif";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-[75vh]">
      <img src={cloud} alt="rainy-cloud" className="max-w-[30rem] mx-auto" />
      <p className="text-base font-bold">متاسفانه مشکلی رخ داده است .</p>
      <div className="flex gap-2">
        <Link to="/" className="text-[#41c1c6] text-base cursor-pointer">
          بازگشت به سایت
        </Link>
      </div>
    </div>
  );
};
