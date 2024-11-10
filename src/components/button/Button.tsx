import { FC } from "react"
import { cn } from "../../utils/cn"
import { HTMLMotionProps, motion } from "framer-motion"

interface IButton extends HTMLMotionProps<"button"> {}

export const Button: FC<IButton> = ({className, ...rest}) => {
    return (
        <motion.button whileTap={{scale: 0.9}} initial={{y: -50}} animate={{y: 0}} {...rest} className={cn('avenir_font rounded-xl py-2 px-6 bg-slate-800 text-white w-fit hover:bg-slate-900', className)} />
    )
}