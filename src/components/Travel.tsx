import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import { styled } from "../utils/styled"
import { Button } from "./Button"
import { PageSection, PageSectionImage, PageSectionTitle } from "./Section"

const Content = styled.div("mx-auto max-w-2xl text-center space-y-12")
const Section = styled.div("space-y-4")
const Header = styled.p("mb-6 text-4xl")
const CardGrid = styled.div("grid grid-cols-1 sm:grid-cols-2 gap-2")

export function Travel() {
  return (
    <PageSection id="travel">
      <PageSectionTitle>Travel</PageSectionTitle>
      <PageSectionImage alt="Travel" src="/images/our-story.jpg" />

      <Content>
        <Section>
          <Header>Stay</Header>
          <Card
            action={
              <Button href="https://choicehotels.com/illinois/stockton/country-inn-suites-hotels/il561">
                Book Online
              </Button>
            }
            description="Located about 1/2 way between the ceremony and reception locations making it a convenient choice for accommodations! Ask for the Skelton-Last Wedding room block for a discounted rate."
            title="Country Inn & Suites"
          />
        </Section>

        <Section>
          <Header>Eat</Header>

          <CardGrid>
            <Card
              href="https://mudrunbeer.com/"
              location="Stockton, IL"
              title="Mud Run Beer Co"
            />

            <Card
              href="https://www.vinnysgalena.com/default.aspx"
              location="Galena, IL"
              title="Vinny Vanucchi’s"
            />

            <Card
              href="https://www.friedgreen.com/"
              location="Galena, IL"
              title="Fried Green Tomatoes"
            />

            <Card
              href="https://www.thrivingthistle.com/"
              location="Apple River, IL"
              title="Thriving Thistle"
            />
          </CardGrid>
        </Section>

        <Section>
          <Header>Explore</Header>

          <CardGrid>
            <Card
              description="Hiking, fishing, and picnicking in the beautiful Apple River Canyon."
              href="https://dnr.illinois.gov/parks/park.applerivercanyon.html"
              title="Apple River Canyon State Park"
            />

            <Card
              description="Historic town with shopping, dining, and beautiful views."
              href="https://www.visitgalena.org/"
              title="Galena, Illinois"
            />

            <Card
              description="Historic town with shopping, dining, and beautiful views."
              href="https://experienceshullsburg.com/"
              title="Shullsburg, WI"
            />
          </CardGrid>
        </Section>
      </Content>
    </PageSection>
  )
}

function Card({
  action,
  description,
  href,
  location,
  title,
}: {
  action?: React.ReactNode
  description?: string
  href?: string
  location?: string
  title: string
}) {
  const Title = href ? "a" : "p"

  return (
    <div
      className={clsx(
        "group relative isolate grid items-center gap-6 border border-zinc-200 p-3 text-left dark:border-zinc-700",
        "grid-cols-1",
        action && "sm:grid-cols-[1fr,auto]",
        href && "grid-cols-[1fr,auto]",
        href &&
          "transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50",
      )}
    >
      <div>
        <Title className="mb-1" href={href}>
          {href ? (
            <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
          ) : null}

          <span className="relative z-10">{title}</span>
        </Title>

        <p className="font-sans text-sm font-light text-zinc-600 dark:text-zinc-400">
          {description ?? location}
        </p>
      </div>

      {action}
      {href ? (
        <ArrowTopRightOnSquareIcon className="size-4 self-start text-zinc-500" />
      ) : null}
    </div>
  )
}
