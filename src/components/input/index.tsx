import { FC } from "react";
import { InputParams } from "../../type/interface";

const Input: FC<InputParams> = ({
  label,
  id,
  type,
  error,
  validation,
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-semibold">
        {label}:
      </label>
      <input
        type={type}
        id={id}
        className="bg-gray-100 rounded p-2"
        {...rest}
        {...validation}
      />
      <p className="text-red-400 font-light text-xs">{error}</p>
    </div>
  );
};

export default Input;
