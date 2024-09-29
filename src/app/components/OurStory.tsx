import ourStoryImage from "../assets/our-story.jpg"
import Content from "./OurStory.mdx"
import { Prose } from "./Prose"
import { PageSection, PageSectionImage, PageSectionTitle } from "./Section"

export function OurStory() {
  return (
    <PageSection id="our-story">
      <PageSectionTitle>Our Story</PageSectionTitle>
      <PageSectionImage alt="" src={ourStoryImage} />

      <Prose>
        <Content />
      </Prose>
    </PageSection>
  )
}
