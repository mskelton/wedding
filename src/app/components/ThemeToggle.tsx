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

export function useThemeToggle() {
  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    // React to storage changes in other tabs
    window.addEventListener(
      "storage",
      (event) => {
        if (event.key === "theme") {
          themeEffect()
        }
      },
      { signal },
    )

    // Refresh the theme when the user changes their system theme. If the user
    // set a preference, this will be ignored.
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)")
    matchMedia.addEventListener("change", themeEffect, { signal })

    return () => controller.abort()
  }, [])
}

export function ThemeToggle() {
  useThemeToggle()

  return (
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
