import Link from "next/link"
import { cloneElement } from "react"
import { twMerge } from "tailwind-merge"

export interface ButtonProps
  extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target"> {
  children: React.ReactNode
  className?: string
  color?: "primary" | "secondary"
  href?: string
  iconEnd?: React.ReactElement
  iconStart?: React.ReactElement
  onClick?: () => void
  size?: "lg" | "md" | "xl"
  type?: "button" | "submit"
  variant?: "ghost" | "outline"
}

export function Button({
  children,
  className,
  color = "primary",
  href,
  iconEnd,
  iconStart,
  size = "md",
  type = "button",
  variant = "outline",
  ...props
}: ButtonProps) {
  const Component = href ? (href.startsWith("/") ? Link : "a") : "button"
  const iconSize = size === "xl" ? "size-8" : "size-6"

  return (
    <Component
      className={twMerge(
        "relative isolate overflow-hidden bg-transparent",
        "before:absolute before:left-1/2 before:top-0 before:z-10 before:h-full before:w-0 before:transition-[left,width] before:duration-200",
        "hover:before:left-0 hover:before:w-full",
        variant === "outline" &&
          "shadow-[inset_0_0_0_1px_var(--tw-shadow-color)] shadow-zinc-900 dark:shadow-white",
        color === "primary" && "before:bg-zinc-900 dark:before:bg-white",
        color === "secondary" && "before:bg-white dark:before:bg-zinc-900",
        size === "md" && "px-3 py-1 text-base",
        size === "lg" && "px-4 py-2 text-lg",
        size === "xl" && "px-6 py-3 text-3xl",
        className,
      )}
      href={href!}
      type={type}
      {...props}
    >
      <span className="relative z-20 inline-flex items-center gap-2 mix-blend-difference">
        {iconStart ? cloneElement(iconStart, { className: iconSize }) : null}
        {children}
        {iconEnd ? cloneElement(iconEnd, { className: iconSize }) : null}
      </span>
    </Component>
  )
}
