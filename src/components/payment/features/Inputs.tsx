import { FC } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form/dist/types";

export const Inputs: FC<{
  mainText: string;
  subText: string;
  validation?: object;
  error?: any;
}> = ({ mainText, subText, validation, error, ...rest }) => {
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
      <p className="text-red-400 font-light text-xs">{error}</p>
    </div>
  );
};
