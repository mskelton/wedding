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
  const isMedium = useMediaQuery("(min-width: 768px)")

  return (
    <MediumImage
      className={clsx("sm:max-w-[calc(100%+4rem)]", className)}
      isEnabled={isMedium}
      margin={48}
    >
      <img alt={alt ?? ""} className={imageClassName} src={src} {...props} />
    </MediumImage>
  )
}
