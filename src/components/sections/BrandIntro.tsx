import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function BrandIntro() {
  return (
    <section
      className="section-spacing"
      style={{
        backgroundColor: "var(--teal-900)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(197, 168, 112, 0.15)",
        borderBottom: "1px solid rgba(197, 168, 112, 0.15)",
      }}
    >
      {/* Subtle Background Watermark / Typography */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(12rem, 25vw, 24rem)",
          fontWeight: 700,
          color: "rgba(197, 168, 112, 0.03)",
          lineHeight: 0.8,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        01
      </div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4.5rem 3.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Editorial Text Composition with Decorative "01" */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.2rem", marginBottom: "1.5rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "4rem",
                  fontWeight: 400,
                  color: "var(--gold-400)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                01
              </span>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className="editorial-tag" style={{ width: "fit-content" }}>
                  <Sparkles size={11} /> About The Atelier
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted-dark)", letterSpacing: "0.1em", marginTop: "4px" }}>
                  KASHIBUGGA • WARANGAL
                </span>
              </div>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
                fontWeight: 400,
                color: "var(--ivory-50)",
                lineHeight: 1.14,
                marginBottom: "1.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              Where Beauty <br />
              <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>
                Meets Detail.
              </span>
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                color: "var(--ivory-100)",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              Karthikeya Lavish Looks is a premier unisex salon located in Warangal, established to bring an elevated standard of personal care, contemporary styling, and celebratory beauty artistry to our community.
            </p>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                color: "var(--text-muted-dark)",
                lineHeight: 1.8,
                marginBottom: "2.2rem",
              }}
            >
              Whether preparing for the grandeur of your wedding day with couture bridal makeup and intricate henna, revitalizing tired skin through restorative facials, or experiencing precision scissor work and sharp men’s beard architecture — every service is executed with intention, hygiene, and genuine hospitality.
            </p>

            {/* Quick Pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1.2rem",
                marginBottom: "2.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--ivory-50)" }}>Dedicated Unisex Suites</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--ivory-50)" }}>Bridal & Occasion Specialists</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--ivory-50)" }}>Handcrafted Henna Art</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <CheckCircle2 size={18} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.9rem", color: "var(--ivory-50)" }}>Sanitized Professional Protocols</span>
              </div>
            </div>

            <Link
              href="/about"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold-300)",
                borderBottom: "1px solid var(--gold-400)",
                paddingBottom: "0.3rem",
                transition: "all 0.25s ease",
              }}
            >
              <span>Read Our Full Story</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Column: Editorial Layered Visual Presentation */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                height: "560px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--gold-border)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Image
                src="/images/brand-intro-styling.jpg"
                alt="Hair Styling Craftsmanship at Karthikeya Lavish Looks"
                fill
                sizes="(max-width: 768px) 90vw, 460px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(4, 18, 18, 0.8) 0%, transparent 50%)",
                }}
              />

              {/* Floating Editorial Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.8rem",
                  left: "1.8rem",
                  right: "1.8rem",
                  padding: "1.2rem",
                  borderRadius: "12px",
                  background: "rgba(9, 37, 37, 0.85)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--gold-border)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span
                    className="font-serif"
                    style={{ fontSize: "1.3rem", color: "var(--ivory-50)" }}
                  >
                    Unisex Elegance
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.15em",
                      color: "var(--gold-400)",
                      textTransform: "uppercase",
                    }}
                  >
                    Warangal
                  </span>
                </div>
                <p style={{ fontSize: "0.82rem", color: "var(--text-muted-dark)", marginTop: "0.3rem" }}>
                  Tailored transformations for men and women with refined artistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
