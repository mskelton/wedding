import clsx from "clsx"
import Link from "next/link"
import { Button } from "./components/Button"

function Item({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <li>
      <Button
        className="px-3 py-1"
        color="primary"
        href={href}
        size="lg"
        variant="ghost"
      >
        {children}
      </Button>
    </li>
  )
}

export function Header() {
  return (
    <header
      className={clsx(
        "dark sticky top-0 z-10 -mt-[--header-height] flex h-[--header-height] w-full items-center justify-between bg-white bg-white/70 px-8 text-white dark:bg-zinc-900",
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
