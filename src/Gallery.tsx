import ZoomableImage from "./components/ZoomableImage"

const images = [
  {
    alt: "TODO",
    className: "row-span-4 col-span-2",
    src: "/images/formal.jpg",
  },
  {
    alt: "TODO",
    className: "row-span-4 col-span-2",
    src: "/images/footer.jpg",
  },
  {
    alt: "TODO",
    className: "row-span-6 col-span-3",
    src: "/images/mountain.jpg",
  },
  {
    alt: "TODO",
    className: "row-span-12 col-span-5",
    src: "/images/trees.jpg",
  },
  {
    alt: "TODO",
    className: "row-span-8 col-span-4",
    src: "/images/hero.jpg",
  },
  {
    alt: "TODO",
    className: "row-span-6 col-span-3",
    src: "/images/hero.jpg",
  },
]

export function Gallery() {
  return (
    <div
      className="grid grid-cols-12 grid-rows-[repeat(12,40px)] gap-3"
      id="gallery"
    >
      {images.map((image, i) => (
        <ZoomableImage
          key={i}
          {...image}
          className={image.className}
          imageClassName="size-full object-cover"
        />
      ))}
    </div>
  )
}
