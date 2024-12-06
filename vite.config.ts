import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

const preloadImages = [
  { href: "hero.jpg", media: "(min-width: 768px)" },
  { href: "hero-2.jpg", media: "(min-width: 768px)" },
  { href: "hero-3.jpg", media: "(min-width: 768px)" },
  { href: "hero-4.jpg", media: "(min-width: 768px)" },
  { href: "hero-5.jpg", media: "(min-width: 768px)" },
  { href: "hero-7.jpg", media: "(min-width: 768px)" },
  { href: "hero-8.jpg", media: "(min-width: 768px)" },
  { href: "hero-9.jpg", media: "(min-width: 768px)" },
  { href: "hero-10.jpg", media: "(min-width: 768px)" },
  { href: "hero-mobile.jpg", media: "(max-width: 767px)" },
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
