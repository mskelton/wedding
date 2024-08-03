import { DateVenue } from "./components/DateVenue"
import { FAQs } from "./components/FAQs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { OurStory } from "./components/OurStory"
import { RSVP } from "./components/RSVP"
import { Travel } from "./components/Travel"
import { Header } from "./Header"

export default function Home() {
  return (
    <div style={{ "--header-height": "4rem" } as React.CSSProperties}>
      <Header />

      <main>
        <Hero />
        <DateVenue />
        <OurStory />
        <FAQs />
        <Travel />
        <RSVP />
        <Footer />
      </main>
    </div>
  )
}
