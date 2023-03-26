import { FC } from "react";

const ErrorMessage: FC<{ error: any }> = ({ error }) => {
  return <p className="text-red-400 font-light text-xs">{error}</p>;
};

export default ErrorMessage;
