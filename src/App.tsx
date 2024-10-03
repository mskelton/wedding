import { DateVenue } from "./components/DateVenue"
import { FAQs } from "./components/FAQs"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { OurStory } from "./components/OurStory"
import { useThemeToggle } from "./components/ThemeToggle"
import { Travel } from "./components/Travel"
import { Header } from "./Header"
import { RSVP } from "./RSVP"
import { RVSPProvider } from "./RVSPProvider"

export default function Home() {
  useThemeToggle()

  return (
    <RVSPProvider>
      <div style={{ "--header-height": "4rem" } as React.CSSProperties}>
        <Header />
        <RSVP />

        <main>
          <Hero />
          <DateVenue />
          <OurStory />
          <FAQs />
          <Travel />
          <Footer />
        </main>
      </div>
    </RVSPProvider>
  )
}
