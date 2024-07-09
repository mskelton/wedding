import clsx from "clsx"

function Item({
  children,
  className,
  href,
  variant = "secondary",
}: {
  children: React.ReactNode
  className?: string
  href: string
  variant?: "primary" | "secondary"
}) {
  return (
    <li>
      <a
        className={clsx(
          "rounded-md px-3 py-1 transition-colors",
          variant === "primary" &&
            "bg-zinc-900 text-white hover:bg-rose-500 dark:bg-white dark:text-black",
          variant === "secondary" && "hover:text-rose-500",
          className,
        )}
        href={href}
      >
        {children}
      </a>
    </li>
  )
}

export function Header() {
  return (
    <header className="flex h-[--header-height] items-center justify-between px-8 dark:bg-zinc-900 dark:text-white">
      <p className="font-cursive text-4xl">M&W</p>

      <nav>
        <ul className="flex items-center gap-4 text-xl">
          <Item href="#date-venue">Date &amp; Venue</Item>
          <Item href="#our-story">Our Story</Item>
          <Item href="#faqs">FAQs</Item>
          <Item href="#travel">Travel</Item>
          <Item href="#rsvp" variant="primary">
            RSVP
          </Item>
        </ul>
      </nav>
    </header>
  )
}
