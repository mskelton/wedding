import clsx from "clsx"
import { styled } from "../utils/styled"

export const PageSection = styled.section(
  "my-20 md:my-40 scroll-mt-32 px-8 dark:text-white",
)

export const PageSectionTitle = styled.h2("mb-6 md:mb-12 text-center text-5xl")

export function PageSectionImage({
  alt,
  animate,
  src,
}: {
  alt: string
  animate?: boolean
  src: string
}) {
  return (
    <div className="relative mx-auto mb-8 h-[200px] w-[800px] max-w-full md:h-[400px]">
      <img
        alt={alt}
        className={clsx(
          "absolute size-full object-cover",
          animate &&
            "animate-[1ms_pop_linear] [animation-range:0_60%] [animation-timeline:view()]",
        )}
        decoding="async"
        src={src}
      />
    </div>
  )
}
