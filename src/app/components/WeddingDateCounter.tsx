"use client"

import { useEffect, useState } from "react"
import { dates } from "../lib/date"

function Item({ label, value }: { label: string; value: number }) {
  return (
    <span className="flex gap-0.5">
      <span suppressHydrationWarning>{value}</span>

      <span aria-label={label} className="text-zinc-400">
        {label[0]}
      </span>
    </span>
  )
}

const factors = {
  days: 1000 * 60 * 60 * 24,
  hours: 1000 * 60 * 60,
  minutes: 1000 * 60,
  seconds: 1000,
}

export function WeddingDateCounter() {
  const [now, setNow] = useState(new Date())
  const diff = dates.wedding.getTime() - now.getTime()
  const days = Math.floor(diff / factors.days)
  const hours = Math.floor((diff % factors.days) / factors.hours)
  const minutes = Math.floor((diff % factors.hours) / factors.minutes)
  const seconds = Math.floor((diff % factors.minutes) / factors.seconds)

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p className="flex justify-center gap-2 text-lg">
      <Item label="Days" value={days} />
      <Item label="Hours" value={hours} />
      <Item label="Minutes" value={minutes} />
      <Item label="Seconds" value={seconds} />
    </p>
  )
}
