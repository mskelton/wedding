import { useId } from "react"
import { Input } from "./Input"
import { Label } from "./Label"

export type TextFieldProps = {
  className?: string
  label: string
  name: string
}

export function TextField({ className, label, name }: TextFieldProps) {
  const id = useId()

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} />
    </div>
  )
}
