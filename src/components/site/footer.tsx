import * as React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Instagram, MapPin, Clock, ExternalLink } from "lucide-react";
import { Wordmark } from "./wordmark";
import { FeatherMotif } from "./feather-motif";
import { navLinks, salon } from "@/data/salon";

export function Footer() {
  return (
    <footer
      className="bg-ivory border-t border-hairline/60 mt-auto"
      role="contentinfo"
    >
      <div className="container-atelier py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Col 1: Wordmark + tagline */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <FeatherMotif size={20} />
              <Wordmark />
            </div>
            <p className="text-caption max-w-[28ch] text-muted">
              {salon.tagline}. Hair, skin, makeup, mehndi and men&apos;s grooming in Kashibugga.
            </p>
          </div>

          {/* Col 2: Hours */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h3 text-ink">Hours</h2>
            <ul className="flex flex-col gap-1.5 text-[0.875rem]">
              {salon.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-baseline justify-between gap-3"
                >
                  <span className="font-medium text-ink">{h.day}</span>
                  <span
                    className={
                      h.verified
                        ? "font-semibold text-teal"
                        : "text-muted italic"
                    }
                  >
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-caption text-muted mt-1 max-w-[34ch]">
              {salon.hoursNote}
            </p>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h3 text-ink">Contact</h2>
            <ul className="flex flex-col gap-2.5 text-[0.875rem]">
              <li>
                <a
                  href={salon.phone === "[PHONE]" ? "#" : `tel:${salon.phone}`}
                  className="inline-flex items-center gap-2 text-ink hover:text-teal transition-colors"
                >
                  <Phone size={15} className="text-teal" aria-hidden="true" />
                  <span className={salon.phone === "[PHONE]" ? "text-muted italic" : ""}>
                    {salon.phone}
                  </span>
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-ink">
                  <MessageCircle size={15} className="text-teal" aria-hidden="true" />
                  <span className={salon.whatsapp === "[WHATSAPP]" ? "text-muted italic" : ""}>
                    WhatsApp {salon.whatsapp}
                  </span>
                </span>
              </li>
              <li>
                <a
                  href={salon.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink hover:text-teal transition-colors"
                >
                  <Instagram size={15} className="text-teal" aria-hidden="true" />
                  {salon.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Address + quick links */}
          <div className="flex flex-col gap-3">
            <h2 className="text-h3 text-ink">Address</h2>
            <address className="not-italic text-[0.875rem] text-muted leading-relaxed flex gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
              <span>
                {salon.addressLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < salon.addressLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
                <br />
                <span className="inline-flex items-center gap-1 mt-1.5">
                  <Clock size={12} className="text-gold" aria-hidden="true" />
                  Plus code: <span className="font-semibold text-ink">{salon.plusCode}</span>
                </span>
              </span>
            </address>
            <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1 items-center">
              {navLinks.map((l, i) => (
                <React.Fragment key={l.href}>
                  {i > 0 && <span className="text-hairline">·</span>}
                  <Link
                    href={l.href}
                    className="text-[0.8125rem] font-medium text-muted hover:text-teal transition-colors"
                  >
                    {l.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-hairline/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[0.8125rem] text-muted">
            © {new Date().getFullYear()} {salon.name}. All rights reserved.
          </p>
          <a
            href={salon.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-teal hover:text-teal-deep transition-colors"
          >
            View on Google Maps
            <ExternalLink size={12} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
