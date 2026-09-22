import React from "react";
import Link from "next/link";
import { MapPin, Clock, MessageSquare, ArrowUpRight, Phone } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { SALON_INFO } from "@/data/salonInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Bridal", href: "/bridal" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--teal-900)",
        borderTop: "1px solid rgba(197, 168, 112, 0.22)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3.5rem 2rem",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(197, 168, 112, 0.12)",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "340px" }}>
            <div className="brand-wordmark" style={{ marginBottom: "1.2rem" }}>
              <span className="wordmark-karthikeya">{SALON_INFO.wordmarkTracker}</span>
              <span className="wordmark-lavish-looks">{SALON_INFO.wordmarkBrand}</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.92rem",
                color: "var(--text-muted-dark)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              A premier unisex salon and bridal artistry atelier in Warangal. Thoughtful hair design, skin rituals, occasion makeup, and gentlemen’s grooming crafted with intention.
            </p>
            <div style={{ display: "flex", gap: "0.9rem" }}>
              <a
                href={SALON_INFO.social.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--gold-border)",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-sans)",
                  color: "var(--gold-300)",
                  background: "rgba(13, 49, 49, 0.4)",
                  transition: "all 0.25s ease",
                }}
              >
                <InstagramIcon size={15} />
                <span>{SALON_INFO.social.instagramHandle}</span>
              </a>
              <a
                href={SALON_INFO.social.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Concierge"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "var(--radius-full)",
                  border: "1px solid var(--gold-border)",
                  color: "var(--gold-300)",
                  background: "rgba(13, 49, 49, 0.4)",
                }}
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                marginBottom: "1.4rem",
              }}
            >
              Navigation
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {links.map((link) => (
                <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-nav-link"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.92rem",
                        color: "var(--ivory-100)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        transition: "color 0.2s ease",
                      }}
                    >
                      <span>{link.label}</span>
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Nav Column */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                marginBottom: "1.4rem",
              }}
            >
              Expertise
            </h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <li>
                <Link
                  href="/services#hair"
                  style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)" }}
                >
                  Hair Transformations
                </Link>
              </li>
              <li>
                <Link
                  href="/services#skin-facials"
                  style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)" }}
                >
                  Skin & Facials
                </Link>
              </li>
              <li>
                <Link
                  href="/bridal"
                  style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)" }}
                >
                  Royal Bridal & Henna
                </Link>
              </li>
              <li>
                <Link
                  href="/services#makeup"
                  style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)" }}
                >
                  HD & Airbrush Makeup
                </Link>
              </li>
              <li>
                <Link
                  href="/services#nails"
                  style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)" }}
                >
                  Couture Nails & Care
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mens-grooming"
                  style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)" }}
                >
                  Men’s Precision Grooming
                </Link>
              </li>
            </ul>
          </div>

          {/* Visiting & Hours Column */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--gold-400)",
                marginBottom: "1.4rem",
              }}
            >
              Visiting The Salon
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <MapPin size={18} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "0.88rem", color: "var(--text-muted-dark)", lineHeight: 1.5 }}>
                  <p style={{ color: "var(--ivory-50)", fontWeight: 500 }}>{SALON_INFO.address.line1}, {SALON_INFO.address.line2}</p>
                  <p>{SALON_INFO.address.area}, {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.pincode}</p>
                  <p style={{ color: "var(--gold-300)", marginTop: "2px" }}>Plus Code: {SALON_INFO.address.plusCode}</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Phone size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                <a
                  href={`tel:${SALON_INFO.social.phone.replace(/\s+/g, "")}`}
                  className="footer-phone-link"
                  style={{
                    fontSize: "0.92rem",
                    color: "var(--ivory-50)",
                    fontWeight: 600,
                    letterSpacing: "0.03em",
                    transition: "color 0.2s ease",
                  }}
                >
                  {SALON_INFO.social.phoneFormatted}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                <Clock size={18} style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }} />
                <div style={{ fontSize: "0.88rem", color: "var(--text-muted-dark)", lineHeight: 1.5 }}>
                  <p style={{ color: "var(--ivory-50)" }}>Monday: <span style={{ color: "var(--gold-300)" }}>{SALON_INFO.hours.monday}</span></p>
                  <p>Remaining Days: <span style={{ color: "var(--gold-400)", fontWeight: 600 }}>{SALON_INFO.hours.remainingDays}</span> (confirm via call/message)</p>
                </div>
              </div>

              <a
                href={SALON_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  fontSize: "0.84rem",
                  color: "var(--gold-400)",
                  marginTop: "0.4rem",
                }}
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "2rem",
            fontSize: "0.82rem",
            color: "var(--text-muted-dark)",
            fontFamily: "var(--font-sans)",
            gap: "1rem",
          }}
        >
          <div>
            <span>© {currentYear} {SALON_INFO.name}. All rights reserved.</span>
          </div>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <span>Warangal, Telangana</span>
            <span>Unisex Beauty & Bridal Atelier</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
