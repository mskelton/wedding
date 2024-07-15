import { createElement } from "react"
import { twMerge } from "tailwind-merge"

export const styled = (tag: string) => (classes: string) => {
  return function StyledComponent({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) {
    return createElement(
      tag,
      { className: twMerge(classes, className) },
      children,
    )
  }
}

styled.p = styled("p")
styled.h1 = styled("h1")
