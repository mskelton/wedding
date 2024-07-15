import { dates } from "../lib/date"
import { styled } from "../lib/styled"
import { Button } from "./Button"

const Text = styled.p("text-sans text-lg font-light")
const Subheader = styled.p("mb-2 text-3xl")

export function DateVenue() {
  return (
    <section className="my-40 px-8 text-center dark:text-white" id="date-venue">
      <h3 className="mb-4 text-5xl">
        {dates.wedding.toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>

      <p className="mb-12 text-2xl text-zinc-400 dark:text-zinc-600">
        <span className="relative before:absolute before:-left-[200%] before:right-[-200%] before:top-1/2 before:block before:h-0.5 before:bg-zinc-300 dark:before:bg-zinc-700">
          <span className="isolate bg-white px-3 dark:bg-zinc-950">
            {dates.wedding.toLocaleDateString(undefined, { weekday: "long" })}
          </span>
        </span>
      </p>

      <Subheader>
        {dates.wedding.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "numeric",
        })}
      </Subheader>
      <Text>Monroe Bible Church</Text>
      <Text className="mb-3">Monroe, Wisconsin</Text>
      <Button
        className="mb-10"
        href="https://maps.app.goo.gl/RucPEE5TDz4acEUN7"
        target="_blank"
      >
        View Map
      </Button>

      <Subheader>
        {dates.reception.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "numeric",
        })}
      </Subheader>
      <Text>Monroe Bible Church</Text>
      <Text className="mb-3">Monroe, Wisconsin</Text>
      <Button href="https://maps.app.goo.gl/RucPEE5TDz4acEUN7" target="_blank">
        View Map
      </Button>
    </section>
  )
}
