import { FC, HTMLAttributes } from "react"
import { cn } from "../../utils/cn"

interface IButton extends HTMLAttributes<HTMLButtonElement> {}

export const Button: FC<IButton> = ({className, ...rest}) => {
    return (
        <button {...rest} className={cn('rounded-xl py-2 px-6 bg-slate-900 text-white w-fit', className)} />
    )
}