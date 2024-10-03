import canvasConfetti, { CreateTypes } from "canvas-confetti"
import clsx from "clsx"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

export type ConfettiInstance = CreateTypes

export type ConfettiRef = {
  confetti: ConfettiInstance | undefined
}

export type ConfettiProps = {
  className?: string
}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  function Confetti({ className }, ref) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const confetti = useRef<ConfettiInstance>()

    useEffect(() => {
      if (!canvasRef.current) {
        return
      }

      confetti.current = canvasConfetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      })

      return () => {
        confetti.current?.reset()
      }
    }, [])

    useImperativeHandle(ref, () => ({ confetti: confetti.current }), [])

    return (
      <canvas
        ref={canvasRef}
        className={clsx(
          "pointer-events-none fixed left-0 top-0 size-full",
          className,
        )}
      />
    )
  },
)
