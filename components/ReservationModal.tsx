"use client"

import React, { useState } from "react"
import { reservationSchema, type ReservationFormValues } from "@/lib/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      country: "Uganda",
      city: "",
      church: "",
      age: "",
      gender: "Male",
    },
  })

  const onSubmit = (data: ReservationFormValues) => {
    setIsSubmitting(true)

    // 1. Format clean WhatsApp message for international & local intake
    const message = `🔥 *T.I.M.E CAMP 2027 REGISTRATION* 🔥

Hello T.I.M.E Team! I want to confirm my registration for camp.

👤 *Name:* ${data.fullName}
🚻 *Gender:* ${data.gender}
🎂 *Age:* ${data.age}
🌍 *Location:* ${data.city}, ${data.country}
📞 *Phone:* ${data.phone}
⛪ *Church/Fellowship:* ${data.church}

Please share any next steps and payment guides!`.trim()

    // 2. Official Chrisco WhatsApp Number (Uganda format, no plus sign)
    // Replace with your real church contact line:
    const whatsappNumber = "256700000000"

    // 3. Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setTimeout(() => setIsSubmitting(false), 2000)
  }

  return (
    <div className="mx-auto w-full max-w-2xl py-8 sm:py-12">
      {/* Page Title & Intro */}
      <div className="mb-8 space-y-3 text-left">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase backdrop-blur-md">
          Open to All Youths & Campuses
        </span>

        <h1
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-4xl text-white uppercase sm:text-5xl md:text-6xl"
        >
          Reserve Your Spot
        </h1>

        <p className="text-sm leading-relaxed text-neutral-300 sm:text-base">
          Fill in your details below. Once submitted, you will be redirected to
          our official WhatsApp desk to receive your confirmation and next
          steps.
        </p>
      </div>

      {/* Form Container */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:p-10">
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FieldGroup className="flex flex-col gap-5">
            {/* FULL NAME */}
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="font-bold text-white"
                  >
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. Samuel Kigozi"
                    className="h-12 rounded-full border-white/10 bg-black/40 px-5 text-white placeholder:text-neutral-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* GENDER & AGE */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Controller
                name="gender"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-bold text-white"
                    >
                      Gender (for dorms)
                    </FieldLabel>
                    <div className="relative">
                      <select
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        className="h-12 w-full appearance-none rounded-full border border-white/10 bg-black/40 px-5 text-sm font-medium text-white focus:ring-2 focus:ring-primary focus:outline-none"
                      >
                        <option
                          value="Male"
                          className="bg-neutral-900 text-white"
                        >
                          Male
                        </option>
                        <option
                          value="Female"
                          className="bg-neutral-900 text-white"
                        >
                          Female
                        </option>
                      </select>
                      {/* Dropdown chevron icon */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="age"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-bold text-white"
                    >
                      Age
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="number"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. 20"
                      className="h-12 rounded-full border-white/10 bg-black/40 px-5 text-white placeholder:text-neutral-500"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* COUNTRY & CITY */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Controller
                name="country"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-bold text-white"
                    >
                      Country
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. Uganda, Kenya, UK"
                      className="h-12 rounded-full border-white/10 bg-black/40 px-5 text-white placeholder:text-neutral-500"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="city"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      htmlFor={field.name}
                      className="font-bold text-white"
                    >
                      City / Town
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. Kampala, Jinja, Nairobi"
                      className="h-12 rounded-full border-white/10 bg-black/40 px-5 text-white placeholder:text-neutral-500"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* PHONE NUMBER */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="font-bold text-white"
                  >
                    WhatsApp Phone Number
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Include country code (e.g. +256 7... / 07...)"
                    className="h-12 rounded-full border-white/10 bg-black/40 px-5 text-white placeholder:text-neutral-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* CHURCH OR FELLOWSHIP */}
            <Controller
              name="church"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="font-bold text-white"
                  >
                    Church / Branch / Fellowship
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. Chrisco Mbale, Watoto Central, or None"
                    className="h-12 rounded-full border-white/10 bg-black/40 px-5 text-white placeholder:text-neutral-500"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          {/* SUBMIT BUTTON */}
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="mt-6 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-full text-base font-extrabold tracking-wide uppercase shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all hover:shadow-[0_0_50px_rgba(var(--primary),0.8)] disabled:opacity-50"
          >
            <span>
              {isSubmitting ? "Opening WhatsApp..." : "Proceed to WhatsApp"}
            </span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </Button>

          <p className="text-center text-xs text-neutral-400">
            🔒 Your details are secure and directly sent to our official
            National Youth registration desk.
          </p>
        </form>
      </div>
    </div>
  )
}
