import {
  FieldError as AriaFieldError,
  FieldErrorProps as AriaFieldErrorProps,
} from "react-aria-components"

export function FieldError(props: AriaFieldErrorProps) {
  return (
    <AriaFieldError className="mt-1 block text-sm text-red-500" {...props} />
  )
}
