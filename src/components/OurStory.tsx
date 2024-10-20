import { Prose } from "./Prose"
import {
  PageSection,
  PageSectionSeparator,
  PageSectionSubtitle,
  PageSectionTitle,
} from "./Section"

export function OurStory() {
  return (
    <PageSection id="our-story">
      <PageSectionTitle>Our Story</PageSectionTitle>
      <PageSectionSubtitle className="italic">
        Impossible made possible
      </PageSectionSubtitle>
      <PageSectionSeparator />

      <Prose className="text-center">
        <p>
          Vivamus a rutrum mi. Donec vel erat id eros pulvinar iaculis eu vel
          turpis. Phasellus rutrum facilisis ipsum, id vulputate ante efficitur
          pharetra. Nam imperdiet blandit interdum. Duis non gravida augue.
          Proin eleifend in urna vitae egestas. Duis eu gravida massa. Maecenas
          sodales quam et diam aliquet accumsan. Vestibulum vel nibh laoreet,
          tincidunt nisl vitae, dignissim felis.
        </p>

        <p>
          Aenean suscipit tempor odio, id sagittis turpis luctus at. Mauris
          cursus nisi placerat nulla vehicula, at condimentum metus elementum.
          Aenean lacinia metus erat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque ut ipsum semper lorem convallis
          imperdiet nec sit amet odio. Aenean turpis felis, scelerisque in
          luctus eget, luctus id ligula. Donec in nulla lobortis, facilisis mi
          quis, pellentesque libero. Vestibulum hendrerit consequat lorem a
          varius. Mauris cursus scelerisque eros accumsan mattis. Aliquam
          ultricies, mauris et eleifend ultrices, neque mi hendrerit massa,
          vitae dictum ex lacus a ligula.
        </p>
      </Prose>
    </PageSection>
  )
}
