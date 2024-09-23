interface Document {
  startViewTransition?(callback: () => void): void
}

export function startViewTransition(
  callback: (supportsViewTransitions: boolean) => void,
) {
  const doc = document as Document

  if (doc.startViewTransition) {
    doc.startViewTransition(() => callback(true))
  } else {
    callback(false)
  }
}
