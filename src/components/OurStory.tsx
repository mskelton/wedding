import ourStoryImage from "../assets/our-story.jpg"
import { Prose } from "./Prose"
import { PageSection, PageSectionImage, PageSectionTitle } from "./Section"

export function OurStory() {
  return (
    <PageSection id="our-story">
      <PageSectionTitle>Our Story</PageSectionTitle>
      <PageSectionImage alt="" src={ourStoryImage} />

      <Prose>
        <p>
          Vivamus a rutrum mi. Donec vel erat id eros pulvinar iaculis eu vel
          turpis. Phasellus rutrum facilisis ipsum, id vulputate ante efficitur
          pharetra. Nam imperdiet blandit interdum. Duis non gravida augue.
          Proin eleifend in urna vitae egestas. Duis eu gravida massa. Maecenas
          sodales quam et diam aliquet accumsan. Vestibulum vel nibh laoreet,
          tincidunt nisl vitae, dignissim felis.
        </p>

        <p>
          Vestibulum sed molestie libero. Nam consequat odio a egestas pretium.
          Suspendisse commodo ultrices metus, vel iaculis quam pellentesque
          eget. Suspendisse neque lacus, egestas a libero ut, elementum
          porttitor tellus. Etiam in mollis lacus, iaculis commodo nulla.
          Suspendisse nec mi tempus, elementum nisl a, facilisis velit. Duis
          vestibulum felis a posuere sodales. Donec consectetur leo a imperdiet
          efficitur. In placerat, ante a lacinia imperdiet, nunc eros interdum
          nisl, vitae scelerisque metus orci vel lacus. Sed in ullamcorper
          augue. Duis dignissim, lorem efficitur feugiat vestibulum, lectus nunc
          imperdiet enim, at posuere nunc ante eu est. Donec pellentesque
          vulputate turpis, vel eleifend diam vehicula sit amet. Integer urna
          odio, blandit at metus quis, tempus convallis velit. Donec auctor
          lacus id dui sodales sollicitudin non id lectus. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
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
