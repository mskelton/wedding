import { DateVenue } from "./components/DateVenue"
import { Hero } from "./components/Hero"
import { OurStory } from "./components/OurStory"
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
        {/* <FAQs /> */}
        <Travel />
        {/* <RSVP /> */}
      </main>
    </div>
  )
}
