import Image from "next/image"
import ourStoryImage from "../assets/our-story.jpg"
import Content from "./OurStory.mdx"
import { Prose } from "./Prose"
import { PageSection, PageSectionTitle } from "./Section"

export function OurStory() {
  return (
    <PageSection id="our-story">
      <PageSectionTitle>Our Story</PageSectionTitle>

      <div className="mx-auto mb-16 max-w-screen-md">
        <Image
          alt=""
          className="w-full animate-[1ms_pop_linear] [animation-range:0_30%] [animation-timeline:view()]"
          src={ourStoryImage}
        />
      </div>

      <Prose>
        <Content />
      </Prose>
    </PageSection>
  )
}
