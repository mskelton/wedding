"use client"

import { useRef } from "react"
import { Dialog, Heading, Modal, ModalOverlay } from "react-aria-components"
import { useFormState } from "react-dom"
import { rsvpAction } from "./actions/rsvp"
import { Button } from "./components/Button"
import { Confetti, ConfettiInstance, ConfettiRef } from "./components/Confetti"
import { NumberField } from "./components/NumberField"
import { TextField } from "./components/TextField"
import { useRSVP } from "./RVSPProvider"

export function RSVP() {
  const { close, isOpen } = useRSVP()
  const [_, formAction] = useFormState(rsvpAction, {})
  const confettiRef = useRef<ConfettiRef | null>(null)

  return (
    <ModalOverlay
      className="fixed inset-0 z-50 flex h-[--visual-viewport-height] w-screen items-center justify-center bg-zinc-950/80 p-4 data-[entering]:animate-[modal-fade_200ms] data-[exiting]:animate-[modal-fade_150ms_reverse_ease-in]"
      isOpen={isOpen}
      onOpenChange={close}
    >
      <Confetti ref={confettiRef} />

      <Modal className="data-[entering]:animate-[modal-zoom_300ms_cubic-bezier(0.175,0.885,0.32,1.275)]">
        <Dialog className="max-w-xl border bg-white p-10 dark:border-zinc-700 dark:bg-zinc-950">
          {({ close }) => (
            <form action={formAction}>
              <Heading className="mb-4 text-2xl" slot="title">
                We’re glad you’re coming!
              </Heading>

              <div className="mb-12 space-y-6 font-sans">
                <p className="text-zinc-800 dark:text-zinc-300">
                  Are you sure you want to deactivate your account? All of your
                  data will be permanently removed.
                </p>

                <TextField label="Your name" name="name" />
                <NumberField
                  label="Number of additional guests"
                  name="guests"
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button onClick={close} size="lg" variant="secondary">
                  Cancel
                </Button>

                <Button
                  onClick={() => fire(confettiRef.current?.confetti)}
                  size="lg"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  )
}

function fire(confetti: ConfettiInstance | undefined) {
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
