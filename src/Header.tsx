import clsx from "clsx"
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
        "sticky top-0 z-10 -mt-[--header-height] hidden h-[--header-height] w-full items-center justify-between bg-white bg-white/70 px-8 md:flex",
        "animate-[header_1ms_linear_both] [animation-range:0_800px] [animation-timeline:scroll()]",
      )}
    >
      <a
        aria-label="Back to top"
        className="mt-1 font-cursive text-5xl tracking-wide text-black dark:text-white"
        href="#home"
      >
        MR
      </a>

      <nav className="hidden md:block">
        <ul className="flex items-center gap-4 text-xl">
          <Item href="#date-venue">Date &amp; Venue</Item>
          <Item href="#our-story">Our Story</Item>
          <Item href="#rsvp">RSVP</Item>
          <Item href="#faqs">FAQs</Item>
        </ul>
      </nav>
    </header>
  )
}
