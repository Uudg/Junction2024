import { FC } from "react";
import { cn } from "../../utils/cn";
import { HTMLMotionProps, motion } from "framer-motion";

interface IOption extends HTMLMotionProps<"option"> {}

export const Option: FC<IOption> = ({ ...rest }) => {
    return (
        <motion.option {...rest} whileTap={{scale: 0.95}} className={cn("avenir_font bg-white border border-slate-300 hover:bg-gray-200 active:bg-gray-200 py-2 px-6 flex gap-2 items-center whitespace-nowrap cursor-pointer rounded-xl", rest.className)} />
    )
}
