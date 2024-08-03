import typography from "@tailwindcss/typography"
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: process.env.NODE_ENV === "production" ? "media" : "class",
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        cursive: ["var(--font-cursive)"],
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
      },
      typography: (theme: any) => ({
        dark: {
          css: {
            "--tw-prose-body": theme("colors.zinc.600"),
            "--tw-prose-invert-body": theme("colors.zinc.400"),
          },
        },
      }),
    },
  },
}
export default config
