import React from "react";
import Link from "next/link";
import { Scissors, Sparkles, Palette, Gem, Heart, Crown, ArrowRight } from "lucide-react";

interface CategoryMeta {
  title: string;
  description: string;
  icon: React.ReactNode;
  categoryParam: string;
}

const CATEGORIES: CategoryMeta[] = [
  {
    title: "Hair",
    description: "Professional hair styling and transformation services.",
    icon: <Scissors className="w-6 h-6 text-gold-400" />,
    categoryParam: "Hair",
  },
  {
    title: "Skin & Facials",
    description: "Beauty and skincare services.",
    icon: <Sparkles className="w-6 h-6 text-gold-400" />,
    categoryParam: "Skin & Facials",
  },
  {
    title: "Makeup",
    description: "Makeup services for occasions and special events.",
    icon: <Palette className="w-6 h-6 text-gold-400" />,
    categoryParam: "Makeup",
  },
  {
    title: "Nails",
    description: "Nail and beauty services.",
    icon: <Gem className="w-6 h-6 text-gold-400" />,
    categoryParam: "Nails",
  },
  {
    title: "Mehndi & Bridal",
    description: "Bridal and occasion mehndi, makeup and beauty services.",
    icon: <Heart className="w-6 h-6 text-gold-400" />,
    categoryParam: "Mehndi & Bridal",
  },
  {
    title: "Men's Grooming",
    description: "Men's hair and beard grooming services.",
    icon: <Crown className="w-6 h-6 text-gold-400" />,
    categoryParam: "Men's Grooming",
  },
];

export default function ServiceCategories() {
  return (
    <section className="py-20 md:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-sans font-semibold text-gold-400">
            Tailored Experiences
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium">
            Our Core Specialties
          </h2>
          <p className="text-sm sm:text-base text-ivory/70 font-light">
            Comprehensive salon treatments crafted with precision, premium products, and
            individual care.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={`/services?category=${encodeURIComponent(cat.categoryParam)}`}
              className="group relative p-8 rounded-2xl bg-surface-card border border-surface-border hover:border-gold-400/50 transition-all duration-300 flex flex-col justify-between hover:translate-y-[-3px] hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-gold-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-gold-400/40 group-hover:bg-gold-400/10 transition-all duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-serif text-2xl font-medium text-ivory group-hover:text-gold-300 transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-ivory/70 font-light leading-relaxed mb-6">
                  {cat.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-gold-400 group-hover:text-gold-200 group-hover:gap-3 transition-all pt-2 border-t border-white/5">
                <span>View services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold text-ivory bg-surface-elevated hover:bg-surface border border-gold-400/30 hover:border-gold-400 transition-colors"
          >
            Explore Full Service Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
