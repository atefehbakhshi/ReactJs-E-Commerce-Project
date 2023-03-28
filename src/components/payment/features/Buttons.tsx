import { FC } from "react";
import { PaymentButtonParams } from "../../../type/interface";

export const Buttons: FC<PaymentButtonParams> = ({
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
