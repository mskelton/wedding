import { createContext, useContext, useMemo, useState } from "react"

type RSVPContextValue = {
  close: () => void
  isOpen: boolean
  open: () => void
}

const RSVPContext = createContext<RSVPContextValue>(null!)

export function RVSPProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const ctx = useMemo(() => {
    return {
      close: () => setIsOpen(false),
      isOpen,
      open: () => setIsOpen(true),
    }
  }, [isOpen])

  return <RSVPContext.Provider value={ctx}>{children}</RSVPContext.Provider>
}

export function useRSVP() {
  return useContext(RSVPContext)
}
