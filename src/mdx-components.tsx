import { MarkdownLink } from "./app/components/MarkdownLink"

export function useMDXComponents(components: {
  [component: string]: React.ComponentType
}) {
  return {
    ...components,
    a: MarkdownLink,
  }
}
