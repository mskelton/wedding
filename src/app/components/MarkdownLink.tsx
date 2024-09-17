"use client"

import { AnchorHTMLAttributes } from "react"
import { useRSVP } from "../RVSPProvider"

export function MarkdownLink({
  href,
  ...props
}: Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "href">) {
  const { open } = useRSVP()

  const isRSVPLink = href === "#rsvp"
  const Component = isRSVPLink ? "button" : "a"
  const onClick = isRSVPLink ? open : undefined

  return <Component {...props} href={href} onClick={onClick} />
}
