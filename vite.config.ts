import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

const preloadImages = [
  { href: "/images/final-10.jpg", media: "(min-width: 768px)" },
  { href: "/images/final-11.jpg", media: "(min-width: 768px)" },
  { href: "/images/final-17.jpg", media: "(min-width: 768px)" },
  { href: "/images/final-18.jpg", media: "(min-width: 768px)" },
  { href: "/images/final-2.jpg", media: "(min-width: 768px)" },
  { href: "/images/final-24.jpg", media: "(min-width: 768px)" },
  { href: "/images/final-3.jpg", media: "(min-width: 768px)" },
  { href: "/images/hero-mobile.jpg", media: "(max-width: 767px)" },
  { href: "/images/hero.jpg", media: "(min-width: 768px)" },
]

const preloadFonts = [
  "/fonts/BioRhyme-Variable.ttf",
  "/fonts/RobotoFlex-Variable.ttf",
  "/fonts/RougeScript-Regular.ttf",
]

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        tags: [
          ...preloadImages.map((image) => ({
            attrs: {
              as: "image",
              href: image.href,
              media: image.media,
              rel: "preload",
              type: "image/jpeg",
            },
            injectTo: "head" as const,
            tag: "link",
          })),
          ...preloadFonts.map((font) => ({
            attrs: {
              as: "font",
              crossorigin: true,
              href: font,
              rel: "preload",
              type: "font/ttf",
            },
            injectTo: "head" as const,
            tag: "link",
          })),
        ],
      },
    }),
  ],
})
