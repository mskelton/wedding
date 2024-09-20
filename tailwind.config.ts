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
      keyframes: ({ theme }) => ({
        header: {
          "0%": {
            backdropFilter: "blur(0)",
            background: "transparent",
            boxShadow: "none",
          },
          "100%": {
            backdropFilter: "blur(8px)",
            background: theme("colors.zinc.900 / 0.75"),
            boxShadow: theme("boxShadow.md"),
          },
        },
        pop: {
          from: {
            transform: "scale(0.85)",
          },
          to: {
            transform: "scale(1)",
          },
        },
      }),
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
