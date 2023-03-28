import { FC } from "react";
import { PaymentInputParams } from "../../../type/interface";
import ErrorMessage from "../../error-message";

export const Inputs: FC<PaymentInputParams> = ({
  mainText,
  subText,
  validation,
  error,
  ...rest
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1 flex flex-col gap-1">
        <p className="text-blue-900 font-bold">{mainText}</p>
        <p className="text-gray-400 text-xs hidden sm:block">{subText}</p>
      </div>
      <input
        {...validation}
        {...rest}
        className="col-span-2 p-1 border rounded max-w-[20rem] "
      />
      <ErrorMessage error={error} />
    </div>
  );
};
