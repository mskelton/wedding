import { Prose } from "./Prose"
import {
  PageSection,
  PageSectionFullWidth,
  PageSectionImage,
  PageSectionSeparator,
  PageSectionSubtitle,
  PageSectionTitle,
} from "./Section"

export function OurStory() {
  return (
    <PageSection id="our-story">
      <PageSectionFullWidth>
        <PageSectionImage
          alt="Mark & Rianna"
          className="object-[top_0_left_50%]"
          src="/images/final-18.jpg"
        />
      </PageSectionFullWidth>

      <div className="isolate mx-auto w-[1000px] max-w-full bg-white !pb-0 dark:bg-zinc-950 md:-mt-40 md:max-w-[80vw] md:p-20">
        <PageSectionTitle>Our Story</PageSectionTitle>
        <PageSectionSubtitle>Impossible made possible</PageSectionSubtitle>
        <PageSectionSeparator />

        <Prose className="text-justify prose-p:text-lg prose-p:leading-loose">
          <p>
            “The best thing about our friendship is it will never be more than
            just friends.” This might sound like a joke, but it is something
            that Rianna actually said. For nearly ten years, we remained just
            friends. Sure, we got along well, enjoyed chatting and playing disc
            golf, but there was never a thought of anything more. However,
            thanks to Rianna’s persistent family suggesting we should consider a
            relationship, the unthinkable happened, and we started dating.
          </p>

          <p>
            But it wasn’t entirely smooth sailing from the start. Our first date
            was more like an interrogation, with Mark asking Rianna a few big
            questions, and after receiving all the information he needed, he got
            in his car and left. Turns out that’s not the most effective
            strategy to win a girl’s heart! Thankfully, Rianna wasn’t scared off
            by a little awkwardness on our first few dates, and we pressed on.
          </p>

          <p>
            Fast forward five months to find Mark down on one knee with a ring
            in his hand asking Rianna to marry him. We’ve often reflected on
            those five months of dating and everything we experienced to that
            point. We had some difficult moments, even questioning if we should
            continue, but through it all, we saw God’s hand working in our lives
            individually and together to help us make our decision to marry. We
            know that if we keep our focus fixed on Jesus and seek to love Him
            first, our future together will be bright!
          </p>
        </Prose>
      </div>
    </PageSection>
  )
}
