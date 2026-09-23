import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, Heart } from "lucide-react";

export default function BridalBand() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-400/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Framed Container with Refined Gold Border and Ornaments */}
        <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E8] to-[#F5EAD4] dark:from-[#1C1810] dark:via-[#14120C] dark:to-[#0E0C08] border border-gold-400/25 shadow-2xl shadow-gold-950/10 dark:shadow-black/80 gold-sheen-bg overflow-hidden transition-colors duration-200">
          {/* Inner Inset Refined Border */}
          <div className="absolute inset-3 sm:inset-4 rounded-2xl border border-gold-400/15 pointer-events-none" />

          {/* Top-Left Corner Flourish */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 border-t border-l border-gold-400/50 rounded-tl-md pointer-events-none" />
          {/* Top-Right Corner Flourish */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 border-t border-r border-gold-400/50 rounded-tr-md pointer-events-none" />
          {/* Bottom-Left Corner Flourish */}
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 border-b border-l border-gold-400/50 rounded-bl-md pointer-events-none" />
          {/* Bottom-Right Corner Flourish */}
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 border-b border-r border-gold-400/50 rounded-br-md pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/35 text-gold-600 dark:text-gold-300 text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Heart className="w-3.5 h-3.5 fill-gold-400/40 text-gold-400" />
              <span>Exclusive Bridal Couture Experience</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ivory font-medium tracking-tight leading-tight">
              <span className="gold-gradient-text relative inline-block">
                Bridal &amp; Occasion Glamour
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-ivory/85 font-light leading-relaxed max-w-2xl mx-auto">
              Makeup, hair and henna crafted for your big day — booked by appointment only.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact?type=bridal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-background shadow-xl shadow-gold-950/20 dark:shadow-gold-950/60 transition-all duration-200 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-background" />
                Book an Appointment
              </Link>

              <Link
                href="/bridal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-surface-card hover:bg-surface-elevated border border-gold-400/40 hover:border-gold-400 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                Explore Bridal Packages
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

