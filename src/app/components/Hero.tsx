import Image from "next/image"
import { WeddingDateCounter } from "./WeddingDateCounter"

export function Hero() {
  return (
    <section className="relative h-[calc(100vh-var(--header-height))]">
      <div className="after:absolute after:inset-0 after:bg-black/70">
        <Image
          alt="A photo of the couple"
          className="object-cover"
          fill
          src="/images/hero.jpg"
        />
      </div>

      <div className="absolute bottom-32 left-0 right-0 text-center text-white">
        <h1 className="mb-8 font-cursive text-7xl font-bold">
          Mark &amp; Woman
        </h1>

        <WeddingDateCounter />
      </div>
    </section>
  )
}
