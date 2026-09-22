import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck } from "lucide-react";
import SalonImage from "@/components/ui/SalonImage";
import { SALON_DATA } from "@/data/salonData";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:py-20 lg:py-24 border-b border-black/[0.06] dark:border-white/[0.04]">
      {/* Background ambient lighting accents */}

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-tealAccent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{SALON_DATA.name}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-ivory font-medium tracking-tight leading-[1.1]">
              Where Beauty Meets{" "}
              <span className="gold-gradient-text font-serif italic">
                Lavish Confidence
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-ivory/80 max-w-xl font-light leading-relaxed">
              Warangal&apos;s premier unisex luxury salon delivering precision hair
              transformations, bespoke bridal artistry, radiant skincare, and signature
              men&apos;s grooming. Experience authentic craftsmanship crafted for your unique look.
            </p>

            {/* Trust highlights inline */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs sm:text-sm text-ivory/70">
              <div className="flex items-center gap-1.5">
                <div className="flex text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <span className="font-medium text-ivory">5.0★ on JustDial</span>
              </div>
              <span className="text-ivory/30">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>Verified Unisex Salon</span>
              </div>
            </div>


            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-background shadow-lg shadow-gold-400/20 active:scale-98 transition-all duration-200"
              >
                <Calendar className="w-4 h-4 text-background" />
                Book an Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-sm font-semibold uppercase tracking-widest text-ivory bg-surface-card hover:bg-surface-elevated border border-gold-400/30 hover:border-gold-400 transition-all duration-200"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Hero Real Salon Image Frame */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative p-2 rounded-3xl bg-gradient-to-b from-gold-400/30 via-surface-border to-surface-card luxe-glow">
              <SalonImage
                src="/images/hero/hero-main.jpg"
                alt="Signature Salon Transformation"
                category="Signature Artistry"
                tag="Real @k_lavishlooks Work"
                priority={true}
                aspectRatio="portrait"
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="w-full shadow-2xl rounded-2xl"
              />

              {/* Floating verified badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-surface-elevated/95 backdrop-blur-md border border-gold-400/40 px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-400/20 border border-gold-400/40 flex items-center justify-center text-gold-400 font-serif font-bold text-lg">
                  5★
                </div>
                <div>
                  <p className="text-xs font-semibold text-ivory">JustDial Verified</p>
                  <p className="text-[11px] text-gold-300">11 Genuine Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
