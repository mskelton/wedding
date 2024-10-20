import { Button } from "./Button"
import { WeddingDateCounter } from "./WeddingDateCounter"

export function Hero() {
  return (
    <section className="dark relative h-[900px]">
      <div className="after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/20 after:to-black/60">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />
          <img
            alt="A photo of the couple"
            className="size-full object-cover"
            src="/images/hero.jpg"
          />
        </picture>
      </div>

      <div className="absolute bottom-20 left-0 right-0 space-y-8 px-4 text-center text-white">
        <h1 className="font-cursive text-9xl">Mark &amp; Rianna</h1>

        <WeddingDateCounter />

        <Button className="px-10" href="#rsvp" size="xl">
          RSVP
        </Button>
      </div>
    </section>
  )
}
