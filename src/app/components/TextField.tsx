import { useId } from "react"
import { Input, InputProps } from "./Input"
import { Label } from "./Label"

export type TextFieldProps = InputProps & {
  className?: string
  label: string
}

export function TextField({ className, label, ...props }: TextFieldProps) {
  const id = useId()

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </div>
  )
}
