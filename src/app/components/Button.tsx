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
  size?: "lg" | "md" | "xl"
  type?: "button" | "submit"
  variant?: "primary" | "secondary"
}

export function Button({
  children,
  className,
  href,
  iconEnd,
  iconStart,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const Component = href ? "a" : "button"
  const iconSize = size === "xl" ? "size-8" : "size-6"

  return (
    <Component
      className={twMerge(
        "inline-flex items-center gap-2 border border-transparent transition-colors hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
        variant === "primary" && "border-black dark:border-white",
        variant === "secondary" &&
          "dark:hover:bg-zinc-900 dark:hover:text-white",
        size === "md" && "px-3 py-1 text-base",
        size === "lg" && "px-4 py-2 text-lg",
        size === "xl" && "px-6 py-3 text-3xl",
        className,
      )}
      href={href}
      type={type}
      {...props}
    >
      {iconStart ? cloneElement(iconStart, { className: iconSize }) : null}
      {children}
      {iconEnd ? cloneElement(iconEnd, { className: iconSize }) : null}
    </Component>
  )
}
