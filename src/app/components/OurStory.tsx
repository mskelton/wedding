import Content from "./OurStory.mdx"
import { Prose } from "./Prose"

export function OurStory() {
  return (
    <section className="my-40 px-8 dark:text-white" id="our-story">
      <h3 className="mb-8 text-center text-5xl">Our Story</h3>

      <Prose>
        <Content />
      </Prose>
    </section>
  )
}
