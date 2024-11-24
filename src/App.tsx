import { DateVenue } from "./components/DateVenue"
import { FAQs } from "./components/FAQs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { OurStory } from "./components/OurStory"
import { Gallery } from "./Gallery"
import { Header } from "./Header"
import { RSVP } from "./RSVP"

export default function Home() {
  return (
    <div style={{ "--header-height": "4rem" } as React.CSSProperties}>
      <div id="home" />
      <Header />

      <main>
        <Hero />
        <DateVenue />
        <OurStory />
        <Gallery />
        <RSVP />
        <FAQs />
        <Footer />
      </main>
    </div>
  )
}
