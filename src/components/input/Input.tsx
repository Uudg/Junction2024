import { FC, InputHTMLAttributes } from "react"
import { cn } from "../../utils/cn"

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = ({type = "text", className, ...rest}) => {
    return (
        <input {...rest} type={type} className={cn("rounded-xl p-3 border border-purple-400 shadow-md", className)} />
    )
}