export function useMDXComponents(components: {
  [component: string]: React.ComponentType
}) {
  return {
    ...components,
  }
}
