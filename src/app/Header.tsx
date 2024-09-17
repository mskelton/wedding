"use client"

import clsx from "clsx"
import { ThemeToggle } from "./components/ThemeToggle"
import { useRSVP } from "./RVSPProvider"

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
          "rounded-md px-3 py-1 transition-colors",
          variant === "primary" &&
            "bg-zinc-900 text-white hover:bg-rose-500 dark:bg-white dark:text-black dark:hover:bg-rose-500 dark:hover:text-white",
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
  const { open } = useRSVP()

  return (
    // TODO: blur
    <header
      className={clsx(
        "fixed top-0 z-10 flex h-[--header-height] w-full items-center justify-between bg-white bg-white/70 px-8 dark:bg-zinc-900 dark:text-white",
        "animate-[header_1ms_linear_both] transition-colors duration-300 [animation-range:0_800px] [animation-timeline:scroll()]",
      )}
    >
      <p className="font-cursive text-4xl">MR</p>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-xl">
          <Item href="#date-venue">Date &amp; Venue</Item>
          <Item href="#our-story">Our Story</Item>
          <Item href="#faqs">FAQs</Item>
          <Item href="#travel">Travel</Item>
          <Item onClick={open} variant="primary">
            RSVP
          </Item>

          <ThemeToggle />
        </ul>
      </nav>
    </header>
  )
}
