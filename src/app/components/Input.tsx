import { Input as AriaInput, InputProps } from "react-aria-components"

export type { InputProps }

export function Input({ ...props }: InputProps) {
  return (
    <AriaInput
      className="relative w-full border border-zinc-300 p-2 px-3 outline-none focus:border-zinc-500 focus:after:absolute focus:after:h-1 focus:after:w-full focus:after:bg-zinc-500 dark:border-zinc-700 dark:focus:border-zinc-500 dark:focus:after:bg-zinc-500"
      {...props}
    />
  )
}
