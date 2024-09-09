import { dates } from "../lib/date"
import { styled } from "../lib/styled"
import { Button } from "./Button"
import { PageSection, PageSectionTitle } from "./Section"

const Text = styled.p("text-lg")
const Location = styled.p(
  "text-md mb-6 font-light text-gray-400 dark:text-gray-400",
)
const Subheader = styled.p("mb-1 text-3xl")
const Time = styled.p("mb-4 text-xl text-gray-500 dark:text-gray-400")

export function DateVenue() {
  return (
    <PageSection className="text-center" id="date-venue">
      <PageSectionTitle className="mb-4">
        {dates.wedding.toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </PageSectionTitle>

      <p className="mb-16 text-2xl text-zinc-400 dark:text-zinc-600">
        <span className="relative before:absolute before:-left-[200%] before:right-[-200%] before:top-1/2 before:block before:h-0.5 before:bg-zinc-300 dark:before:bg-zinc-700">
          <span className="isolate bg-white px-3 dark:bg-zinc-950">
            {dates.wedding.toLocaleDateString(undefined, { weekday: "long" })}
          </span>
        </span>
      </p>

      <div className="flex flex-col justify-center gap-16 md:flex-row md:gap-32">
        <div>
          <Subheader>Ceremony</Subheader>
          <Time>
            {dates.wedding.toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
          </Time>
          <Text>Monroe Bible Church</Text>
          <Location>Monroe, Wisconsin</Location>
          <Button
            href="https://maps.app.goo.gl/RucPEE5TDz4acEUN7"
            target="_blank"
          >
            View Map
          </Button>
        </div>

        <div>
          <Subheader>Reception</Subheader>
          <Time>
            {dates.reception.toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "numeric",
            })}
          </Time>
          <Text>Monroe Bible Church</Text>
          <Location>Monroe, Wisconsin</Location>
          <Button
            href="https://maps.app.goo.gl/RucPEE5TDz4acEUN7"
            target="_blank"
          >
            View Map
          </Button>
        </div>
      </div>
    </PageSection>
  )
}
