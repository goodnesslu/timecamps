"use client"

import React from "react"
import { useAtom } from "jotai"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  isReservationModalOpenAtom,
  reservationSchema,
  type ReservationFormValues,
} from "@/lib/store"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import { Send } from "lucide-react"

export default function ReservationModal() {
  const [isOpen, setIsOpen] = useAtom(isReservationModalOpenAtom)

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      branch: "",
      age: "",
      phone: "",
    },
  })

  const onSubmit = (data: ReservationFormValues) => {
    // 1. Format the WhatsApp message
    const message = `🔥 *T.I.M.E CAMP 2027 RESERVATION* 🔥%0A%0AHello! I want to reserve my spot for the upcoming camp.%0A%0A*Name:* ${data.fullName}%0A*Chrisco Branch:* ${data.branch}%0A*Age:* ${data.age}%0A*Phone:* ${data.phone}%0A%0APlease let me know the next steps for payment!`

    // 2. Add your Chrisco Youth WhatsApp Number (Uganda example format)
    const whatsappNumber = "256700000000"

    // 3. Open WhatsApp and close modal
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")

    setIsOpen(false)
    form.reset()
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="rounded-[var(--radius-3xl)] p-6 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-foreground">
            Secure Your Spot
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Fill in your details. We will redirect you to WhatsApp to complete
            your reservation. No payment needed right now!
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4">
          <FieldGroup className="flex flex-col gap-5">
            {/* FULL NAME */}
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="font-bold">
                    Full Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="John Doe"
                    className="h-12 rounded-[var(--radius-xl)]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* CHRISCO BRANCH */}
            <Controller
              name="branch"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name} className="font-bold">
                    Chrisco Branch
                  </FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="e.g. Chrisco Kampala"
                    className="h-12 rounded-[var(--radius-xl)]"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              {/* AGE */}
              <Controller
                name="age"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="font-bold">
                      Age
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      type="number"
                      aria-invalid={fieldState.invalid}
                      placeholder="18"
                      className="h-12 rounded-[var(--radius-xl)]"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* PHONE */}
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name} className="font-bold">
                      Phone Number
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="07..."
                      className="h-12 rounded-[var(--radius-xl)]"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
          </FieldGroup>

          <Button
            type="submit"
            className="mt-8 h-14 w-full gap-2 rounded-[var(--radius-xl)] text-lg font-bold shadow-lg"
          >
            <Send className="h-5 w-5" />
            Continue to WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
