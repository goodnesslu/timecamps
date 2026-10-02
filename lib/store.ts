// lib/store.ts
import { atom } from "jotai"
import { z } from "zod"

export const isReservationModalOpenAtom = atom(false)

export const reservationSchema = z.object({
  fullName: z.string().min(2, { message: "Please enter your full name" }),
  phone: z.string().min(7, { message: "Enter a valid phone number" }),
  country: z.string().min(2, { message: "Country is required" }),
  city: z.string().min(2, { message: "City or town is required" }),
  church: z
    .string()
    .min(2, { message: "Enter your church branch, fellowship, or 'None'" }),
  age: z.string().min(1, { message: "Age is required" }),
  gender: z.enum(["Male", "Female"], { message: "Please select your gender" }),
})

export type ReservationFormValues = z.infer<typeof reservationSchema>
