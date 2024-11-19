import clsx from "clsx"
import { Checkbox as AriaCheckbox } from "react-aria-components"

export type CheckboxProps = {
  children: React.ReactNode
  name: string
}

export function Checkbox({ children, name }: CheckboxProps) {
  return (
    <AriaCheckbox
      className="flex items-center gap-2 text-sm text-zinc-800 forced-color-adjust-none dark:text-zinc-300"
      name={name}
    >
      {({ isFocusVisible, isSelected }) => (
        <>
          <div
            className={clsx(
              "flex size-4 items-center justify-center border border-zinc-800 transition-all dark:border-zinc-300",
              isFocusVisible &&
                "ring-1 ring-zinc-800 ring-offset-4 dark:ring-zinc-300 dark:ring-offset-zinc-950",
            )}
          >
            <svg
              aria-hidden="true"
              className="h-3 w-3 fill-none stroke-zinc-800 transition-all dark:stroke-zinc-300"
              strokeDasharray="22"
              strokeDashoffset={isSelected ? "44" : "66"}
              strokeWidth="3"
              viewBox="0 0 16 18"
            >
              <polyline points="1 9 7 14 15 4" />
            </svg>
          </div>

          {children}
        </>
      )}
    </AriaCheckbox>
  )
}
