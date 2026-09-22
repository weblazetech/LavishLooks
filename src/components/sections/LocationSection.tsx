import React from "react";
import { MapPin, Clock, MessageSquare, ArrowUpRight, Phone, Calendar } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export default function LocationSection() {
  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--teal-950)" }} id="location">
      <div className="container">
        <SectionHeader
          tag="Find The Atelier"
          number="06"
          title="Visit Us in Warangal"
          subtitle="Located conveniently in Kashibugga Society Colony opposite O City Main Road. Experience dedicated unisex artistry in a serene environment."
          align="center"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "stretch",
          }}
        >
          {/* Left Column: Address, Exact Hours, and Direct Connections */}
          <div
            className="editorial-glass-card"
            style={{
              padding: "3rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "rgba(7, 30, 30, 0.6)",
            }}
          >
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

              {/* Exact Hours Block with Strict Rules */}
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
                <div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.25rem", color: "var(--ivory-50)", marginBottom: "0.4rem" }}
                  >
                    Salon Hours
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.92rem", color: "var(--ivory-50)", fontWeight: 500 }}>
                        Monday:
                      </span>
                      <span style={{ fontSize: "0.92rem", color: "var(--gold-300)", fontWeight: 600 }}>
                        {SALON_INFO.hours.monday}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                      <span style={{ fontSize: "0.92rem", color: "var(--ivory-50)", fontWeight: 500 }}>
                        Remaining Days:
                      </span>
                      <span
                        style={{
                          fontSize: "0.85rem",
                          color: "var(--gold-400)",
                          fontWeight: 600,
                          border: "1px solid var(--gold-border)",
                          padding: "0.1rem 0.5rem",
                          borderRadius: "var(--radius-sm)",
                          background: "rgba(13, 49, 49, 0.6)",
                        }}
                      >
                        {SALON_INFO.hours.remainingDays}
                      </span>
                    </div>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted-dark)", marginTop: "0.5rem" }}>
                    *Please call or message ahead to confirm slot availability for remaining days.
                  </p>
                </div>
              </div>

              {/* Direct Links */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
                <a
                  href={SALON_INFO.social.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1.15rem",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid var(--gold-border)",
                    background: "rgba(13, 49, 49, 0.6)",
                    color: "var(--ivory-50)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  <MessageSquare size={15} style={{ color: "var(--gold-400)" }} />
                  <span>WhatsApp Concierge</span>
                </a>

                <a
                  href={SALON_INFO.social.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.6rem 1.15rem",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid var(--gold-border)",
                    background: "rgba(13, 49, 49, 0.6)",
                    color: "var(--gold-300)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                  }}
                >
                  <InstagramIcon size={15} />
                  <span>{SALON_INFO.social.instagramHandle}</span>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ paddingTop: "1.5rem", borderTop: "1px solid rgba(197, 168, 112, 0.15)" }}>
              <Button href="/contact" variant="primary" size="md" icon={<Calendar size={16} />}>
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
            {/* Embedded Interactive Map */}
            <div style={{ position: "relative", flexGrow: 1, width: "100%", minHeight: "360px" }}>
              <iframe
                title="Karthikeya Lavish Looks Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15187.319762699317!2d79.6050!3d17.9750!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334f59e875e5eb%3A0x88981f9a0c6a51d8!2sKashibugga%2C%20Warangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
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
                padding: "1.25rem 1.8rem",
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
