import { styled } from "../utils/styled"
import { Button } from "./Button"
import { WeddingDateCounter } from "./WeddingDateCounter"

const Header = styled.h1(
  "font-cursive text-8xl xs:text-7xl sm:text-8xl md:text-9xl px-4",
)

export function Hero() {
  return (
    <section className="dark relative h-full">
      <div className="after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/30 after:to-black/60">
        <picture>
          <source media="(max-width: 767px)" srcSet="/images/hero-mobile.jpg" />

          <img
            alt="A photo of the couple"
            className="size-full object-cover object-left"
            src="/images/hero.jpg"
          />
        </picture>
      </div>

      <div className="text-center text-white">
        <Header className="absolute left-0 right-0 top-20 md:hidden">
          Mark &amp; Rianna
        </Header>

        <div className="absolute bottom-20 left-0 right-0 space-y-8 px-4">
          <Header className="hidden md:block">Mark &amp; Rianna</Header>

          <WeddingDateCounter />

          <Button className="px-10" href="#rsvp" size="xl">
            RSVP
          </Button>
        </div>
      </div>
    </section>
  )
}
