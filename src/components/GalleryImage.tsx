import clsx from "clsx"

export interface GalleryImageProps {
  alt?: string
  className?: string
  imageClassName?: string
  src: string
}

export default function GalleryImage({
  alt,
  className,
  imageClassName,
  src,
  ...props
}: GalleryImageProps) {
  return (
    <div className={clsx("sm:max-w-[calc(100%+4rem)]", className)}>
      <div className="overflow-hidden">
        <img
          alt={alt ?? ""}
          className={clsx("overflow-visible", imageClassName)}
          src={src}
          {...props}
        />
      </div>
    </div>
  )
}
