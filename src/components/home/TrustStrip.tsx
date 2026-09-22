import React from "react";
import { Star, ShieldCheck, Sparkles, Award } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function TrustStrip() {
  return (
    <section className="bg-surface-elevated/80 py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {/* Item 1: JustDial Rating */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
              <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-serif text-lg font-bold text-ivory">5.0★</span>
                <span className="text-[11px] text-gold-300 font-medium bg-gold-400/15 px-1.5 py-0.5 rounded">
                  Rating
                </span>
              </div>
              <p className="text-xs text-ivory/60 font-sans">
                {SALON_DATA.rating.reviewCount} JustDial Reviews
              </p>
            </div>
          </div>

          {/* Item 2: Unisex Salon */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-lg font-semibold text-ivory">
                {SALON_DATA.type}
              </p>
              <p className="text-xs text-ivory/60 font-sans">
                Dedicated Women &amp; Men Styling
              </p>
            </div>
          </div>

          {/* Item 3: Core Categories */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-semibold text-ivory leading-tight">
                Full-Service Care
              </p>
              <p className="text-xs text-gold-300 font-medium">
                Hair • Makeup • Mehndi • Grooming
              </p>
            </div>
          </div>

          {/* Item 4: Verified Location */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center shrink-0 text-gold-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif text-base font-semibold text-ivory">
                Warangal, Telangana
              </p>
              <p className="text-xs text-ivory/60 font-mono">
                Plus Code: {SALON_DATA.address.plusCode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
