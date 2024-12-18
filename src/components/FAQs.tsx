import { dates } from "../utils/date"
import { formatStylizedDate } from "../utils/formatStylizedDate"
import { styled } from "../utils/styled"
import { Prose } from "./Prose"
import { PageSection, PageSectionTitle } from "./Section"

const Question = styled.h3("text-zinc-200")
const Answer = styled.p()

export function FAQs() {
  return (
    <PageSection id="faqs">
      <PageSectionTitle>FAQs</PageSectionTitle>

      <Prose>
        <Question>What is the RSVP deadline?</Question>
        <Answer>
          {formatStylizedDate(dates.rsvpDeadline, {
            day: "numeric",
            month: "long",
          })}
          , but please respond as soon as possible.
        </Answer>

        <Question>What should I wear?</Question>
        <Answer>
          As you probably know, we are both pretty casual in general, so while
          the wedding party will be dressed up, we hope that you will attend
          regardless of how formal or casual you choose to dress!
        </Answer>

        <Question>When will food be served at the reception?</Question>
        <Answer>
          Food will be served by{" "}
          {dates.food.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "America/Chicago",
          })}{" "}
          and will be a variety of hors d’oeuvres and desserts.
        </Answer>

        <Question>What time will the reception end?</Question>
        <Answer>
          The bride and groom will be leaving the reception around{" "}
          {dates.receptionEnd.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            timeZone: "America/Chicago",
          })}
          , but you are more than welcome to stay as long as you would like!
          Just be careful not to stay too late or you might get roped into
          helping the cleanup crew!
        </Answer>

        <Question>Do you have a registry?</Question>
        <Answer>
          We are registered at{" "}
          <a href="https://www.amazon.com/wedding/share/skelton-caswell">
            Amazon
          </a>
          , but please do not in any way feel obligated to give a gift. Your
          presence at our wedding is what we would like most!
        </Answer>

        <Question>Are kids welcome?</Question>
        <Answer>
          Absolutely! We love kids and would be thrilled to have them at the
          wedding! Just make sure that you leave with the same number of kids
          you brought 😜.
        </Answer>

        <Question>
          Is it okay to take pictures during the ceremony or reception?
        </Question>
        <Answer>
          Most definitely, and if you take some nice photos we’d love to see
          them, so please tag us on social media!
        </Answer>

        <Question>Who can I contact with any questions?</Question>
        <Answer>
          Feel free to reach out to Mark with any questions you have prior to
          the wedding. You can reach him via email at{" "}
          <a href="mailto:mdskelton99@gmail.com">mdskelton99@gmail.com</a> or
          phone at <a href="tel:+16088971196">(608) 897-1196</a>.
        </Answer>
      </Prose>
    </PageSection>
  )
}
