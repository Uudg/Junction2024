import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = ({ type = "text", className, ...rest }) => {
  return (
    <input
      {...rest}
      type={type}
      className={cn(
        "rounded-xl box-border p-3 border focus:border-purple-400 hover:outline focus:outline focus:border-1 outline-purple-300",
        className
      )}
    />
  );
};
