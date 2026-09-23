import React from "react";
import { Heart, Sparkles, Calendar, Phone } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function BridalHero() {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-20 bg-background border-b border-black/[0.06] dark:border-white/[0.04] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
          <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
          <span>Bespoke Bridal &amp; Occasion Studio</span>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-ivory font-medium tracking-tight leading-[1.1]">
          Bridal &amp; Occasion{" "}
          <span className="gold-gradient-text italic font-serif">Glamour</span>
        </h1>

        {/* Subtitle description */}
        <p className="text-base sm:text-lg text-ivory/80 font-light leading-relaxed max-w-2xl mx-auto">
          From traditional Muhurtham elegance to contemporary reception brilliance,
          Karthikeya Lavish Looks designs unforgettable bridal memories with master makeup
          application, intricate henna, and exquisite hair draping.
        </p>

        {/* Contact Banner / Call-to-action */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${SALON_DATA.phoneTel}`}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-background shadow-lg shadow-gold-400/20 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-background" />
            <span>Call {SALON_DATA.phoneDisplay}</span>
          </a>

          <a
            href="#bridal-enquiry"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-ivory bg-surface-card hover:bg-surface-elevated border border-gold-400/30 hover:border-gold-400 transition-all"
          >
            <Calendar className="w-4 h-4 text-gold-400" />
            Reserve Bridal Dates
          </a>

          <a
            href="#bridal-packages"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-ivory/80 hover:text-ivory bg-surface-card/60 hover:bg-surface-elevated border border-surface-border hover:border-gold-400/40 transition-all"
          >
            <Sparkles className="w-4 h-4 text-gold-400" />
            View Packages
          </a>
        </div>
      </div>
    </section>
  );
}
