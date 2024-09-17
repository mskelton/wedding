import clsx from "clsx"
import { ThemeToggle } from "./components/ThemeToggle"

function Item({
  children,
  className,
  href,
  onClick,
  variant = "secondary",
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}) {
  const Component = href ? "a" : "button"

  return (
    <li>
      <Component
        className={clsx(
          "px-3 py-1",
          variant === "primary" &&
            "border border-zinc-900 hover:bg-white dark:border-white",
          variant === "secondary" && "hover:text-rose-500",
          className,
        )}
        href={href}
        onClick={onClick}
      >
        {children}
      </Component>
    </li>
  )
}

export function Header() {
  return (
    <header
      className={clsx(
        "fixed top-0 z-10 flex h-[--header-height] w-full items-center justify-between bg-white bg-white/70 px-8 dark:bg-zinc-900",
        "animate-[header_1ms_linear_both] [animation-range:0_800px] [animation-timeline:scroll()]",
      )}
    >
      <p className="font-cursive text-4xl">MR</p>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-xl">
          <Item href="#date-venue">Date &amp; Venue</Item>
          <Item href="#our-story">Our Story</Item>
          <Item href="#faqs">FAQs</Item>
          <Item href="#travel">Travel</Item>

          <ThemeToggle />
        </ul>
      </nav>
    </header>
  )
}
