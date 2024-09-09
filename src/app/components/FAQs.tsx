import Content from "./FAQs.mdx"
import { Prose } from "./Prose"
import { PageSection, PageSectionTitle } from "./Section"

export function FAQs() {
  return (
    <PageSection id="faqs">
      <PageSectionTitle>FAQs</PageSectionTitle>

      <Prose>
        <Content />
      </Prose>
    </PageSection>
  )
}
