interface Document {
  startViewTransition?(callback: () => void): void
}

const doc = document as Document

export function startViewTransition(
  callback: (supportsViewTransitions: boolean) => void,
) {
  if (doc.startViewTransition) {
    doc.startViewTransition(() => callback(true))
  } else {
    callback(false)
  }
}
