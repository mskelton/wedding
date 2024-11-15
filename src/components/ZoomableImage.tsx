import "./ZoomableImage.css"
import "react-medium-image/styles.css"
import clsx from "clsx"
import { useMediaQuery } from "../utils/useMediaQuery"
import MediumImage from "./MediumImage"

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
  const margin = useMediaQuery("(min-width: 640px)") ? 48 : 0

  return (
    <MediumImage
      className={clsx("sm:max-w-[calc(100%+4rem)]", className)}
      margin={margin}
    >
      <img alt={alt ?? ""} className={imageClassName} src={src} {...props} />
    </MediumImage>
  )
}
