import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { createHtmlPlugin } from "vite-plugin-html"

const preloadImages = [
  { href: "/images/arm-around-back.jpg", media: "(min-width: 768px)" },
  { href: "/images/arm-around-neck.jpg", media: "(min-width: 768px)" },
  { href: "/images/chair.jpg", media: "(min-width: 768px)" },
  { href: "/images/hero-mobile.jpg", media: "(max-width: 767px)" },
  { href: "/images/hero.jpg", media: "(min-width: 768px)" },
  { href: "/images/leaning-back.jpg", media: "(min-width: 768px)" },
  { href: "/images/open-room.jpg", media: "(min-width: 768px)" },
  { href: "/images/our-story.jpg", media: "(min-width: 768px)" },
  { href: "/images/ring.jpg", media: "(min-width: 768px)" },
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
