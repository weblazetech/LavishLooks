import React from "react";
import { MapPin, Clock, MessageSquare, ArrowUpRight, Phone, Calendar } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export default function LocationSection() {
  return (
    <section
      className="section-spacing"
      style={{ backgroundColor: "var(--teal-950)", scrollMarginTop: "5rem" }}
      id="location"
    >
      <div className="container">
        <SectionHeader
          tag="Find The Atelier"
          number="06"
          title="Visit Us in Warangal"
          subtitle="Located conveniently in Kashibugga Society Colony opposite O City Main Road. Experience dedicated unisex artistry in a serene environment."
          align="center"
        />

        <div className="location-grid">
          {/* Left Column: Address, Exact Hours, and Direct Connections */}
          <div className="editorial-glass-card location-card">
            <div>
              {/* Brand Header */}
              <div className="brand-wordmark" style={{ marginBottom: "1.8rem" }}>
                <span className="wordmark-karthikeya">{SALON_INFO.wordmarkTracker}</span>
                <span className="wordmark-lavish-looks">{SALON_INFO.wordmarkBrand}</span>
              </div>

              {/* Exact Address Block */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(13, 49, 49, 0.8)",
                    border: "1px solid var(--gold-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-400)",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.25rem", color: "var(--ivory-50)", marginBottom: "0.4rem" }}
                  >
                    Salon Location
                  </h3>
                  <p style={{ fontSize: "0.92rem", color: "var(--ivory-100)", lineHeight: 1.6 }}>
                    {SALON_INFO.address.line1}, {SALON_INFO.address.line2}
                    <br />
                    {SALON_INFO.address.area},
                    <br />
                    {SALON_INFO.address.colony},
                    <br />
                    {SALON_INFO.address.city}, {SALON_INFO.address.state} {SALON_INFO.address.pincode}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      color: "var(--gold-300)",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                      marginTop: "0.6rem",
                    }}
                  >
                    Plus Code: {SALON_INFO.address.plusCode}
                  </p>
                </div>
              </div>

              {/* Exact Hours Block with Clean Mobile Layout */}
              <div style={{ display: "flex", gap: "1rem", marginBottom: "2.2rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(13, 49, 49, 0.8)",
                    border: "1px solid var(--gold-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--gold-400)",
                    flexShrink: 0,
                  }}
                >
                  <Clock size={20} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.25rem", color: "var(--ivory-50)", marginBottom: "0.6rem" }}
                  >
                    Salon Hours
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.25rem 0.5rem",
                        paddingBottom: "0.5rem",
                        borderBottom: "1px solid rgba(197, 168, 112, 0.12)",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", color: "var(--ivory-50)", fontWeight: 500 }}>
                        Wednesday – Monday:
                      </span>
                      <span
                        style={{
                          fontSize: "0.9rem",
                          color: "var(--gold-300)",
                          fontWeight: 600,
                          fontFamily: "var(--font-sans)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        8:00 AM – 9:00 PM
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "0.25rem 0.5rem",
                        paddingTop: "0.1rem",
                      }}
                    >
                      <span style={{ fontSize: "0.9rem", color: "var(--ivory-50)", fontWeight: 500 }}>
                        Tuesday:
                      </span>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          color: "#f87171",
                          fontWeight: 600,
                          border: "1px solid rgba(239, 68, 68, 0.35)",
                          padding: "0.18rem 0.6rem",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(239, 68, 68, 0.12)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Closed (Weekly Off)
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted-dark)", marginTop: "0.65rem", lineHeight: 1.5 }}>
                    Open 6 days a week. Appointments recommended; walk-ins warmly welcome.
                  </p>
                </div>
              </div>

              {/* Direct Links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginBottom: "2rem" }}>
                <a
                  href={`tel:${SALON_INFO.social.phone.replace(/\s+/g, "")}`}
                  className="location-pill"
                  style={{ color: "var(--ivory-50)" }}
                >
                  <Phone size={15} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                  <span>{SALON_INFO.social.phoneFormatted}</span>
                </a>

                <a
                  href={SALON_INFO.social.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-pill"
                  style={{ color: "var(--ivory-50)" }}
                >
                  <MessageSquare size={15} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  href={SALON_INFO.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-pill"
                  style={{ color: "var(--gold-300)" }}
                >
                  <InstagramIcon size={15} />
                  <span>{SALON_INFO.social.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(197, 168, 112, 0.15)" }}>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                fullWidth
                icon={<Calendar size={16} />}
                style={{
                  whiteSpace: "nowrap",
                  fontSize: "clamp(0.76rem, 3.2vw, 0.85rem)",
                  letterSpacing: "0.05em",
                  padding: "0.85rem 1.2rem",
                }}
              >
                Request An Appointment
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Direct Directions */}
          <div
            className="editorial-glass-card"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              minHeight: "440px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {/* Embedded Interactive Map with Exact Location */}
            <div style={{ position: "relative", flexGrow: 1, width: "100%", minHeight: "360px" }}>
              <iframe
                title="Karthikeya Lavish Looks Exact Map Location"
                src={SALON_INFO.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(85%) contrast(110%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom Bar on Map */}
            <div
              style={{
                padding: "1.1rem 1.25rem",
                backgroundColor: "var(--teal-900)",
                borderTop: "1px solid var(--gold-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              <div>
                <p style={{ fontSize: "0.85rem", color: "var(--ivory-50)", fontWeight: 500 }}>
                  Opposite O City Main Road
                </p>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted-dark)" }}>
                  Warangal, Telangana 506002
                </p>
              </div>

              <a
                href={SALON_INFO.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.84rem",
                  color: "var(--gold-300)",
                  fontWeight: 600,
                }}
              >
                <span>Open in Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
