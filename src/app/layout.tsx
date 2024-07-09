import "./globals.css"
import clsx from "clsx"
import type { Metadata } from "next"
import { BioRhyme, Dancing_Script, Roboto_Flex } from "next/font/google"

const cursive = Dancing_Script({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-cursive",
})

const serif = BioRhyme({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
})

const sans = Roboto_Flex({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  description: "The story of two who became one.",
  title: "Mark & Woman",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="h-full scroll-smooth bg-white dark:bg-zinc-950" lang="en">
      <body
        className={clsx(
          cursive.variable,
          serif.variable,
          sans.variable,
          "h-full font-serif",
        )}
      >
        {children}
      </body>
    </html>
  )
}
