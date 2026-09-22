"use client";

import React from "react";
import { MapPin, Clock, Instagram, Sparkles, Navigation, ArrowUpRight } from "lucide-react";
import AppointmentForm from "@/components/booking/AppointmentForm";
import { SALON_DATA } from "@/data/salonData";

export default function ContactView() {
  return (
    <div className="py-12 sm:py-16 md:py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Karthikeya Lavish Looks Concierge</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-medium tracking-tight">
            Book Your Appointment
          </h1>

          <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed">
            Reserve your session with our master stylists and beauty experts. Visit us at our
            Warangal salon or request your customized time slot below.
          </p>
        </div>

        {/* 2-Column Balanced Grid with Exact Matching Top and Bottom Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <AppointmentForm />
          </div>

          {/* Right Column: Salon Information + Integrated Map in One Matched Card */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="p-8 sm:p-9 rounded-3xl bg-surface-card border border-surface-border shadow-2xl h-full flex flex-col justify-between space-y-5">
              {/* Salon Brand Title & Address */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-ivory">
                      {SALON_DATA.name}
                    </h3>
                    <p className="text-xs text-gold-400 font-medium">
                      {SALON_DATA.type} • Warangal
                    </p>
                  </div>
                </div>

                <div className="space-y-1.5 text-sm text-ivory/80 pt-2 border-t border-surface-border/60">
                  <p className="text-xs uppercase tracking-widest text-ivory/60 font-semibold">
                    Physical Address
                  </p>
                  <p className="font-light leading-relaxed text-ivory text-xs sm:text-sm">
                    {SALON_DATA.address.full}
                  </p>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-surface-elevated border border-surface-border text-[11px] font-mono text-gold-500 dark:text-gold-300">
                    <Navigation className="w-3 h-3 text-gold-400" />
                    <span>Plus Code: {SALON_DATA.address.plusCode}</span>
                  </div>
                </div>

                {/* Direct Phone Contact */}
                <div className="space-y-1.5 text-sm text-ivory/80 pt-2 border-t border-surface-border/60">
                  <p className="text-xs uppercase tracking-widest text-ivory/60 font-semibold">
                    Direct Phone / WhatsApp
                  </p>
                  <div className="p-3 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-gold-400">{SALON_DATA.phoneDisplay}</p>
                      <p className="text-[11px] text-ivory/60">Call or message for inquiries</p>
                    </div>
                    <a
                      href={`tel:${SALON_DATA.phoneTel}`}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-400 text-background hover:bg-gold-300 transition-colors"
                    >
                      Call
                    </a>
                  </div>
                </div>

                {/* Verified Operating Hours */}
                <div className="space-y-1.5 text-sm text-ivory/80 pt-2 border-t border-surface-border/60">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-gold-400" />
                    <p className="text-xs uppercase tracking-widest text-ivory/60 font-semibold">
                      Verified Operating Hours
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-elevated border border-surface-border flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-medium text-ivory">
                      {SALON_DATA.hours.verifiedDay}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gold-500 dark:text-gold-400">
                      {SALON_DATA.hours.verifiedTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Integrated Embedded Map Frame */}
              <div className="rounded-2xl overflow-hidden border border-surface-border bg-surface-elevated flex-grow min-h-[160px] relative shadow-inner">
                <iframe
                  title="Karthikeya Lavish Looks Map Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.778736412192!2d79.6105!3d17.9942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU5JzM5LjEiTiA3OcKwMzYnMzcuOCJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="w-full h-full absolute inset-0 border-0 dark:[filter:invert(90%)_hue-rotate(180deg)_brightness(95%)_contrast(90%)]"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Instagram Card */}
              <div className="pt-2 border-t border-surface-border/60">

                <div className="p-3 rounded-xl bg-surface-elevated border border-gold-400/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] text-ivory/60 uppercase tracking-wider">Instagram</p>
                      <p className="text-xs font-medium text-gold-300">
                        {SALON_DATA.instagram.handle}
                      </p>
                    </div>
                  </div>

                  <a
                    href={SALON_DATA.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gold-400/15 hover:bg-gold-400/25 border border-gold-400/30 text-gold-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Follow</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
