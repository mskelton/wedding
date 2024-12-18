import clsx from "clsx"
import ZoomableImage from "./components/ZoomableImage"

const images = [
  {
    className: "lg:row-span-6 lg:col-span-4 xl:row-span-10 xl:col-span-4",
    imageClassName: "object-[left_0_bottom_30%]",
    src: "/images/final-17.jpg",
  },
  {
    className: "lg:row-span-12 lg:col-span-5 xl:row-span-12 xl:col-span-3",
    // imageClassName: "object-[top_40%_left_50%]",
    src: "/images/final-3.jpg",
  },
  {
    className: "lg:row-span-12 lg:col-span-3 xl:row-span-12 xl:col-span-5",
    imageClassName: "object-[left_20%_top_0]",
    src: "/images/final-11.jpg",
  },
  {
    className:
      "lg:row-[span_13/span_13] lg:col-span-4 xl:row-span-10 xl:col-span-4",
    imageClassName: "object-[left_20%_top_0]",
    src: "/images/final-10.jpg",
  },
  {
    className: "lg:row-span-8 lg:col-span-4 xl:row-span-8 xl:col-span-4",
    // imageClassName: "object-[left_0_bottom_30%]",
    src: "/images/final-24.jpg",
  },
  {
    className: "lg:row-span-8 lg:col-span-4 xl:row-span-8 xl:col-span-4",
    imageClassName: "",
    src: "/images/final-2.jpg",
  },
]

export function Gallery() {
  return (
    <div
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(20,40px)]"
      id="gallery"
    >
      {images.map((image, i) => (
        <ZoomableImage
          key={i}
          {...image}
          alt="Mark & Rianna's engagement photo shoot"
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
