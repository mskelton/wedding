import clsx from "clsx"
import Link from "next/link"

function Item({
  children,
  className,
  href,
  onClick,
}: {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
}) {
  const Component = href ? "a" : "button"

  return (
    <li>
      <Component
        className={clsx(
          "px-3 py-1 transition-colors dark:hover:bg-white dark:hover:text-zinc-900",
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
        "sticky top-0 z-10 -mt-[--header-height] flex h-[--header-height] w-full items-center justify-between bg-white bg-white/70 px-8 text-white dark:bg-zinc-900",
        "animate-[header_1ms_linear_both] [animation-range:0_800px] [animation-timeline:scroll()]",
      )}
      id="home"
    >
      <Link
        aria-hidden
        className="mt-1 font-cursive text-5xl tracking-wide"
        href="#home"
      >
        MR
      </Link>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-xl">
          <Item href="#date-venue">Date &amp; Venue</Item>
          <Item href="#our-story">Our Story</Item>
          <Item href="#faqs">FAQs</Item>
          <Item href="#travel">Travel</Item>
        </ul>
      </nav>
    </header>
  )
}
