"use client"

import { useContext, useRef } from "react"
import {
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
  OverlayTriggerStateContext,
} from "react-aria-components"
import { Button } from "./components/Button"
import { Confetti, ConfettiInstance, ConfettiRef } from "./components/Confetti"
import { FieldError } from "./components/FieldError"
import { Input } from "./components/Input"
import { Label } from "./components/Label"
import { NumberField } from "./components/NumberField"
import { TextArea } from "./components/TextArea"
import { TextField } from "./components/TextField"
import { useRSVP } from "./RVSPProvider"

export function RSVP() {
  const { close, isOpen } = useRSVP()
  const confettiRef = useRef<ConfettiRef | null>(null)
  const confetti = confettiRef.current?.confetti

  function handleSubmit() {
    fireConfetti(confetti)
    close()
  }

  return (
    <>
      <ModalOverlay
        className="fixed inset-0 z-40 flex h-[--visual-viewport-height] w-screen items-center justify-center bg-zinc-950/80 p-4 data-[entering]:animate-[modal-fade_200ms] data-[exiting]:animate-[modal-fade_150ms_reverse_ease-in]"
        isOpen={isOpen}
        onOpenChange={close}
      >
        <Modal className="data-[entering]:animate-[modal-zoom_300ms_cubic-bezier(0.175,0.885,0.32,1.275)]">
          <Dialog className="max-w-xl border bg-white p-10 dark:border-zinc-700 dark:bg-zinc-950">
            <RSVPForm onSubmit={handleSubmit} />
          </Dialog>
        </Modal>
      </ModalOverlay>

      <Confetti ref={confettiRef} className="z-50" />
    </>
  )
}

type FormData = {
  guests: number
  name: string
}

function RSVPForm({ onSubmit }: { onSubmit: (data: FormData) => void }) {
  const { close } = useContext(OverlayTriggerStateContext)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get("name") as string
    const guests = parseInt(formData.get("guests") as string)

    onSubmit({ guests, name })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Heading className="mb-4 text-2xl" slot="title">
        We’re glad you’re coming!
      </Heading>

      <div className="mb-12 space-y-6 font-sans">
        <p className="text-zinc-800 dark:text-zinc-400">
          We are excited to have you join us for our special day. Let us know
          your name and how many of your family will be joining you. We welcome
          plus ones, but please ask before bringing any additional guests.
        </p>

        <TextField autoFocus isRequired name="name">
          <Label>Your name</Label>
          <Input />
          <FieldError>
            {({ validationDetails }) =>
              validationDetails.valueMissing
                ? "It’s kind of hard to guess your name. Care to share?"
                : ""
            }
          </FieldError>
        </TextField>

        <NumberField defaultValue={0} minValue={0} name="guests">
          <Label>Additional family members</Label>
          <Input />
        </NumberField>

        <TextField name="notes">
          <Label>Other notes</Label>
          <TextArea className="resize-none" rows={3} />
        </TextField>
      </div>

      <div className="flex justify-end gap-4">
        <Button onClick={close} size="lg" variant="secondary">
          Cancel
        </Button>

        <Button size="lg" type="submit">
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
