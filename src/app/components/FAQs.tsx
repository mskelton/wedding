import faqImageSrc from "../assets/our-story.jpg"
import Content from "./FAQs.mdx"
import { Prose } from "./Prose"
import { PageSection, PageSectionImage, PageSectionTitle } from "./Section"

export function FAQs() {
  return (
    <PageSection id="faqs">
      <PageSectionTitle>FAQs</PageSectionTitle>
      <PageSectionImage alt="FAQs" src={faqImageSrc} />

      <Prose>
        <Content />
      </Prose>
    </PageSection>
  )
}
