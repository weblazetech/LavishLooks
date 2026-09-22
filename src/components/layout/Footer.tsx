import React from "react";
import Link from "next/link";
import { Instagram, MapPin, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { SALON_DATA } from "@/data/salonData";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-black/[0.06] dark:border-white/[0.04] text-ivory pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-10">
          {/* Col 1 & 2: Brand & Positioning */}

          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block group">
              <span className="text-xs tracking-widest uppercase font-sans font-semibold text-gold-400 group-hover:text-gold-300 transition-colors">
                {SALON_DATA.wordmarkTop}
              </span>
              <h3 className="font-serif text-3xl font-medium tracking-wide text-ivory group-hover:text-gold-200 transition-colors -mt-1">
                {SALON_DATA.wordmarkBottom}
              </h3>
            </Link>

            <p className="text-sm text-ivory/70 leading-relaxed max-w-sm font-light">
              Warangal&apos;s premier unisex destination for bespoke hair transformations,
              signature bridal artistry, intricate mehndi, and precision men&apos;s grooming.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${SALON_DATA.phoneTel}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/40 text-gold-300 hover:text-gold-200 transition-all duration-200"
              >
                <span>📞 {SALON_DATA.phoneDisplay}</span>
              </a>

              <a
                href={SALON_DATA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-surface-card hover:bg-gold-400/15 border border-gold-400/30 text-gold-300 hover:text-gold-200 transition-all duration-200"
              >
                <Instagram className="w-4 h-4 text-gold-400" />
                Follow {SALON_DATA.instagram.handle}
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold-400 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-ivory/70 hover:text-gold-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-ivory/70 hover:text-gold-300 transition-colors"
                >
                  Services Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/bridal"
                  className="text-ivory/70 hover:text-gold-300 transition-colors"
                >
                  Bridal & Occasion
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-ivory/70 hover:text-gold-300 transition-colors"
                >
                  Our Work (Gallery)
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ivory/70 hover:text-gold-300 transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold-400 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SALON_DATA.categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/services?category=${encodeURIComponent(cat)}`}
                    className="text-ivory/70 hover:text-gold-300 transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Location, Phone & Verified Hours */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-sans font-semibold text-gold-400 mb-4">
              Visit Salon
            </h4>

            <div className="flex items-start gap-2.5 text-sm text-ivory/80">
              <MapPin className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
              <div className="leading-snug">
                <p className="font-medium text-ivory">Karthikeya Lavish Looks</p>
                <p className="text-xs text-ivory/70 mt-0.5">{SALON_DATA.address.full}</p>
                <p className="text-[11px] font-mono text-gold-300 mt-1">
                  Plus Code: {SALON_DATA.address.plusCode}
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-surface-border/40 text-xs text-ivory/80">
              <p className="text-ivory/60 font-semibold uppercase tracking-wider text-[11px]">Direct Contact</p>
              <a href={`tel:${SALON_DATA.phoneTel}`} className="text-gold-400 hover:text-gold-300 font-medium text-sm mt-0.5 block">
                {SALON_DATA.phoneDisplay}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-ivory/80 pt-2 border-t border-surface-border/40">
              <Clock className="w-4 h-4 text-gold-400 mt-1 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-ivory/60 font-semibold">
                  Verified Timings
                </p>
                <p className="text-xs text-ivory/90 font-medium">
                  {SALON_DATA.hours.verifiedDay}: {SALON_DATA.hours.verifiedTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
          <p>
            © {new Date().getFullYear()} Karthikeya Lavish Looks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-ivory/60">
              Rated 5.0★ on JustDial (11 Verified Reviews)
            </span>
            <Link
              href="/contact"
              className="text-gold-400 hover:text-gold-500 dark:hover:text-gold-300 uppercase tracking-wider font-semibold"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

