import clsx from "clsx"
import Image, { StaticImageData } from "next/image"
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
  src: StaticImageData
}) {
  return (
    <div className="mx-auto mb-16 max-w-screen-md">
      <Image
        alt={alt}
        className={clsx(
          "w-full",
          animate &&
            "animate-[1ms_pop_linear] [animation-range:0_60%] [animation-timeline:view()]",
        )}
        loading="eager"
        src={src}
      />
    </div>
  )
}
