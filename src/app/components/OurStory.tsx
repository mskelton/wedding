import Content from "./OurStory.mdx"
import { Prose } from "./Prose"
import { PageSection, PageSectionTitle } from "./Section"

export function OurStory() {
  return (
    <PageSection id="our-story">
      <PageSectionTitle>Our Story</PageSectionTitle>

      <Prose>
        <Content />
      </Prose>
    </PageSection>
  )
}
