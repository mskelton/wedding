import {
  TextArea as AriaTextArea,
  TextAreaProps as AriaTextAreaProps,
} from "react-aria-components"
import { useInputClassName } from "./Input"

type TextAreaProps = AriaTextAreaProps & {
  className?: string
}

export function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <AriaTextArea className={useInputClassName({ className })} {...props} />
  )
}
