import React from "react";
import { Star, ShieldCheck } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function ReviewsSection() {
  return (
    <section className="py-20 md:py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Rating Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-surface-card via-surface-elevated to-surface-card border border-gold-400/15 luxe-glow relative overflow-hidden">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Verified Client Rating</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium">
              Trusted by Discerning Clients in Warangal
            </h2>

            {/* Big 5.0 Star Display */}
            <div className="flex flex-col items-center justify-center gap-2 py-4">
              <div className="flex items-center gap-1.5 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 sm:w-8 sm:h-8 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <div className="font-serif text-5xl sm:text-6xl font-bold text-ivory tracking-tight mt-1">
                5.0 <span className="text-2xl text-gold-400 font-sans font-normal">/ 5.0</span>
              </div>
              <p className="text-sm sm:text-base text-gold-300 font-medium">
                Based on {SALON_DATA.rating.reviewCount} Verified Reviews on {SALON_DATA.rating.source}
              </p>
            </div>

            {/* Genuine Commitment Statement */}
            <div className="max-w-2xl mx-auto pt-4 border-t border-white/10">
              <p className="text-sm text-ivory/80 font-light leading-relaxed italic">
                &ldquo;Every client walking through our doors receives personalized attention,
                artistic expertise, and dedicated beauty care designed to inspire confidence.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-gold-400 font-semibold mt-3">
                — Karthikeya Lavish Looks Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
