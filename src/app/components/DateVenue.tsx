import { date } from "../lib/date"

export function DateVenue() {
  return (
    <section className="py-40 px-8 text-center dark:text-white" id="date-venue">
      <h3 className="text-5xl mb-4">
        {date.toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>

      <p className="text-2xl text-zinc-400">
        <span className="relative before:bg-zinc-300 before:block before:h-0.5 before:-left-[200%] before:right-[-200%] before:top-1/2 before:absolute">
          <span className="bg-white isolate px-3">
            {date.toLocaleDateString(undefined, { weekday: "long" })}
          </span>
        </span>
      </p>
    </section>
  )
}
