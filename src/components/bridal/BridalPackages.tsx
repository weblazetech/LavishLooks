import React from "react";
import { Check, Sparkles, Heart } from "lucide-react";

interface BridalPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  badge?: string;
  servicesIncluded: string[];
}

const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    id: "pkg-muhurtham",
    name: "The Royal Muhurtham Bridal Experience",
    subtitle: "Complete traditional ceremony look with jewelry and saree perfection.",
    price: "[PRICE]",
    badge: "Most Requested",
    servicesIncluded: [
      "Signature HD Bridal Makeup (Long-wear & waterproof)",
      "Traditional Bridal Hair Styling & Fresh Floral Setting",
      "Authentic Saree Draping & Silhouette Structuring",
      "Bridal Jewelry Placement & Maang Tikka Setting",
      "Lash Application & Pre-Event Consultation",
    ],
  },
  {
    id: "pkg-reception",
    name: "Contemporary Reception & Sangeet Glamour",
    subtitle: "Modern illuminated glam tailored for evening celebrations.",
    price: "[PRICE]",
    servicesIncluded: [
      "Ultra-HD Glowing Evening Makeup",
      "Modern Textured Updo, Hollywood Waves, or Braiding",
      "Lehenga / Evening Gown Draping",
      "Contour, Highlight & Long-Wear Setting",
      "Pre-Event Trial Consultation",
    ],
  },
  {
    id: "pkg-henna-ritual",
    name: "Bridal Henna & Pre-Bridal Radiance",
    subtitle: "Complete pre-wedding pampering and exquisite mehndi artistry.",
    price: "[PRICE]",
    servicesIncluded: [
      "Full Bridal Mehndi (Elbow length & Feet motifs)",
      "Signature 24K Radiance Facial Treatment",
      "Lavish Botanical Hair Spa & Scalp Therapy",
      "Deluxe Royal Manicure & Pedicure",
      "Full Body Exfoliation & Polish",
    ],
  },
];

export default function BridalPackages() {
  return (
    <section id="bridal-packages" className="py-20 md:py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-sans font-semibold text-gold-400">
            Curated Bridal Collections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium">
            Bridal Packages
          </h2>
          <p className="text-sm sm:text-base text-ivory/70 font-light">
            Every package is customized to complement your bridal attire, ceremony schedule, and personal aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BRIDAL_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 relative ${
                pkg.badge
                  ? "bg-surface-elevated border border-gold-400/50 shadow-2xl shadow-gold-950/30"
                  : "bg-surface-card border border-surface-border hover:border-gold-400/40"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-gold-400 text-background flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3 text-background" />
                  {pkg.badge}
                </div>
              )}

              <div>
                <h3 className="font-serif text-2xl font-medium text-ivory mb-2 mt-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-ivory/70 font-light mb-6">
                  {pkg.subtitle}
                </p>

                <div className="py-3 px-4 rounded-xl bg-surface-elevated border border-surface-border mb-6 flex items-center justify-between">
                  <span className="text-xs text-ivory/60 font-medium">Package Price</span>
                  <span className="font-mono text-base font-bold text-gold-500 dark:text-gold-400">
                    {pkg.price}
                  </span>
                </div>

                <div className="space-y-3 pt-2 border-t border-surface-border/60">
                  <p className="text-xs uppercase tracking-wider text-gold-500 dark:text-gold-400 font-semibold">
                    Includes:
                  </p>
                  <ul className="space-y-2.5 text-xs text-ivory/80">
                    {pkg.servicesIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-surface-border/60">
                <a
                  href="#bridal-enquiry"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs uppercase tracking-widest font-semibold bg-surface-elevated hover:bg-gold-400 hover:text-background text-ivory border border-gold-400/30 hover:border-gold-400 transition-all duration-200"
                >
                  <Heart className="w-3.5 h-3.5 text-gold-400" />
                  Enquire for this Package
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
