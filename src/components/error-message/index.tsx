import { FC, ReactNode } from "react";
import { ErrorMessageT } from "../../type/type";

const ErrorMessage: FC<{ error: ErrorMessageT }> = ({ error }) => {
  const errorText = error as ReactNode;
  return <p className="text-red-400 font-light text-xs">{errorText}</p>;
};

export default ErrorMessage;
