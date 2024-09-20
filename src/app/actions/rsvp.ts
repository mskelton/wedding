"use server"

import { SerializableError } from "./types"

export type RSVPActionState = {
  error?: SerializableError
}

export async function rsvpAction(state: RSVPActionState, formData: FormData) {
  const name = formData.get("name") as string
  const guests = parseInt(formData.get("guests") as string)

  // // Send the form data to the server
  // const response = await fetch("/api/rsvp", {
  //   method: "POST",
  //   body: formData,
  // })
  //
  // // Handle the response
  // if (response.ok) {
  //   alert("Thank you for your RSVP!")
  // } else {
  //   alert("Something went wrong. Please try again.")

  return {}
}
