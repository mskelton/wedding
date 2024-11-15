import clsx from "clsx"
import ZoomableImage from "./components/ZoomableImage"

const images = [
  {
    alt: "TODO",
    className: "lg:row-span-4 lg:col-span-2",
    imageClassName: "object-[center_20%]",
    src: "/images/formal.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-4 lg:col-span-2",
    src: "/images/footer.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-6 lg:col-span-3",
    src: "/images/mountain.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-12 lg:col-span-5",
    src: "/images/trees.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-8 lg:col-span-4",
    src: "/images/hero.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-6 lg:col-span-3",
    src: "/images/hero.jpg",
  },
]

export function Gallery() {
  return (
    <div
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(12,40px)]"
      id="gallery"
    >
      {images.map((image, i) => (
        <ZoomableImage
          key={i}
          {...image}
          className={clsx("row-span-1", image.className)}
          imageClassName={clsx(
            "h-[300px] w-full object-cover lg:size-full",
            image.imageClassName,
          )}
        />
      ))}
    </div>
  )
}
