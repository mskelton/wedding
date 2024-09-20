import { cloneElement } from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps
  extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target"> {
  children: React.ReactNode
  className?: string
  href?: string
  iconEnd?: React.ReactElement
  iconStart?: React.ReactElement
  onClick?: () => void
  size?: "md" | "xl"
}

export function Button({
  children,
  className,
  href,
  iconEnd,
  iconStart,
  size = "md",
  ...props
}: ButtonProps) {
  const Component = href ? "a" : "button"
  const iconSize = size === "xl" ? "size-8" : "size-6"

  return (
    <Component
      className={twMerge(
        "inline-flex items-center gap-2 border border-black transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black",
        size === "md" && "px-3 py-1 text-base",
        size === "xl" && "px-6 py-3 text-3xl",
        className,
      )}
      href={href}
      {...props}
    >
      {iconStart ? cloneElement(iconStart, { className: iconSize }) : null}
      {children}
      {iconEnd ? cloneElement(iconEnd, { className: iconSize }) : null}
    </Component>
  )
}
