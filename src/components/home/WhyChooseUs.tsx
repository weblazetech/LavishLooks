import React from "react";
import { Sparkles, Users, HeartHandshake, ShieldCheck, Award } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

const PILLARS = [
  {
    icon: <Users className="w-6 h-6 text-gold-400" />,
    title: "Dedicated Unisex Salon",
    description:
      "Specialized service zones and trained stylists delivering high-precision hair styling and grooming for both women and men.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-gold-400" />,
    title: "Personalized Consultations",
    description:
      "Every treatment begins with a focused consultation to evaluate your hair texture, skin tone, and aesthetic preferences.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold-400" />,
    title: "Uncompromising Hygiene",
    description:
      "Strict sanitization protocols, single-use disposables where applicable, and clean salon stations for complete peace of mind.",
  },
  {
    icon: <Award className="w-6 h-6 text-gold-400" />,
    title: "Verified JustDial Excellence",
    description:
      "Consistently rated 5.0★ by local Warangal clients for attentive hospitality, dependable artistry, and transformative results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-sans font-semibold text-gold-400">
            The Lavish Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium">
            Why Clients Choose Karthikeya Lavish Looks
          </h2>
          <p className="text-sm sm:text-base text-ivory/70 font-light">
            Rooted in authentic artistry, professional care, and a warm, luxurious salon atmosphere in Warangal.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-gold-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-gold-400/20 flex items-center justify-center mb-6 text-gold-400">
                  {pillar.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-ivory mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ivory/70 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-gold-400/80 font-medium">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span>Warangal Luxury Salon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
