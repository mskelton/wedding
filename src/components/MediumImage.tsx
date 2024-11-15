import clsx from "clsx"
import { cloneElement, useEffect, useRef, useState } from "react"

export default function MediumImage({
  children,
  className,
  isEnabled = true,
  margin = 24,
}: {
  children: React.ReactElement
  className: string | null
  isEnabled: boolean
  margin: number
}) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const ref = useRef<HTMLImageElement | null>(null)
  const touchYStartRef = useRef<number | undefined>(undefined)
  const touchYEndRef = useRef<number | undefined>(undefined)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const image = ref.current
    const container = containerRef.current
    if (!image || !container || !isEnabled) return

    const controller = new AbortController()
    const { signal } = controller

    if (isOpen) {
      // Set the container size to the image size
      container.style.height = `${image.offsetHeight}px`
      container.style.width = `${image.offsetWidth}px`

      // Calculate the xy coordinates based on how far the image is from the top
      // of the viewport.
      const imageRect = image.getBoundingClientRect()
      const translateX =
        (window.innerWidth - imageRect.width) / 2 - imageRect.left
      const translateY =
        (window.innerHeight - imageRect.height) / 2 - imageRect.top

      // Calculate the scale based on the smallest dimension of the image and
      // fill the viewport.
      const scale = Math.min(
        (window.innerWidth - margin) / imageRect.width,
        (window.innerHeight - margin) / imageRect.height,
      )

      image.style.zIndex = "999"
      image.style.position = "absolute"
      image.style.transform = `translate(${translateX}px,${translateY}px) scale(${scale})`

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsOpen(false)
        } else {
          e.preventDefault()
        }
      }

      const handleClose = () => setIsOpen(false)

      const handleTouchStart = (e: TouchEvent) => {
        if (e.changedTouches.length === 1 && e.changedTouches[0]) {
          touchYStartRef.current = e.changedTouches[0].screenY
        }
      }

      const handleTouchMove = (e: TouchEvent) => {
        if (touchYStartRef.current != null && e.changedTouches[0]) {
          touchYEndRef.current = e.changedTouches[0].screenY

          const max = Math.max(touchYStartRef.current, touchYEndRef.current)
          const min = Math.min(touchYStartRef.current, touchYEndRef.current)
          const delta = Math.abs(max - min)
          const threshold = 10

          if (delta > threshold) {
            touchYStartRef.current = undefined
            touchYEndRef.current = undefined
            handleClose()
          }
        }
      }

      const handleTouchCancel = () => {
        touchYStartRef.current = undefined
        touchYEndRef.current = undefined
      }

      document.addEventListener("keydown", handleKeyDown, { signal })
      window.addEventListener("wheel", handleClose, { passive: true, signal })
      window.addEventListener("touchstart", handleTouchStart, { signal })
      window.addEventListener("touchmove", handleTouchMove, { signal })
      window.addEventListener("touchcancel", handleTouchCancel, { signal })
    } else {
      container.style.height = ""
      container.style.width = ""

      image.style.position = "relative"
      image.style.transform = ""

      // Wait until the element has transitioned before resetting the z-index
      // so that it doesn't get hidden behind other images or elements while
      // transitioning back into place.
      const handleTransitionEnd = () => {
        image.style.zIndex = ""
      }

      image.addEventListener("transitionend", handleTransitionEnd, { signal })
    }

    return () => controller.abort()
  }, [isEnabled, isOpen, margin])

  return (
    <span
      ref={containerRef}
      className={clsx("rmi", isOpen ? "open" : "closed", className)}
      onClick={() => {
        if (!isEnabled) return
        setIsOpen(!isOpen)
      }}
    >
      <span className="rmi-overlay" />

      {cloneElement(children, {
        className: clsx("rmi-image", children.props.className),
        ref,
      })}
    </span>
  )
}
