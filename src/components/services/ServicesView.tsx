"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Sparkles, Calendar, ArrowRight, Check } from "lucide-react";
import { SERVICE_CATEGORIES, SERVICES_LIST, ServiceItem } from "@/data/servicesData";

export default function ServicesView() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const filteredServices = useMemo(() => {
    if (selectedCategory === "all") {
      return SERVICES_LIST;
    }
    return SERVICES_LIST.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Karthikeya Lavish Looks Treatment Menu</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-medium tracking-tight">
            Our Services
          </h1>

          <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed">
            Explore our curated menu of hair transformations, bespoke bridal artistry,
            illuminating skin therapies, and tailored men&apos;s grooming.
          </p>
        </div>

        {/* Filter Tabs (Horizontal Scrollable on Mobile, Wrap on Desktop) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-gold-400 to-gold-500 text-background shadow-md shadow-gold-400/20"
                    : "bg-surface-card hover:bg-surface-elevated text-ivory/80 hover:text-gold-300 border border-surface-border"
                }`}
              >
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Services Grouping / Rows */}
        <div className="space-y-6">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-2xl bg-surface-card border border-surface-border hover:border-gold-400/40 transition-all duration-300 group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Left Details */}
              <div className="space-y-1.5 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded bg-surface-elevated text-gold-400 border border-gold-400/20">
                    {service.category}
                  </span>
                  {service.featured && (
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-tealAccent-glow flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5" /> Popular
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-ivory group-hover:text-gold-300 transition-colors font-medium">
                    {service.name}
                  </h3>
                </div>

                <p className="text-sm text-ivory/70 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Right: Price & CTA (Mobile Stacked / Desktop Inline) */}
              <div className="flex items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-white/5 shrink-0">
                {/* Structure: Service Name ............. [PRICE] */}
                <div className="text-right">
                  <span className="font-mono text-sm sm:text-base font-semibold text-gold-400 bg-gold-400/10 px-3 py-1.5 rounded-lg border border-gold-400/30">
                    {service.price}
                  </span>
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(service.name)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-surface-elevated hover:bg-gold-400 hover:text-background text-ivory border border-surface-border hover:border-gold-400 transition-all duration-200"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-elevated border border-surface-border text-center space-y-2">
          <p className="text-xs text-ivory/60">
            * Exact pricing is tailored based on hair length, density, skin analysis, and custom bridal styling requirements.
          </p>
          <p className="text-xs text-gold-300 font-medium">
            Contact or visit Karthikeya Lavish Looks in Warangal for personalized price consultations.
          </p>
        </div>

        {/* Bottom Booking Action */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 to-gold-500 text-background hover:from-gold-300 hover:to-gold-400 shadow-xl shadow-gold-900/30 transition-all"
          >
            <Calendar className="w-4 h-4 text-background" />
            Book an Appointment Now
          </Link>
        </div>
      </div>
    </div>
  );
}
