import { twMerge } from "tailwind-merge"

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Prose({ className, ...props }: ProseProps) {
  return (
    <div
      className={twMerge(
        "prose prose-dark dark:prose-invert prose-p:text-lg prose-p:last:mb-4 prose-p:font-sans mx-auto max-w-2xl",
        className,
      )}
      {...props}
    />
  )
}
