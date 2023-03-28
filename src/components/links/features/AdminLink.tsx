import { FC } from "react";
import { NavLink } from "react-router-dom";

export const AdminLink: FC<{ path: string; text: string }> = ({
  path,
  text,
}) => {
  return (
    <NavLink
      to={`/admin/${path}`}
      className={({ isActive }) => (isActive ? "text-[#41c1c6]" : undefined)}
    >
      {text}
    </NavLink>
  );
};
