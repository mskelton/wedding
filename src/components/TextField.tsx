import {
  TextField as AriaTextField,
  TextFieldProps as AriaTextFieldProps,
} from "react-aria-components"

export function TextField(props: AriaTextFieldProps) {
  return <AriaTextField {...props} />
}
