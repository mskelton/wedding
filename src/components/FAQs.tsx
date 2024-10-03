import { useRSVP } from "../RVSPProvider"
import { styled } from "../utils/styled"
import { Prose } from "./Prose"
import { PageSection, PageSectionImage, PageSectionTitle } from "./Section"

const Question = styled.h3()
const Answer = styled.p()

export function FAQs() {
  const { open } = useRSVP()

  return (
    <PageSection id="faqs">
      <PageSectionTitle>FAQs</PageSectionTitle>
      <PageSectionImage alt="FAQs" src="/images/our-story.jpg" />

      <Prose>
        <Question>When is the RSVP deadline?</Question>
        <Answer>
          Please{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={open}
            type="button"
          >
            RSVP
          </button>{" "}
          now!
        </Answer>

        <Question>Is the wedding indoors or outdoors?</Question>
        <Answer>
          Both the ceremony and reception will be indoors with the reception in
          a non-air-conditioned pole barn in the country. The reception location
          has plenty of outdoor space to explore with grass paths and gravel
          lanes.
        </Answer>

        <Question>What should I wear?</Question>
        <Answer>
          You know us ;)! We care more about that you’re there than about what
          you wear! Search wedding casual or wedding dressy casual to get an
          idea of what most of our guests will probably be wearing.
        </Answer>

        <Question>What time will the reception end?</Question>
        <Answer>
          The bride and groom plan to leave at 8 pm. You’re welcome to stay
          longer!
        </Answer>

        <Question>Are kids welcome?</Question>
        <Answer>
          Yes, we’ll have some games and activities at the reception for the
          kids - and for the young-at-heart if you want to join in! ;)
        </Answer>

        <Question>
          Is it okay to take pictures with our phones and cameras during the
          wedding?
        </Question>
        <Answer>
          Yes! We would love for you to take photos and share them with us if
          you want!
        </Answer>

        <Question>Who should I contact with questions?</Question>
        <Answer>
          Please reach out to maid-of-honor, Hannah 815-900-2053, if you have
          any additional questions!
        </Answer>
      </Prose>
    </PageSection>
  )
}
