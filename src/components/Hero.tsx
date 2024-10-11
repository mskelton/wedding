import { useRSVP } from "../RVSPProvider"
import { Button } from "./Button"
import { WeddingDateCounter } from "./WeddingDateCounter"

export function Hero() {
  const { open } = useRSVP()

  return (
    <section className="dark relative h-screen">
      <div className="after:absolute after:inset-0 after:bg-black/60">
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
        <h1 className="font-cursive text-8xl">Mark &amp; Rianna</h1>

        <WeddingDateCounter />

        <Button className="px-10" onPress={open} size="xl">
          RSVP
        </Button>
      </div>
    </section>
  )
}
