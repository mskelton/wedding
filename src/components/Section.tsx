import clsx from "clsx"
import { styled } from "../utils/styled"

export const PageSection = styled.section(
  "my-32 md:my-48 scroll-mt-32 px-4 sm:px-8 dark:text-white",
)

export const PageSectionFullWidth = styled.div("-mx-4 sm:-mx-8")

export const PageSectionTitle = styled.h2(
  "mb-6 md:mb-12 text-center text-4xl md:text-6xl",
)
export const PageSectionSubtitle = styled.p(
  "-mt-4 md:-mt-8 mb-6 text-center text-xl md:text-2xl text-zinc-500",
)

export function PageSectionSeparator() {
  return (
    <div className="mb-12 mt-8 flex justify-center">
      <svg className="size-4 text-zinc-900 dark:text-white" viewBox="0 0 93 94">
        <path
          d="M46.5 0.5L0 47L46.5 93.5L93 47L46.5 0.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export function PageSectionImage({
  alt,
  animate,
  className,
  src,
}: {
  alt: string
  animate?: boolean
  className?: string
  src: string
}) {
  return (
    <div className="relative mx-auto mb-8 h-[700px] w-[1200px] max-w-full">
      <img
        alt={alt}
        className={clsx(
          "absolute size-full object-cover",
          animate &&
            "animate-[1ms_pop_linear] [animation-range:0_60%] [animation-timeline:view()]",
          className,
        )}
        decoding="async"
        src={src}
      />
    </div>
  )
}
