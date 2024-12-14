const wedding = new Date("2025-03-01T13:30:00-06:00")
const reception = addMinutes(wedding, 60 + 45)
const food = addMinutes(reception, 15)
const receptionEnd = addMinutes(reception, 60 + 60 + 15)

export const dates = {
  food,
  reception,
  receptionEnd,
  rsvpDeadline: new Date("2025-02-01T00:00:00-06:00"),
  wedding,
}

function addMinutes(date: Date, minutes: number) {
  const newDate = new Date(date)
  newDate.setMinutes(newDate.getMinutes() + minutes)
  return newDate
}
