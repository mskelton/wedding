import clsx from "clsx"
import GalleryImage from "./components/GalleryImage"

const images = [
  {
    className: "lg:row-span-8 lg:col-span-4 xl:row-span-10 xl:col-span-4",
    imageClassName:
      "object-[left_0_top_60%] sm:object-[left_0_top_75%] lg:object-[left_0_bottom_30%]",
    src: "/images/leaning-back.jpg",
  },
  {
    className: "lg:row-span-12 lg:col-span-5 xl:row-span-12 xl:col-span-3",
    imageClassName:
      "object-[left_0_top_30%] sm:object-[left_0_top_25%] lg:object-[top_20%_left_50%]",
    src: "/images/arm-around-neck.jpg",
  },
  {
    className: "lg:row-span-12 lg:col-span-3 xl:row-span-12 xl:col-span-5",
    imageClassName: "object-[left_20%_top_20%] lg:object-[left_20%_top_0]",
    src: "/images/open-room.jpg",
  },
  {
    className: "lg:row-span-12 lg:col-span-4 xl:row-span-10 xl:col-span-4",
    imageClassName: "object-bottom sm:object-left lg:object-[left_25%_top_0]",
    src: "/images/arm-around-back.jpg",
  },
  {
    className: "lg:row-span-8 lg:col-span-4 xl:row-span-8 xl:col-span-4",
    src: "/images/ring.jpg",
  },
  {
    className: "lg:row-span-8 lg:col-span-4 xl:row-span-8 xl:col-span-4",
    imageClassName:
      "object-top sm:object-right lg:object-[left_80%_top_0] xl:object-[center_top_0]",
    src: "/images/chair.jpg",
  },
]

export function Gallery() {
  return (
    <div
      className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:invisible lg:grid-cols-12 lg:grid-rows-[repeat(20,40px)] xl:visible"
      id="gallery"
    >
      {images.map((image, i) => (
        <GalleryImage
          key={i}
          {...image}
          alt="Mark & Rianna's engagement photo shoot"
          className={clsx("row-span-1", image.className)}
          imageClassName={clsx(
            "aspect-video w-full object-cover sm:aspect-[16/12] lg:aspect-auto lg:size-full",
            image.imageClassName,
          )}
        />
      ))}
    </div>
  )
}
