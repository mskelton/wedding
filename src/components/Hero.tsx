import heroImage from "../assets/hero.jpg"
import { useRSVP } from "../RVSPProvider"
import { Button } from "./Button"
import { WeddingDateCounter } from "./WeddingDateCounter"

export function Hero() {
  const { open } = useRSVP()

  return (
    <section className="dark relative h-screen">
      <div className="after:absolute after:inset-0 after:bg-black/60">
        <img
          alt="A photo of the couple"
          className="size-full object-cover"
          src={heroImage}
        />
      </div>

      <div className="absolute bottom-20 left-0 right-0 space-y-8 text-center text-white">
        <h1 className="font-cursive text-8xl">Mark &amp; Rianna</h1>

        <WeddingDateCounter />

        <Button className="px-10" onPress={open} size="xl">
          RSVP
        </Button>
      </div>
    </section>
  )
}
