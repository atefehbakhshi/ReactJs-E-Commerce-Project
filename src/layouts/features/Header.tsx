import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { getAuthToken } from "../../utile/auth";

import logo from "/img/logo/logo.png";

export const Header = () => {
  const navigate = useNavigate();
  const token = getAuthToken();

  const loginHandler = () => {
    if (token) {
      navigate("/admin/all-products");
    } else {
      navigate("/admin/login");
    }
  };

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
        <Icon
          icon="mdi:user"
          width="26"
          onClick={loginHandler}
          className="cursor-pointer"
        />
      </div>
      <Link to="/">
        <img src={logo} alt="shicoo" className="w-[5rem]" />
      </Link>
    </header>
  );
};
