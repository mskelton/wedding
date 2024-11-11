import { useRef, useState } from "react"
import { flushSync } from "react-dom"
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
import { startViewTransition } from "./utils/startViewTransition"

type FormStatus = "error" | "idle" | "submitting" | "success"

export function RSVP() {
  const confettiRef = useRef<ConfettiRef | null>(null)
  const [status, setStatus] = useState<FormStatus>("idle")

  async function handleSubmit(formData: FormData) {
    setStatus("submitting")

    const { error } = await db.from("attendees").insert({
      additional_attendees: parseInt(
        formData.get("additional_attendees") as string,
      ),
      name: formData.get("name") as string,
      notes: formData.get("notes") as string,
    })

    if (error) {
      startViewTransition(() => {
        flushSync(() => setStatus("error"))
      })

      console.error(error)
      return
    }

    fireConfetti(confettiRef.current?.getConfetti())
    setStatus("success")
  }

  return (
    <>
      <PageSection id="rsvp">
        <PageSectionTitle>RSVP</PageSectionTitle>
        <PageSectionSubtitle>
          We can’t wait to see you there!
        </PageSectionSubtitle>
        <PageSectionSeparator />

        <RSVPForm onSubmit={handleSubmit} status={status} />
      </PageSection>

      <Confetti ref={confettiRef} className="z-50" />
    </>
  )
}

function RSVPForm({
  onSubmit,
  status,
}: {
  onSubmit: (data: FormData) => void
  status: FormStatus
}) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    onSubmit(new FormData(event.currentTarget))
  }

  return (
    <form className="mx-auto w-full max-w-lg" onSubmit={handleSubmit}>
      {status === "error" ? (
        <div className="mb-8 border border-red-600 px-4 py-3">
          <p className="mb-2 text-lg font-semibold text-red-600">
            Uh oh, we messed up
          </p>

          <p className="font-sans text-sm font-light text-zinc-600 dark:text-zinc-400">
            Something didn’t work when we tried submitting your RVSP. You can
            blame Mark, he’s the one that decided it would be a good idea to
            build a custom wedding website.
          </p>
        </div>
      ) : null}

      {status === "success" ? (
        <div className="mb-8 border border-green-600 px-4 py-3">
          <p className="mb-2 text-lg font-semibold text-green-600">
            We can’t wait to see you there!
          </p>

          <p className="font-sans text-sm font-light text-zinc-600 dark:text-zinc-400">
            We’ve received your RSVP and can’t wait to see you there! If you
            have any more questions or need to make any changes, feel free to
            give us a shout!
          </p>
        </div>
      ) : null}

      <div className="space-y-6 font-sans">
        <TextField autoComplete="name" isRequired name="name">
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
