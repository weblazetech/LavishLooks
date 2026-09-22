import React from "react";
import { Calendar, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export default function BookingCTA() {
  return (
    <section
      style={{
        position: "relative",
        padding: "6.5rem 0",
        backgroundColor: "var(--teal-900)",
        borderTop: "1px solid rgba(197, 168, 112, 0.25)",
        overflow: "hidden",
      }}
    >
      {/* Decorative Gradient Background Radiance */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "400px",
          background: "radial-gradient(circle, rgba(197, 168, 112, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="editorial-tag">
              <Sparkles size={12} /> Bespoke Unisex Reservations
            </span>
          </div>

          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 400,
              lineHeight: 1.15,
              color: "var(--ivory-50)",
              letterSpacing: "-0.01em",
              marginBottom: "1.2rem",
            }}
          >
            Your Next Look <span className="gold-gradient-text">Starts Here.</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
              color: "var(--ivory-100)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
              maxWidth: "580px",
            }}
          >
            Reserve your appointment at {SALON_INFO.name}.
          </p>

          <Button
            href="/contact"
            variant="primary"
            size="lg"
            icon={<Calendar size={18} />}
          >
            Book an Appointment
          </Button>

          <p
            style={{
              marginTop: "2rem",
              fontSize: "0.82rem",
              color: "var(--text-muted-dark)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Walk-ins subject to availability • Dedicated sessions recommended
          </p>
        </div>
      </div>
    </section>
  );
}
