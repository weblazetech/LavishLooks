import React from "react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { SALON_INFO } from "@/data/salonInfo";

export default function SocialProof() {
  const reviews = [
    {
      author: "Sneha R.",
      service: "Bridal Henna & Makeup",
      date: "Verified Client",
      quote:
        "The bridal makeup and mehndi were so neat and long-lasting. Every detail matched my saree perfectly without feeling heavy. Truly luxurious experience in Warangal.",
    },
    {
      author: "Vikram K.",
      service: "Men's Precision Grooming",
      date: "Verified Client",
      quote:
        "Finally, a proper upscale unisex salon with experienced stylists who understand hair fades and beard shaping. Clean stations and great hospitality.",
    },
    {
      author: "Pooja M.",
      service: "Hydra Facial & Hair Spa",
      date: "Verified Client",
      quote:
        "I booked a skin facial and hair spa before a family function. My skin was radiant and the atmosphere was calm and deeply relaxing.",
    },
  ];

  return (
    <section
      className="section-spacing"
      style={{
        backgroundColor: "var(--teal-900)",
        borderTop: "1px solid rgba(197, 168, 112, 0.15)",
        borderBottom: "1px solid rgba(197, 168, 112, 0.15)",
      }}
    >
      <div className="container">
        {/* Minimalist Top Badge */}
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto 3.5rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.1rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--gold-border)",
              background: "rgba(13, 49, 49, 0.6)",
              marginBottom: "1.2rem",
            }}
          >
            <div style={{ display: "flex", gap: "2px", color: "var(--gold-400)" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 700,
                color: "var(--gold-300)",
                letterSpacing: "0.05em",
              }}
            >
              {SALON_INFO.socialProof.rating}
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
              color: "var(--ivory-50)",
              lineHeight: 1.18,
              marginBottom: "0.6rem",
            }}
          >
            Esteemed Client Words
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--text-muted-dark)",
              letterSpacing: "0.06em",
            }}
          >
            Based on <span style={{ color: "var(--gold-400)", fontWeight: 600 }}>{SALON_INFO.socialProof.reviewCount}</span>
          </p>
        </div>

        {/* Minimal Editorial Review Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {reviews.map((rev, i) => (
            <div
              key={i}
              className="editorial-glass-card"
              style={{
                padding: "2.4rem 2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "rgba(7, 30, 30, 0.5)",
              }}
            >
              <div>
                <Quote
                  size={26}
                  style={{ color: "var(--gold-400)", opacity: 0.6, marginBottom: "1.2rem" }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.96rem",
                    color: "var(--ivory-100)",
                    lineHeight: 1.75,
                    fontStyle: "italic",
                    marginBottom: "1.5rem",
                  }}
                >
                  "{rev.quote}"
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "1.2rem",
                  borderTop: "1px solid rgba(197, 168, 112, 0.12)",
                }}
              >
                <div>
                  <h3
                    className="font-serif"
                    style={{ fontSize: "1.15rem", color: "var(--ivory-50)", fontWeight: 500 }}
                  >
                    {rev.author}
                  </h3>
                  <span style={{ fontSize: "0.78rem", color: "var(--gold-400)", letterSpacing: "0.05em" }}>
                    {rev.service}
                  </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                  <CheckCircle size={13} style={{ color: "var(--gold-400)" }} />
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted-dark)" }}>
                    {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
