import { cloneElement, HTMLAttributeAnchorTarget } from "react"
import { twMerge } from "tailwind-merge"

export type ButtonProps = {
  /** The button label text. */
  children: React.ReactNode
  /** The CSS class name for the button. */
  className?: string
  /**
   * The button color. The `primary` variant is most common. The `secondary`
   * variant is typically used when placed alongside an `primary` button (e.g.,
   * a cancel button in a form).
   *
   * @default "primary"
   */
  color?: "primary" | "secondary"
  /** If specified, renders an anchor tag instead of a button. */
  href?: string
  /** The icon to place at the end of the button. */
  iconEnd?: React.ReactElement
  /** The icon to place at the start of the button. */
  iconStart?: React.ReactElement
  /** Handler that is called when the press is released over the target. */
  onPress?: () => void
  /**
   * The size of the button.
   *
   * @default "md"
   */
  size?: "lg" | "md" | "xl"
  /** The target window for the link. */
  target?: HTMLAttributeAnchorTarget
  /**
   * The behavior of the button when used in an HTML form.
   *
   * @default "button"
   */
  type?: "button" | "submit"
  /**
   * The button visual variant. The `outline` variant is most common. The
   * `ghost` variant is typically used when placed alongside an `outline` button
   * (e.g., a cancel button in a form).
   *
   * @default "ghost"
   */
  variant?: "ghost" | "outline"
}

export function Button({
  children,
  className,
  color = "primary",
  href,
  iconEnd,
  iconStart,
  onPress,
  size = "md",
  target,
  type = "button",
  variant = "outline",
}: ButtonProps) {
  const Component = href ? "a" : "button"
  const iconSize = size === "xl" ? "size-8" : "size-6"

  return (
    <Component
      className={twMerge(
        // Isolation is required or it will have a subtle blend with the background
        "relative isolate inline-block bg-transparent text-center",
        // Focus outline
        "focus:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-4 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-zinc-950",
        // Text has to be white so that when we apply the filter, it inverts to
        // black. Without an explicit text color, the filter will not have
        // anything to invert and it will result in white text on white background.
        "text-white",
        // The effect is on the pseudo-element, starting as zero height at the
        // bottom of the button.
        "before:absolute before:bottom-0 before:left-0 before:right-0 before:z-10 before:h-0 before:w-full",
        // Transition
        "before:transition-[height]",
        // Expand from bottom upward on hover
        "hover:before:h-full",
        // This is bizarre, but it works. It also reads a little strange since
        // the dark theme is actually the default in the case of this component
        // due to how blending modes work. This is why below you see
        // `before:bg-white` which is the hover state for the dark theme and in
        // light theme this get's inverted to what is in essence `before:bg-black`.
        // https://stackoverflow.com/a/63773150/5641674
        "[filter:invert(100%)] dark:filter-none",
        // To make outline and standard buttons appear the same height, we use
        // an inset box shadow to mimic a border.
        variant === "outline" &&
          "shadow-[inset_0_0_0_1px_var(--tw-shadow-color)] shadow-white",
        // Remember, these are the hover states for the dark theme even though
        // they do not have a `dark:` prefix.
        color === "primary" && "before:bg-white",
        color === "secondary" && "before:bg-zinc-900",
        // Sizes
        size === "md" && "px-3 py-1 text-base",
        size === "lg" && "px-4 py-2 text-lg",
        size === "xl" && "px-6 py-3 text-3xl",
        className,
      )}
      href={href!}
      onClick={onPress}
      target={target}
      type={type}
    >
      <span className="relative z-20 inline-flex items-center gap-2 mix-blend-difference">
        {iconStart ? cloneElement(iconStart, { className: iconSize }) : null}
        {children}
        {iconEnd ? cloneElement(iconEnd, { className: iconSize }) : null}
      </span>
    </Component>
  )
}
