"use client"

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react"
import { useRSVP } from "./RVSPProvider"

export function RSVP() {
  const { close, isOpen } = useRSVP()

  return (
    <Dialog onClose={close} open={isOpen}>
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold">Deactivate account</DialogTitle>
          <Description>
            This will permanently deactivate your account
          </Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed.
          </p>

          <div className="flex gap-4">
            <button onClick={close} type="button">
              Cancel
            </button>
            <button onClick={close} type="button">
              Deactivate
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
