import { FaceSmileIcon, HeartIcon } from "@heroicons/react/20/solid"

export function Footer() {
  return (
    <div className="p-8 text-center text-sm dark:text-gray-500">
      <p className="mb-2">
        Made with <HeartIcon className="inline size-4 text-red-500" /> by Mark
        Skelton. Yeah, I built my own wedding website{" "}
        <FaceSmileIcon className="inline size-4 text-blue-500" />
      </p>

      <p>
        View source on{" "}
        <a
          className="text-blue-500 hover:underline"
          href="https://github.com/mskelton/wedding-website"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </div>
  )
}
