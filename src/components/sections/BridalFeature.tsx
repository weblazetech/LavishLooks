import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Crown, Sparkles, Calendar, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function BridalFeature() {
  return (
    <section
      className="bridal-sheen-container"
      style={{
        position: "relative",
        padding: "7.5rem 0",
        backgroundColor: "var(--teal-900)",
        borderTop: "1px solid rgba(197, 168, 112, 0.28)",
        borderBottom: "1px solid rgba(197, 168, 112, 0.28)",
        overflow: "hidden",
      }}
    >
      {/* Subtle Animated Gold Sheen moving slowly across the section */}
      <div className="bridal-sheen-overlay" />

      {/* Background Ambience Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45%",
          height: "100%",
          opacity: 0.18,
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/services/mehndi-bridal.jpg"
          alt="Bridal Henna Artistry Ambience"
          fill
          sizes="50vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, var(--teal-900) 0%, transparent 50%, var(--teal-900) 100%)",
          }}
        />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Editorial Bridal Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.45rem 1.2rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--gold-400)",
              background: "rgba(18, 64, 64, 0.7)",
              backdropFilter: "blur(12px)",
              color: "var(--gold-200)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.8rem",
            }}
          >
            <Crown size={14} style={{ color: "var(--gold-400)" }} />
            <span>By Appointment Only</span>
          </div>

          {/* Main Headline */}
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.12,
              color: "var(--ivory-50)",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
              textWrap: "balance",
            }}
          >
            Bridal & <span className="gold-gradient-text">Occasion Glamour</span>
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.05rem, 2vw, 1.28rem)",
              color: "var(--ivory-100)",
              lineHeight: 1.75,
              maxWidth: "680px",
              marginBottom: "2.8rem",
              textWrap: "balance",
            }}
          >
            Makeup, hair and henna crafted for your big day — booked by appointment only.
          </p>

          {/* Action CTAs */}
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
              href="/bridal"
              variant="outline"
              size="lg"
              icon={<Sparkles size={16} />}
            >
              Explore Bridal Atelier
            </Button>
          </div>

          {/* Feature Highlights Grid */}
          <div
            style={{
              marginTop: "4rem",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              width: "100%",
              paddingTop: "3rem",
              borderTop: "1px solid rgba(197, 168, 112, 0.2)",
            }}
          >
            <div>
              <span className="font-serif" style={{ fontSize: "1.5rem", color: "var(--gold-300)", display: "block" }}>
                Pre-Bridal Trials
              </span>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted-dark)", marginTop: "0.3rem" }}>
                Personalized consultations for skin harmony & makeup tone matching.
              </p>
            </div>
            <div>
              <span className="font-serif" style={{ fontSize: "1.5rem", color: "var(--gold-300)", display: "block" }}>
                Royal Henna Art
              </span>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted-dark)", marginTop: "0.3rem" }}>
                Intricate traditional and bespoke contemporary bridal motifs.
              </p>
            </div>
            <div>
              <span className="font-serif" style={{ fontSize: "1.5rem", color: "var(--gold-300)", display: "block" }}>
                Groom Coordination
              </span>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted-dark)", marginTop: "0.3rem" }}>
                Refined hair, skin polish, and beard sculpting for the groom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
