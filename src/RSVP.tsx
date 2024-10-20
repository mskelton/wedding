import { useRef } from "react"
import { Button } from "./components/Button"
import { Confetti, ConfettiInstance, ConfettiRef } from "./components/Confetti"
import { FieldError } from "./components/FieldError"
import { Input } from "./components/Input"
import { Label } from "./components/Label"
import { NumberField } from "./components/NumberField"
import {
  PageSection,
  PageSectionSeparator,
  PageSectionSubtitle,
  PageSectionTitle,
} from "./components/Section"
import { TextArea } from "./components/TextArea"
import { TextField } from "./components/TextField"
import { db } from "./utils/db"

export function RSVP() {
  const confettiRef = useRef<ConfettiRef | null>(null)
  const confetti = confettiRef.current?.confetti

  async function handleSubmit(formData: FormData) {
    const { error } = await db.from("attendees").insert({
      additional_attendees: parseInt(
        formData.get("additional_attendees") as string,
      ),
      name: formData.get("name") as string,
      notes: formData.get("notes") as string,
    })

    if (error) {
      // TODO: Toast
      console.log("error", error)
    } else {
      fireConfetti(confetti)
      close()
    }
  }

  return (
    <>
      <PageSection id="rsvp">
        <PageSectionTitle>RSVP</PageSectionTitle>
        <PageSectionSubtitle>
          We can’t wait to see you there!
        </PageSectionSubtitle>
        <PageSectionSeparator />

        <RSVPForm onSubmit={handleSubmit} />
      </PageSection>

      <Confetti ref={confettiRef} className="z-50" />
    </>
  )
}

function RSVPForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(new FormData(event.currentTarget))
  }

  return (
    <form className="mx-auto w-full max-w-lg" onSubmit={handleSubmit}>
      <div className="space-y-6 font-sans">
        <TextField autoComplete="name" autoFocus isRequired name="name">
          <Label>Your name</Label>
          <Input data-1p-ignore />
          <FieldError>
            {({ validationDetails }) =>
              validationDetails.valueMissing
                ? "It’s kind of hard to guess your name. Care to share?"
                : ""
            }
          </FieldError>
        </TextField>

        <NumberField defaultValue={0} minValue={0} name="attendees">
          <Label>Additional guests</Label>
          <Input />
        </NumberField>

        <TextField name="notes">
          <Label>Notes</Label>
          <TextArea className="resize-none" rows={3} />
        </TextField>

        <Button className="w-full" size="lg" type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

function fireConfetti(confetti: ConfettiInstance | undefined) {
  if (!confetti) return

  const options = {
    origin: { y: 0.6 },
  }

  confetti({
    ...options,
    particleCount: Math.floor(200 * 0.25),
    spread: 26,
    startVelocity: 55,
  })

  confetti({
    ...options,
    particleCount: Math.floor(200 * 0.2),
    spread: 60,
  })

  confetti({
    decay: 0.91,
    ...options,
    particleCount: Math.floor(200 * 0.35),
    scalar: 0.8,
    spread: 100,
  })

  confetti({
    decay: 0.92,
    ...options,
    particleCount: Math.floor(200 * 0.1),
    scalar: 1.2,
    spread: 120,
    startVelocity: 25,
  })

  confetti({
    ...options,
    particleCount: Math.floor(200 * 0.1),
    spread: 120,
    startVelocity: 45,
  })
}
