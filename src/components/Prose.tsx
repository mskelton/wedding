import { twMerge } from "tailwind-merge"

export type ProseProps = React.HTMLAttributes<HTMLDivElement>

export function Prose({ className, ...props }: ProseProps) {
  return (
    <div
      className={twMerge(
        "prose prose-dark mx-auto max-w-2xl dark:prose-invert prose-p:font-sans prose-p:last:mb-4",
        className,
      )}
      {...props}
    />
  )
}
