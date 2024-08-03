import { styled } from "../lib/styled"
import { Button } from "./Button"
import { PageSection, PageSectionTitle } from "./Section"

const Section = styled.div("mb-8")
const Header = styled.p("mb-1 text-3xl")
const Text = styled.p("text-base text-light")

export function Travel() {
  return (
    <PageSection id="travel">
      <PageSectionTitle>Travel</PageSectionTitle>

      <Section>
        <Header>Country Inn & Suites, Stockton</Header>
        <Text>
          Stockton is located about 1/2 way between the ceremony and reception
          locations making it a convenient choice for accommodations! Ask for
          the Skelton-Last Wedding block of rooms to reserve one.
        </Text>

        <Button href="https://choicehotels.com/illinois/stockton/country-inn-suites-hotels/il561 ">
          Book Online
        </Button>
      </Section>
    </PageSection>
  )
}
