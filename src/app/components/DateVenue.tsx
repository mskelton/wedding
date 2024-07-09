import { date } from "../lib/date"

export function DateVenue() {
  return (
    <section className="px-8 py-40 text-center dark:text-white" id="date-venue">
      <h3 className="mb-4 text-5xl">
        {date.toLocaleDateString(undefined, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </h3>

      <p className="text-2xl text-zinc-400 dark:text-zinc-600">
        <span className="relative before:absolute before:-left-[200%] before:right-[-200%] before:top-1/2 before:block before:h-0.5 before:bg-zinc-300 dark:before:bg-zinc-700">
          <span className="isolate bg-white px-3 dark:bg-zinc-950">
            {date.toLocaleDateString(undefined, { weekday: "long" })}
          </span>
        </span>
      </p>
    </section>
  )
}
