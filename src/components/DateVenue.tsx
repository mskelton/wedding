import { dates } from "../utils/date"
import { formatStylizedDate } from "../utils/formatStylizedDate"
import { styled } from "../utils/styled"
import { Button } from "./Button"
import { PageSection, PageSectionTitle } from "./Section"

const LocationName = styled.p("text-lg mb-1")
const Location = styled.p(
  "text-md mb-8 font-light text-gray-400 dark:text-gray-400",
)
const Subheader = styled.p("mb-2 text-3xl")
const Time = styled.p("mb-8 text-xl text-gray-500 dark:text-gray-400")

export function DateVenue() {
  return (
    <PageSection className="text-center" id="date-venue">
      <div>
        <PageSectionTitle className="mb-4">
          {formatStylizedDate(dates.wedding)}
        </PageSectionTitle>

        <div className="relative mb-16 w-full">
          <div className="absolute top-[calc(50%-1px)] flex w-full justify-center">
            <div className="h-0.5 w-[90%] max-w-screen-md bg-zinc-300 dark:bg-zinc-700" />
          </div>

          <div className="isolate flex items-center justify-center">
            <p className="bg-white px-4 text-2xl text-zinc-400 dark:bg-zinc-950 dark:text-zinc-600">
              {dates.wedding.toLocaleDateString("en-US", { weekday: "long" })}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-24 md:flex-row md:gap-32">
          <div>
            <Subheader>Ceremony</Subheader>
            <Time>
              {dates.wedding.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                timeZone: "America/Chicago",
              })}
            </Time>
            <LocationName>Park Hills Church</LocationName>
            <Location>
              2525 W Stephenson St
              <br />
              Freeport, Illinois
            </Location>
            <Button
              href="https://maps.app.goo.gl/TPhkLNjw3MmwZuRF6"
              target="_blank"
            >
              View Map
            </Button>
          </div>

          <div>
            <Subheader>Reception</Subheader>
            <Time>
              {dates.reception.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                timeZone: "America/Chicago",
              })}
            </Time>
            <LocationName>The Field House</LocationName>
            <Location>
              8775 S Town Hall Rd
              <br />
              Stockton, Illinois
            </Location>
            <Button
              href="https://maps.app.goo.gl/erkLD8hTQ3iAj2PTA"
              target="_blank"
            >
              View Map
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
