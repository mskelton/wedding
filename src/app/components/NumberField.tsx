"use client"

import { useId } from "react"
import { NumberField as AriaNumberField } from "react-aria-components"
import { Input } from "./Input"
import { Label } from "./Label"

export type NumberFieldProps = {
  className?: string
  label: string
  name: string
}

export function NumberField({ className, label, name }: NumberFieldProps) {
  const id = useId()

  return (
    <AriaNumberField className={className} minValue={0}>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} name={name} />
    </AriaNumberField>
  )
}
