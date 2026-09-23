import React from "react";
import Link from "next/link";
import { Calendar, Phone, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function BookingCTA() {
  return (
    <section className="py-20 md:py-24 bg-surface relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/5 border border-gold-400/20 text-gold-500 dark:text-gold-300 text-[11px] font-medium uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3 h-3 text-gold-400" />
          <span>Experience Lavish Luxury</span>
        </div>


        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium max-w-2xl mx-auto">
          Ready to Transform Your Look?
        </h2>

        <p className="text-base sm:text-lg text-ivory/80 max-w-xl mx-auto font-light leading-relaxed">
          Book your personalized appointment today for hair styling, bridal services, or
          men&apos;s grooming with our expert team in Warangal.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-background shadow-xl shadow-gold-900/30 active:scale-95 transition-all duration-200"
          >
            <Calendar className="w-4 h-4 text-background" />
            Book an Appointment
          </Link>

          <a
            href={`tel:${SALON_DATA.phoneTel}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-ivory bg-surface-card hover:bg-surface-elevated border border-gold-400/30 hover:border-gold-400 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-gold-400" />
            <span>Call {SALON_DATA.phoneDisplay}</span>
          </a>
        </div>

        {/* Location snippet */}
        <div className="pt-6 flex items-center justify-center gap-2 text-xs text-ivory/60">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>Opposite O City Main Road, Kashibugga, Warangal</span>
        </div>
      </div>
    </section>
  );
}
