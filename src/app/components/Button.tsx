import { twMerge } from "tailwind-merge"

export interface ButtonProps
  extends Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target"> {
  children: React.ReactNode
  className?: string
  href?: string
}

export function Button({ className, href, ...props }: ButtonProps) {
  const Component = href ? "a" : "button"

  return (
    <Component
      className={twMerge(
        "inline-block border border-black px-3 py-1 transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black",
        className,
      )}
      href={href}
      {...props}
    />
  )
}
