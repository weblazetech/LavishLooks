import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { Sparkles, ShieldCheck, HeartHandshake, Users } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      num: "01",
      title: "Detail-Led Artistry",
      desc: "Every cut, colour formulation, facial stroke, and henna curve is approached with obsessive precision. We do not rush appointments; your personal transformation receives uncompromised attention.",
      icon: Sparkles,
      highlight: "Custom formulations & deliberate pacing",
    },
    {
      num: "02",
      title: "Unisex Expertise",
      desc: "Equally dedicated suites for gentlemen and ladies. From men's executive beard sculpting and scissor fades to women's balayage, skincare rituals, and delicate nail architecture.",
      icon: Users,
      highlight: "Equally specialized suites for men & women",
    },
    {
      num: "03",
      title: "Occasion & Bridal Specialists",
      desc: "Celebration styling is in our DNA. We curate cohesive wedding looks incorporating traditional muhurtham makeup, bridal hair sculpting, bespoke henna motifs, and groom grooming packages.",
      icon: HeartHandshake,
      highlight: "Comprehensive bridal & groom coordination",
    },
    {
      num: "04",
      title: "Appointment-Focused Service",
      desc: "We prioritize booked sessions to maintain pristine station cleanliness, avoid chaotic waiting crowds, and provide a serene, hospitable atmosphere from the moment you step in.",
      icon: ShieldCheck,
      highlight: "Zero chaos, guaranteed dedicated stylist time",
    },
  ];

  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--teal-950)" }}>
      <div className="container">
        <SectionHeader
          tag="Our Philosophy"
          number="05"
          title="Why Karthikeya Lavish Looks"
          subtitle="A refined unisex salon crafted around personal attention, uncompromising hygiene, and seasoned beauty artisans in Warangal."
          align="center"
        />

        {/* 4 Clean Editorial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
          }}
        >
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.num}
                className="editorial-glass-card"
                style={{
                  padding: "2.4rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  minHeight: "340px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "2.4rem",
                        color: "var(--gold-400)",
                        lineHeight: 1,
                      }}
                    >
                      {point.num}
                    </span>

                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "10px",
                        backgroundColor: "rgba(13, 49, 49, 0.8)",
                        border: "1px solid var(--gold-border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--gold-300)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 400,
                      color: "var(--ivory-50)",
                      marginBottom: "1rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {point.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.92rem",
                      color: "var(--text-muted-dark)",
                      lineHeight: 1.7,
                    }}
                  >
                    {point.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid rgba(197, 168, 112, 0.15)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: "var(--gold-400)",
                      textTransform: "uppercase",
                    }}
                  >
                    ✦ {point.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
