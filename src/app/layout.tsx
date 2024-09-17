import "./globals.css"
import clsx from "clsx"
import type { Metadata } from "next"
import { BioRhyme, Dancing_Script, Roboto_Flex } from "next/font/google"
import { themeEffect } from "./lib/themeEffect"

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
        <link href="/favicon.ico" rel="icon" />
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
