import { FC } from "react";

export const Inputs: FC<{
  mainText: string;
  subText: string;
  length?: number;
  type: string;
}> = ({ mainText, subText, length, type }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="col-span-1 flex flex-col gap-1">
        <p className="text-blue-900 font-bold">{mainText}</p>
        <p className="text-gray-400 text-xs hidden sm:block">{subText}</p>
      </div>
      <input
        type={type}
        minLength={length}
        maxLength={length}
        className="col-span-2 p-1 border rounded max-w-[20rem] "
      />
    </div>
  );
};
