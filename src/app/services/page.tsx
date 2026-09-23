import React, { Suspense } from "react";
import { Metadata } from "next";
import ServicesView from "@/components/services/ServicesView";

export const metadata: Metadata = {
  title: "Services & Treatment Menu | Hair, Makeup, Bridal, Grooming",
  description:
    "Explore our complete luxury unisex salon services menu at Karthikeya Lavish Looks in Warangal. Haircuts, coloring, keratin, facials, bridal makeup, mehndi, and men's grooming.",
};

export default function ServicesPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-ivory">
          <div className="w-8 h-8 mx-auto rounded-full border-2 border-gold-400 border-t-transparent animate-spin mb-4" />
          <p className="text-sm font-light">Loading treatment menu...</p>
        </div>
      }
    >
      <ServicesView />
    </Suspense>
  );
}
