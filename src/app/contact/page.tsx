"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, MessageCircle, Instagram, MapPin, Clock, Check, ArrowRight, Loader2 } from "lucide-react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import { FeatherMotif } from "@/components/site/feather-motif";
import { salon, bookingServiceOptions } from "@/data/salon";
import { cn } from "@/lib/utils";

// Booking form schema
const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name.")
    .max(80, "That name is too long."),
  phone: z
    .string()
    .min(10, "Enter a valid phone number, at least 10 digits.")
    .max(15, "That number is too long.")
    .regex(/^[0-9+\-\s()]+$/, "Phone can only contain digits and + - ( )."),
  service: z.string().min(1, "Pick a service."),
  datetime: z.string().min(1, "Pick a preferred date and time."),
  notes: z
    .string()
    .max(500, "Keep notes under 500 characters.")
    .optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;

export default function ContactPage() {
  return (
    <>
      {/* Inner hero */}
      <section className="bg-sand py-[64px] sm:py-[84px]">
        <div className="container-atelier text-center max-w-[760px] mx-auto">
          <Reveal>
            <Kicker>Booking &amp; contact</Kicker>
            <h1 className="text-display text-ink mt-3">
              Book your visit.
            </h1>
            <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
              Walk in, or book ahead. The chair is waiting.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + contact block */}
      <section className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-ivory">
        <div className="container-atelier">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-12 items-start">
            <Reveal>
              <BookingForm />
            </Reveal>

            <Reveal delay={120}>
              <ContactBlock />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="pb-[clamp(3.5rem,9vw,5.5rem)] sm:pb-[88px] bg-ivory">
        <div className="container-atelier">
          <Reveal>
            <div className="rounded-card overflow-hidden border border-hairline/60 shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
              <div className="bg-sand px-6 py-4 flex items-center gap-3 border-b border-hairline/60">
                <MapPin size={18} className="text-teal" strokeWidth={1.5} />
                <div>
                  <p className="font-sans font-semibold text-ink text-[0.95rem]">
                    Karthikeya Lavish Looks
                  </p>
                  <p className="text-caption text-muted">Plus code: {salon.plusCode}</p>
                </div>
              </div>
              <div className="relative aspect-[16/9] sm:aspect-[16/7] bg-sand">
                <iframe
                  title="Map to Karthikeya Lavish Looks, Kashibugga, Warangal"
                  src={salon.mapEmbedUrl}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ----------------------------------------------------------------
   Booking form - the primary conversion path
   ---------------------------------------------------------------- */
function BookingForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      datetime: "",
      notes: "",
    },
  });

  const [serverError, setServerError] = React.useState<string | null>(null);

  const onSubmit = async (data: BookingForm) => {
    setServerError(null);
    try {
      // Simulate a submission - the salon has no backend yet.
      // In production this would POST to /api/booking or a WhatsApp deep link.
      await new Promise((r) => setTimeout(r, 900));
      console.log("Booking submitted:", data);
    } catch (e: any) {
      setServerError(e?.message ?? "Something went wrong. Please try again.");
    }
  };

  if (isSubmitSuccessful) {
    return (
      <div className="rounded-card bg-porcelain border border-hairline/60 p-8 sm:p-10 shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-pill bg-teal text-ivory mb-4">
          <Check size={22} strokeWidth={2} />
        </div>
        <h2 className="text-h2 text-ink">Request received.</h2>
        <p className="mt-3 text-muted leading-relaxed max-w-[48ch]">
          Thank you. We&apos;ll call you back on the number you shared to confirm the slot. For urgent bookings, message us on WhatsApp or Instagram.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button onClick={() => reset()} variant="ghost" size="md">
            Book another
          </Button>
          <Button as="a" href={salon.instagramUrl} variant="primary" size="md">
            <Instagram size={15} strokeWidth={1.75} />
            {salon.instagramHandle}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-card bg-porcelain border border-hairline/60 p-6 sm:p-8 shadow-[0_8px_24px_rgba(34,48,45,0.08)]"
    >
      <div className="flex items-center gap-2 mb-6">
        <FeatherMotif size={18} />
        <h2 className="text-h3 text-ink">Booking form</h2>
      </div>

      <div className="flex flex-col gap-5">
        {/* Name */}
        <Field label="Name" error={errors.name?.message} htmlFor="name">
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            {...register("name")}
            className={inputCls(!!errors.name)}
          />
        </Field>

        {/* Phone */}
        <Field label="Phone" error={errors.phone?.message} htmlFor="phone">
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="10-digit mobile"
            {...register("phone")}
            className={inputCls(!!errors.phone)}
          />
        </Field>

        {/* Service */}
        <Field label="Service" error={errors.service?.message} htmlFor="service">
          <select
            id="service"
            {...register("service")}
            className={inputCls(!!errors.service)}
            defaultValue=""
          >
            <option value="" disabled>
              Pick a service
            </option>
            {bookingServiceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </Field>

        {/* Preferred Date/Time */}
        <Field
          label="Preferred date &amp; time"
          error={errors.datetime?.message}
          htmlFor="datetime"
        >
          <input
            id="datetime"
            type="datetime-local"
            {...register("datetime")}
            className={inputCls(!!errors.datetime)}
          />
        </Field>

        {/* Notes */}
        <Field
          label="Notes (optional)"
          error={errors.notes?.message}
          htmlFor="notes"
        >
          <textarea
            id="notes"
            rows={3}
            placeholder="Anything we should know before you arrive?"
            {...register("notes")}
            className={cn(inputCls(!!errors.notes), "resize-y min-h-[80px]")}
          />
        </Field>
      </div>

      {serverError && (
        <p className="mt-4 text-[0.8125rem] text-red-700 bg-red-50 border border-red-200 rounded-input px-3 py-2">
          {serverError}
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Book an Appointment
              <ArrowRight size={14} strokeWidth={1.75} />
            </>
          )}
        </Button>
      </div>

      <p className="mt-4 text-caption text-muted">
        We&apos;ll call you back to confirm. No payment required online.
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full rounded-input bg-sand border px-4 py-3.5 text-ink placeholder:text-muted/60 font-sans text-[0.9375rem] transition-colors",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-hairline focus:border-teal",
    "focus:outline-none focus:ring-2 focus:ring-teal/30"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-sans font-medium text-[0.8125rem] text-ink mb-1.5"
      >
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[0.8125rem] text-teal-deep" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/* ----------------------------------------------------------------
   Contact block - phone, whatsapp, instagram, address, hours
   ---------------------------------------------------------------- */
function ContactBlock() {
  return (
    <div className="flex flex-col gap-5">
      {/* Quick contact list */}
      <div className="rounded-card bg-porcelain border border-hairline/60 p-6 shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
        <h2 className="text-h3 text-ink mb-4">Reach us</h2>
        <ul className="flex flex-col gap-3.5 text-[0.9375rem]">
          <li>
            <a
              href={salon.phone === "[PHONE]" ? "#" : `tel:${salon.phone}`}
              className="flex items-start gap-3 text-ink hover:text-teal transition-colors"
            >
              <Phone size={16} className="mt-0.5 shrink-0 text-teal" strokeWidth={1.5} />
              <span>
                <span className="block text-caption text-muted">Phone</span>
                <span className={salon.phone === "[PHONE]" ? "text-muted italic" : "font-medium"}>
                  {salon.phone}
                </span>
              </span>
            </a>
          </li>
          <li>
            <span className="flex items-start gap-3 text-ink">
              <MessageCircle size={16} className="mt-0.5 shrink-0 text-teal" strokeWidth={1.5} />
              <span>
                <span className="block text-caption text-muted">WhatsApp</span>
                <span className={salon.whatsapp === "[WHATSAPP]" ? "text-muted italic" : "font-medium"}>
                  {salon.whatsapp}
                </span>
              </span>
            </span>
          </li>
          <li>
            <a
              href={salon.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-ink hover:text-teal transition-colors"
            >
              <Instagram size={16} className="mt-0.5 shrink-0 text-teal" strokeWidth={1.5} />
              <span>
                <span className="block text-caption text-muted">Instagram</span>
                <span className="font-medium">{salon.instagramHandle}</span>
              </span>
            </a>
          </li>
        </ul>
      </div>

      {/* Address card */}
      <div className="rounded-card bg-porcelain border border-hairline/60 p-6 shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={16} className="text-teal" strokeWidth={1.5} />
          <h2 className="text-h3 text-ink">Address</h2>
        </div>
        <address className="not-italic text-[0.9375rem] text-muted leading-relaxed">
          {salon.addressLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < salon.addressLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </address>
        <div className="mt-3 inline-flex items-center gap-1.5 rounded-pill bg-gold/10 px-3 py-1">
          <Clock size={12} className="text-gold" strokeWidth={1.75} />
          <span className="text-[0.75rem] font-semibold text-gold tracking-[0.04em]">
            {salon.plusCode}
          </span>
        </div>
      </div>

      {/* Hours card */}
      <div className="rounded-card bg-porcelain border border-hairline/60 p-6 shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
        <div className="flex items-center gap-2 mb-3">
          <Clock size={16} className="text-teal" strokeWidth={1.5} />
          <h2 className="text-h3 text-ink">Hours</h2>
        </div>
        <ul className="flex flex-col gap-1.5 text-[0.9375rem]">
          {salon.hours.map((h) => (
            <li key={h.day} className="flex items-baseline justify-between gap-3">
              <span className="font-medium text-ink">{h.day}</span>
              <span className={h.verified ? "font-semibold text-teal" : "text-muted italic"}>
                {h.time}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-caption text-muted mt-3 max-w-[34ch]">
          {salon.hoursNote}
        </p>
      </div>
    </div>
  );
}
