import { FC } from "react";
import { ButtonParams } from "../../type/interface";

export const Button: FC<ButtonParams> = ({
  children,
  bg = "",
  hover = "hover:bg-gray-200",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${bg} border rounded px-2 py-1 cursor-pointer ${hover} min-w-[4rem]`}
    >
      {children}
    </button>
  );
};
