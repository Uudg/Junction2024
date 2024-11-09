import { FC, HTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface IOption extends HTMLAttributes<HTMLOptionElement> {}

export const Option: FC<IOption> = ({ ...rest }) => {
    return (
        <option {...rest} className={cn("avenir_font text-xl rounded-xl bg-white border border-slate-300 py-2 px-6")} />
    )
}
