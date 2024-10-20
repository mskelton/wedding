import { DateVenue } from "./components/DateVenue"
import { FAQs } from "./components/FAQs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { OurStory } from "./components/OurStory"
import { useThemeToggle } from "./components/ThemeToggle"
import { Gallery } from "./Gallery"
import { Header } from "./Header"
import { RSVP } from "./RSVP"

export default function Home() {
  useThemeToggle()

  return (
    <div style={{ "--header-height": "4rem" } as React.CSSProperties}>
      <div id="home" />
      <Header />

      <main>
        <Hero />
        <OurStory />
        <DateVenue />
        <Gallery />
        <RSVP />
        <FAQs />
        <Footer />
      </main>
    </div>
  )
}
