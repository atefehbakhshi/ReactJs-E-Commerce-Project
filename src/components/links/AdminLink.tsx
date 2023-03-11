import { FC } from "react";
import { NavLink } from "react-router-dom";
import { AdminLinkParams } from "../../type/interface";

export const AdminLink: FC<AdminLinkParams> = ({ path, text }) => {
  return (
    <NavLink
      to={`/admin/${path}`}
      className={({ isActive }) => (isActive ? "text-[#41c1c6]" : undefined)}
    >
      {text}
    </NavLink>
  );
};
