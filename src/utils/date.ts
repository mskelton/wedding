const wedding = new Date("2025-03-01T14:00:00-06:00")

export const dates = {
  reception: addMinutes(wedding, 60),
  wedding,
}

function addMinutes(date: Date, minutes: number) {
  const newDate = new Date(date)
  newDate.setMinutes(newDate.getMinutes() + minutes)
  return newDate
}
