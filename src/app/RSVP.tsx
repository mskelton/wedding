"use client"

import { useContext, useRef, useState } from "react"
import {
  Dialog,
  Heading,
  Modal,
  ModalOverlay,
  OverlayTriggerStateContext,
} from "react-aria-components"
import { Button } from "./components/Button"
import { Confetti, ConfettiInstance, ConfettiRef } from "./components/Confetti"
import { NumberField } from "./components/NumberField"
import { TextField } from "./components/TextField"
import { useRSVP } from "./RVSPProvider"
import { startViewTransition } from "./utils/startViewTransition"

export function RSVP() {
  const { close, isOpen } = useRSVP()

  return (
    <ModalOverlay
      className="fixed inset-0 z-50 flex h-[--visual-viewport-height] w-screen items-center justify-center bg-zinc-950/80 p-4 data-[entering]:animate-[modal-fade_200ms] data-[exiting]:animate-[modal-fade_150ms_reverse_ease-in]"
      isOpen={isOpen}
      onOpenChange={close}
    >
      <Modal className="data-[entering]:animate-[modal-zoom_300ms_cubic-bezier(0.175,0.885,0.32,1.275)]">
        <Dialog className="max-w-xl border bg-white p-10 dark:border-zinc-700 dark:bg-zinc-950">
          <ModalContent />
        </Dialog>
      </Modal>
    </ModalOverlay>
  )
}

function ModalContent() {
  const [view, setView] = useState<"confirmation" | "form">("form")
  const confettiRef = useRef<ConfettiRef | null>(null)

  function handleSubmit({ guests, name }: FormData) {
    startViewTransition((supportsViewTransitions) => {
      setView("confirmation")
      fireConfetti(confettiRef.current?.confetti, {
        delay: supportsViewTransitions ? 300 : 0,
      })
    })
  }

  return (
    <>
      <Confetti ref={confettiRef} />

      {view === "form" ? (
        <RSVPForm onSubmit={handleSubmit} />
      ) : (
        <Confirmation />
      )}
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
        <p className="text-zinc-800 dark:text-zinc-300">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed.
        </p>

        <TextField autoFocus label="Your name" name="name" />
        <NumberField label="Number of additional guests" name="guests" />
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

function Confirmation() {
  const { close } = useContext(OverlayTriggerStateContext)

  return (
    <>
      <Heading className="mb-4 text-2xl" slot="title">
        See you there!
      </Heading>

      <div className="mb-12 space-y-6 font-sans">
        <p className="text-zinc-800 dark:text-zinc-300">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed.
        </p>
      </div>

      <div className="flex justify-end gap-4">
        <Button onClick={close} size="lg">
          Done
        </Button>
      </div>
    </>
  )
}

function fireConfetti(
  confetti: ConfettiInstance | undefined,
  { delay }: { delay: number },
) {
  if (!confetti) return

  const options = {
    origin: { y: 0.6 },
  }

  setTimeout(() => {
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
  }, delay)
}
