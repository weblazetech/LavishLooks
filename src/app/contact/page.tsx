import React, { Suspense } from "react";
import { Metadata } from "next";
import ContactView from "@/components/contact/ContactView";

export const metadata: Metadata = {
  title: "Book Your Appointment | Contact & Location in Warangal",
  description:
    "Request your hair styling, bridal makeup, or grooming appointment at Karthikeya Lavish Looks on Road No. 14A, Kashibugga, Warangal. Verified Monday hours 8:00 AM - 9:00 PM.",
};

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-ivory">
          <div className="w-8 h-8 mx-auto rounded-full border-2 border-gold-400 border-t-transparent animate-spin mb-4" />
          <p className="text-sm font-light">Loading booking form...</p>
        </div>
      }
    >
      <ContactView />
    </Suspense>
  );
}
