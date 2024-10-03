import {
  Label as AriaLabel,
  LabelProps as AriaLabelProps,
} from "react-aria-components"

export function Label(props: AriaLabelProps) {
  return (
    <AriaLabel
      className="mb-1 block text-sm text-zinc-800 dark:text-zinc-300"
      {...props}
    />
  )
}
