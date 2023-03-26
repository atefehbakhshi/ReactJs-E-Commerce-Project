import { FC } from "react";
import { InputParams } from "../../type/interface";
import ErrorMessage from "../error-message";

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
      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
