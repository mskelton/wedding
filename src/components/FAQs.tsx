import { styled } from "../utils/styled"
import { Prose } from "./Prose"
import { PageSection, PageSectionTitle } from "./Section"

const Question = styled.h3()
const Answer = styled.p()

export function FAQs() {
  return (
    <PageSection id="faqs">
      <PageSectionTitle>FAQs</PageSectionTitle>

      <Prose>
        <Question>Is the wedding indoors or outdoors?</Question>
        <Answer>Both the ceremony and reception will be indoors.</Answer>

        <Question>What should I wear?</Question>
        <Answer>
          As you probably know, we are both pretty casually in general, so while
          the wedding party will be dressed up, we hope that you will attend
          regardless of how formal or casual you choose to dress!
        </Answer>

        <Question>What time will the reception end?</Question>
        <Answer>
          The bride and groom will be leaving the reception around 5:30 PM, but
          you are more than welcome to stay as long as you would like! Just be
          careful not to stay too late or you might get roped into helping the
          cleanup crew!
        </Answer>

        <Question>Do you have a registry?</Question>
        <Answer>
          We are registered at{" "}
          <a href="https://www.amazon.com/wedding/share/skelton-caswell">
            Amazon
          </a>{" "}
          and{" "}
          <a href="https://www.myregistry.com/wedding-registry/mark-skelton-and-rianna-caswell-monroe-wi/4523077">
            Bed Bath &amp; Beyond
          </a>
          , but please do not in any way feel obligated to give a gift. Your
          presence at our wedding is what we would like most!
        </Answer>

        <Question>Are kids welcome?</Question>
        <Answer>
          Absolutely! We love kids and would be thrilled to have them at the
          wedding.
        </Answer>

        <Question>
          Is it okay to take pictures during the ceremony or reception?
        </Question>
        <Answer>
          Most definitely, and if you take some nice photos we’d love to see
          them, so feel free to tag us on social media!
        </Answer>
      </Prose>
    </PageSection>
  )
}
