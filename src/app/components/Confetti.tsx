import canvasConfetti, { CreateTypes } from "canvas-confetti"
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react"

export type ConfettiInstance = CreateTypes

export type ConfettiRef = {
  confetti: ConfettiInstance | undefined
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type ConfettiProps = {}

export const Confetti = forwardRef<ConfettiRef, ConfettiProps>(
  function Confetti(_, ref) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const confetti = useRef<ConfettiInstance>()

    useEffect(() => {
      if (!canvasRef.current) {
        return
      }

      confetti.current = canvasConfetti.create(canvasRef.current, {
        resize: true,
        useWorker: false,
      })

      return () => {
        confetti.current?.reset()
      }
    }, [])

    useImperativeHandle(ref, () => ({ confetti: confetti.current }), [])

    return (
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 size-full"
      />
    )
  },
)
