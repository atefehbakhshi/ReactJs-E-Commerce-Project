import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "/img/logo/logo.png";

export const Footer = () => {
  return (
    <footer className="shadow w-full border-t-2 p-3 md:px-8">
      <div className="flex justify-end mb-4">
        <img src={logo} alt="logo" className="w-[5rem]" />
      </div>
      <div className="flex gap-12">
        <section>
          <p className="font-bold mb-2">خرید</p>
          <ul>
            <li>
              <Link to="/products/watch">ساعت</Link>
            </li>
            <li>
              <Link to="/products/glasses">عینک</Link>
            </li>
            <li>
              <Link to="/products/shoes">کفش</Link>
            </li>
            <li>
              <Link to="/products/clothes">لباس</Link>
            </li>
            <li>
              <Link to="/products/perfume">عطر و ادکلن</Link>
            </li>
            <li>
              <Link to="/products/jewellery">جواهرات</Link>
            </li>
          </ul>
        </section>
        <section>
          <p className="font-bold mb-2">ارتباط با ما</p>
          <p>تلفن پشتیبانی: 12345678-021</p>
          <div>
            <p>شبکه های اجتماعی: </p>
            <div className="flex justify-between p-3">
              <Icon
                icon="ph:instagram-logo"
                width="22"
                color="#525252"
                className="cursor-pointer"
              />
              <Icon
                icon="ph:telegram-logo"
                width="22"
                color="#525252"
                className="cursor-pointer"
              />
              <Icon
                icon="ph:twitter-logo"
                width="22"
                color="#525252"
                className="cursor-pointer"
              />
              <Icon
                icon="ph:whatsapp-logo"
                width="22"
                color="#525252"
                className="cursor-pointer"
              />
            </div>
          </div>
        </section>
      </div>
      <hr className="my-4 " />
      <p className="text-xs text-gray-500 text-center">
        Shicoo - {new Date().getFullYear()} &#169; Copyright
      </p>
    </footer>
  );
};
