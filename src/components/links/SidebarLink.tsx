import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import { LinkParams } from "../../type/interface";

const SidebarLink: FC<LinkParams> = ({
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
      <Link to={`/products${mainPath}`} className="font-bold">
        {mainText}
      </Link>
      <ul className="px-5 pb-3 text-sm">
        <li onClick={menuHandler}>
          <NavLink
            to={`/products${mainPath}${firstSubPath}`}
            className={({ isActive }) =>
              isActive ? "text-red-300 text-lg" : undefined
            }
          >
            {firstText}
          </NavLink>
        </li>
        <li onClick={menuHandler}>
          <NavLink
            to={`/products${mainPath}${secondSubPath}`}
            className={({ isActive }) =>
              isActive ? "text-red-300 text-lg" : undefined
            }
          >
            {secondText}
          </NavLink>
        </li>
      </ul>
    </li>
  );
};

export default SidebarLink;
