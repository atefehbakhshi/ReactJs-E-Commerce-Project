import { Link } from "react-router-dom";
import notfound from "/img/error/notfound.jpg";

export const Products = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-[75vh]">
      <img
        src={notfound}
        alt="rainy-cloud"
        className="w-full max-w-[30rem] mx-auto"
      />
      <p className="text-base font-bold">صفحه مورد نظر شما یافت نشد .</p>
      <div className="flex gap-2">
        <Link to="/" className="text-[#41c1c6] text-base cursor-pointer">
          بازگشت به سایت
        </Link>
      </div>
    </div>
  );
};
