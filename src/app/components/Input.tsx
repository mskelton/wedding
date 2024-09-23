import clsx from "clsx"
import {
  Input as AriaInput,
  InputProps as AriaInputProps,
} from "react-aria-components"

export function useInputClassName({ className }: { className?: string }) {
  return clsx(
    "relative w-full border border-zinc-300 p-2 px-3 outline-none dark:border-zinc-700",
    "data-[focused]:border-zinc-500 dark:data-[focused]:border-zinc-500",
    "dark:aria-[invalid]:border-red-500",
    className,
  )
}

type InputProps = AriaInputProps & {
  className?: string
}

export function Input({ className, ...props }: InputProps) {
  return <AriaInput className={useInputClassName({ className })} {...props} />
}
