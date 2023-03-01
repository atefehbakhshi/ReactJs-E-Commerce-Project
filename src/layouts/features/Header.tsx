import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import logo from "/img/logo/logo.png";

export const Header = () => {
  return (
    <header className="flex justify-between p-3 shadow sticky top-0 z-50 md:px-8">
      <div className="flex gap-2">
        <div className="relative flex ">
          <Link to="/basket">
            <Icon icon="ic:outline-shopping-bag" width="24" />
          </Link>
          <span className="bg-red-300 rounded-[50%] w-4 h-4 inline-block text-center text-xs absolute right-[-0.35rem] ">
            0
          </span>
        </div>

        <Link to="/admin">
          <Icon icon="mdi:user" width="26" />
        </Link>
      </div>
      <Link to="/">
        <img src={logo} alt="shicoo" className="w-[5rem]" />
      </Link>
    </header>
  );
};
