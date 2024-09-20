"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/20/solid"
import { useEffect } from "react"
import { themeEffect } from "../utils/themeEffect"

function handleChange(value: string) {
  if (value === "system") {
    localStorage.removeItem("theme")
  } else {
    localStorage.setItem("theme", value)
  }

  themeEffect()
}

export function ThemeToggle() {
  useEffect(() => {
    // React to storage changes in other tabs
    function handleStorageChange(event: StorageEvent) {
      if (event.key === "theme") {
        themeEffect()
      }
    }
    window.addEventListener("storage", handleStorageChange)

    // Theme switch keyboard shortcut
    function handleKeyDown(event: KeyboardEvent) {
      // Allow quick switching the theme when holding down cmd/ctrl
      if ((event.metaKey || event.ctrlKey) && event.key === "d") {
        handleChange(themeEffect() === "dark" ? "light" : "dark")
        themeEffect()
      }
    }
    document.addEventListener("keydown", handleKeyDown)

    // Refresh the theme when the user changes their system theme. If the user
    // set a preference, this will be ignored.
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
    matchMedia.addEventListener("change", themeEffect)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      document.removeEventListener("keydown", handleKeyDown)
      matchMedia.removeEventListener("change", themeEffect)
    }
  }, [])

  return process.env.NODE_ENV === "production" ? null : (
    <button
      aria-label="Set website theme"
      className="size-10 px-2 py-1 text-sm hover:text-rose-500"
      onClick={() => handleChange(themeEffect() === "dark" ? "light" : "dark")}
      type="button"
    >
      <SunIcon className="dark:hidden" />
      <MoonIcon className="hidden dark:block" />
    </button>
  )
}
