import clsx from "clsx"
import ZoomableImage from "./components/ZoomableImage"

const images = [
  {
    alt: "TODO",
    className: "lg:row-span-4 lg:col-span-2",
    imageClassName: "object-[center_20%]",
    src: "/images/hero-2.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-4 lg:col-span-2",
    imageClassName: "object-[top]",
    src: "/images/hero-3.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-6 lg:col-span-3",
    src: "/images/hero-4.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-12 lg:col-span-5",
    imageClassName: "lg:object-[left_-80px_top_0] xl:object-center",
    src: "/images/hero-5.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-8 lg:col-span-4",
    imageClassName: "object-[top]",
    src: "/images/hero-8.jpg",
  },
  {
    alt: "TODO",
    className: "lg:row-span-6 lg:col-span-3",
    src: "/images/hero-9.jpg",
  },
  // {
  //   alt: "TODO",
  //   className: "lg:row-span-4 lg:col-span-4",
  //   src: "/images/hero-8.jpg",
  // },
  // {
  //   alt: "TODO",
  //   className: "lg:row-span-4 lg:col-span-4",
  //   src: "/images/hero-9.jpg",
  // },
  // {
  //   alt: "TODO",
  //   className: "lg:row-span-4 lg:col-span-4",
  //   src: "/images/hero-10.jpg",
  // },
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
