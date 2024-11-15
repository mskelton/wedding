import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  const mediaQuery = window.matchMedia(query)
  const [matches, setMatches] = useState(mediaQuery.matches)

  useEffect(() => {
    const listener = () => setMatches(mediaQuery.matches)
    mediaQuery.addEventListener("change", listener)
    return () => mediaQuery.removeEventListener("change", listener)
  }, [mediaQuery])

  return matches
}
