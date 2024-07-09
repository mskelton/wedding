import Image from "next/image"
import { WeddingDateCounter } from "./WeddingDateCounter"

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-var(--header-height))]">
      <div className="after:bg-black/70 after:inset-0 after:absolute">
        <Image
          alt="A photo of the couple"
          className="object-cover"
          fill
          src="/images/hero.jpg"
        />
      </div>

      <div className="absolute bottom-32 left-0 right-0 text-center text-white">
        <h1 className="text-7xl font-cursive font-bold mb-8">
          Mark &amp; Woman
        </h1>

        <WeddingDateCounter />
      </div>
    </section>
  )
}
