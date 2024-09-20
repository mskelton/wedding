import "./globals.css"
import clsx from "clsx"
import type { Metadata } from "next"
import {
  BioRhyme as Serif,
  Roboto_Flex as Sans,
  Rouge_Script as Cursive,
} from "next/font/google"
import { themeEffect } from "./utils/themeEffect"

const cursive = Cursive({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: "400",
})

const serif = Serif({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-serif",
})

const sans = Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  description: "The story of two who became one.",
  title: "Mark & Rianna",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="h-full scroll-smooth" lang="en" suppressHydrationWarning>
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          dangerouslySetInnerHTML={{ __html: `(${themeEffect.toString()})();` }}
        />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>

      <body
        className={clsx(
          cursive.variable,
          serif.variable,
          sans.variable,
          "h-full bg-white font-serif dark:bg-zinc-950",
        )}
      >
        {children}
      </body>
    </html>
  )
}
