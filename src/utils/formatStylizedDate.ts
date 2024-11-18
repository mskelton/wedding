export function formatStylizedDate(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    timeZone: "America/Chicago",
    year: "numeric",
  }).formatToParts(date)

  return parts
    .map((part) =>
      part.type === "day" ? `${part.value}${postfix(part.value)}` : part.value,
    )
    .join("")
}

function postfix(num: string) {
  switch (num.at(-1)) {
    case "1":
      return "st"
    case "2":
      return "nd"
    case "3":
      return "rd"
    default:
      return "th"
  }
}
