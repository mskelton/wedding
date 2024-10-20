import "./ZoomableImage.css"
import "react-medium-image/styles.css"
import { ArrowsPointingOutIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import MediumImage from "react-medium-image"

export interface ZoomableImageProps {
  alt?: string
  className?: string
  imageClassName?: string
  src: string
}

export default function ZoomableImage({
  alt,
  className,
  imageClassName,
  src,
  ...props
}: ZoomableImageProps) {
  return (
    <MediumImage
      className={clsx("sm:max-w-[calc(100%+4rem)]", className)}
      margin={48}
      zoomIcon={<ArrowsPointingOutIcon />}
    >
      <img alt={alt ?? ""} className={imageClassName} src={src} {...props} />
    </MediumImage>
  )
}
