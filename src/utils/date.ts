const wedding = new Date("2025-03-01T13:30:00-06:00")
const reception = addMinutes(wedding, 60 + 30 + 30)
const food = addMinutes(reception, 30)
const receptionEnd = addMinutes(reception, 60 + 60 + 30)

export const dates = {
  food,
  reception,
  receptionEnd,
  rsvpDeadline: new Date("2025-02-08T00:00:00-06:00"),
  wedding,
}

function addMinutes(date: Date, minutes: number) {
  const newDate = new Date(date)
  newDate.setMinutes(newDate.getMinutes() + minutes)
  return newDate
}
