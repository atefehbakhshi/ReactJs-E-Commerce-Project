import { FC } from "react";

export const Buttons: FC<{ children: string; colSpan: string; bg: string }> = ({
  children,
  colSpan,
  bg = "",
  onClick,
}) => {
  return (
    <button
      className={`${bg} ${colSpan} text-white text-sm font-bold  rounded px-2 py-1 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
