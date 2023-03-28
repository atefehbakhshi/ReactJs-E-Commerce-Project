import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarLinkParams } from "../../../type/interface";

export const SidebarLink: FC<SidebarLinkParams> = ({
  mainPath,
  firstSubPath,
  secondSubPath,
  mainText,
  firstText,
  secondText,
  menuHandler,
}) => {
  return (
    <li>
      <div className="flex items-center gap-1">
        <Link to={`/products${mainPath}`} className="font-bold">
          {mainText}
        </Link>
      </div>
      <ul className="px-8 pb-3 text-sm">
        <li onClick={menuHandler}>
          <NavLink
            to={`/products${mainPath}${firstSubPath}`}
            className={({ isActive }) =>
              isActive ? "text-[#41c1c6] text-lg" : undefined
            }
          >
            {firstText}
          </NavLink>
        </li>
        <li onClick={menuHandler}>
          <NavLink
            to={`/products${mainPath}${secondSubPath}`}
            className={({ isActive }) =>
              isActive ? "text-[#41c1c6] text-lg" : undefined
            }
          >
            {secondText}
          </NavLink>
        </li>
      </ul>
    </li>
  );
};
