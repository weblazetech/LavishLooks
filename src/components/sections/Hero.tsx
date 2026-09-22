import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles, Calendar } from "lucide-react";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "96vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "calc(var(--header-height) + 2rem)",
        paddingBottom: "5rem",
        overflow: "hidden",
        backgroundColor: "var(--teal-950)",
      }}
    >
      {/* Editorial Background Image with Rich Multi-Layer Gradient Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/hero-salon.jpg"
          alt="Karthikeya Lavish Looks Luxury Salon Atmosphere"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
            opacity: 0.36,
            filter: "contrast(1.08) brightness(0.85)",
          }}
        />
        {/* Editorial Gradients to create deep luxury ambiance and readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(4, 18, 18, 0.85) 0%, rgba(4, 18, 18, 0.45) 45%, rgba(4, 18, 18, 0.95) 100%), radial-gradient(circle at center, transparent 0%, rgba(4, 18, 18, 0.8) 100%)",
          }}
        />
      </div>

      {/* Decorative Fine Gold Borders & Lines */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "5%",
          width: "1px",
          height: "40%",
          background: "linear-gradient(to bottom, transparent, var(--gold-border), transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "5%",
          width: "1px",
          height: "40%",
          background: "linear-gradient(to top, transparent, var(--gold-border), transparent)",
          zIndex: 2,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 3 }}>
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Location Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--gold-border)",
              background: "rgba(13, 49, 49, 0.65)",
              backdropFilter: "blur(12px)",
              color: "var(--gold-300)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "2rem",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <MapPin size={13} style={{ color: "var(--gold-400)" }} />
            <span>{SALON_INFO.locationLabel}</span>
          </div>

          {/* Canonical Name Tracked Header */}
          <div style={{ marginBottom: "0.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(0.85rem, 1.8vw, 1.2rem)",
                fontWeight: 600,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "var(--gold-300)",
                display: "block",
              }}
            >
              {SALON_INFO.wordmarkTracker}
            </span>
            <span
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontStyle: "italic",
                color: "var(--ivory-100)",
                display: "block",
                letterSpacing: "0.04em",
                marginTop: "-4px",
              }}
            >
              {SALON_INFO.wordmarkBrand}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.8rem, 6.5vw, 5.4rem)",
              fontWeight: 400,
              lineHeight: 1.08,
              color: "var(--ivory-50)",
              letterSpacing: "-0.015em",
              margin: "1.2rem 0 1.5rem",
              textWrap: "balance",
            }}
          >
            Beauty, Crafted <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>With Intention.</span>
          </h1>

          {/* Supporting Text */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              fontWeight: 300,
              color: "var(--ivory-100)",
              lineHeight: 1.7,
              maxWidth: "680px",
              marginBottom: "2.8rem",
              textWrap: "balance",
            }}
          >
            {SALON_INFO.supportingText}
          </p>

          {/* Hero CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.25rem",
            }}
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Calendar size={18} />}
            >
              Book an Appointment
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              icon={<ArrowUpRight size={18} />}
            >
              Explore Services
            </Button>
          </div>

          {/* Floating Subtle Quality Indicator */}
          <div
            style={{
              marginTop: "4rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "0.75rem 1.6rem",
              borderRadius: "var(--radius-full)",
              background: "rgba(10, 37, 37, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(197, 168, 112, 0.18)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <Sparkles size={14} style={{ color: "var(--gold-400)" }} />
              <span style={{ fontSize: "0.82rem", color: "var(--ivory-100)", letterSpacing: "0.04em" }}>
                Unisex Beauty & Grooming
              </span>
            </div>
            <span style={{ color: "rgba(197, 168, 112, 0.3)" }}>•</span>
            <span style={{ fontSize: "0.82rem", color: "var(--gold-300)", letterSpacing: "0.04em" }}>
              5.0 ★ Rated Experience
            </span>
            <span style={{ color: "rgba(197, 168, 112, 0.3)" }}>•</span>
            <span style={{ fontSize: "0.82rem", color: "var(--ivory-100)", letterSpacing: "0.04em" }}>
              Bridal Artistry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
