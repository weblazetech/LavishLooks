import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Users, Crown, MapPin, Heart, ShieldCheck, Calendar, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { SALON_INFO } from "@/data/salonInfo";

export const metadata = {
  title: "About The Atelier",
  description: "Learn about Karthikeya Lavish Looks: Warangal's premier unisex salon dedicated to detail-led hair artistry, skincare rituals, bridal glamour, and men's grooming.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "var(--teal-950)", minHeight: "100vh", paddingTop: "calc(var(--header-height) + 2rem)" }}>
      {/* Editorial Hero */}
      <section
        style={{
          position: "relative",
          padding: "5rem 0 4rem",
          borderBottom: "1px solid rgba(197, 168, 112, 0.15)",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "860px" }}>
            <span className="editorial-tag" style={{ marginBottom: "1.2rem" }}>
              <Sparkles size={12} /> The Salon Story
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(3rem, 6.5vw, 5.2rem)",
                fontWeight: 400,
                color: "var(--ivory-50)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                marginBottom: "1.8rem",
              }}
            >
              Beauty With <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>Character.</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "clamp(1.1rem, 2.2vw, 1.35rem)",
                color: "var(--ivory-100)",
                lineHeight: 1.8,
                fontWeight: 300,
                marginBottom: "2rem",
              }}
            >
              Karthikeya Lavish Looks is a premier unisex salon in Warangal offering bespoke hair transformations, skin rituals, bridal artistry, delicate nail care, handcrafted mehndi, and gentlemen’s precision grooming.
            </p>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button href="/contact" variant="primary" size="md" icon={<Calendar size={16} />}>
                Book an Appointment
              </Button>
              <Button href="/services" variant="outline" size="md">
                Explore Services Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story & Philosophy */}
      <section className="section-spacing">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4.5rem",
              alignItems: "center",
            }}
          >
            <div>
              <span className="editorial-tag" style={{ marginBottom: "1.2rem" }}>
                Origins & Ethos
              </span>
              <h2
                className="font-serif"
                style={{
                  fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                  fontWeight: 400,
                  color: "var(--ivory-50)",
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Crafting Confidence Through Detail
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.02rem",
                  color: "var(--ivory-100)",
                  lineHeight: 1.8,
                  marginBottom: "1.2rem",
                }}
              >
                Founded in Kashibugga, Warangal, Karthikeya Lavish Looks was created with a clear intention: to deliver an authentic salon experience where clients never feel rushed, where styling is personalized rather than formulaic, and where both men and women enjoy dedicated luxury suites.
              </p>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--text-muted-dark)",
                  lineHeight: 1.8,
                  marginBottom: "1.5rem",
                }}
              >
                We believe genuine beauty and grooming are not about superficial conformity. They are about enhancing individual bone structure, skin health, and natural personal grace through high-grade botanical formulations and meticulous technique.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                height: "480px",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid var(--gold-border)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/images/about/salon-interior.jpg"
                alt="Salon Interior Atmosphere at Karthikeya Lavish Looks"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(4, 18, 18, 0.35) 0%, transparent 60%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Unisex & Bridal Pillars */}
      <section className="section-spacing" style={{ backgroundColor: "var(--teal-900)" }}>
        <div className="container">
          <SectionHeader
            tag="Core Disciplines"
            title="The Salon Tenets"
            subtitle="How we maintain our standards across everyday personal care and milestone wedding artistry."
            align="center"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2.5rem",
            }}
          >
            <div className="editorial-glass-card" style={{ padding: "2.5rem 2rem" }}>
              <Users size={28} style={{ color: "var(--gold-400)", marginBottom: "1.2rem" }} />
              <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ivory-50)", marginBottom: "0.8rem" }}>
                Unisex Hospitality
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)", lineHeight: 1.7 }}>
                Thoughtfully appointed sections accommodating women's private beauty rituals alongside an executive barbershop and men’s grooming suite.
              </p>
            </div>

            <div className="editorial-glass-card" style={{ padding: "2.5rem 2rem" }}>
              <Crown size={28} style={{ color: "var(--gold-400)", marginBottom: "1.2rem" }} />
              <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ivory-50)", marginBottom: "0.8rem" }}>
                Bridal Heritage Artistry
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)", lineHeight: 1.7 }}>
                Specialized in Telugu wedding traditions, Muhurtham flower hair adornments, high-definition camera-proof makeup, and handcrafted organic henna.
              </p>
            </div>

            <div className="editorial-glass-card" style={{ padding: "2.5rem 2rem" }}>
              <ShieldCheck size={28} style={{ color: "var(--gold-400)", marginBottom: "1.2rem" }} />
              <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--ivory-50)", marginBottom: "0.8rem" }}>
                Sanitized Protocols
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted-dark)", lineHeight: 1.7 }}>
                Hospital-grade tool sterilization, single-use disposables for facials, and premium salon-grade branded products imported for peak performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Appointment CTA */}
      <section className="section-spacing">
        <div className="container">
          <div
            className="editorial-glass-card"
            style={{
              padding: "clamp(2.5rem, 6vw, 4.5rem)",
              backgroundColor: "rgba(7, 30, 30, 0.6)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
              <MapPin size={16} style={{ color: "var(--gold-400)" }} />
              <span style={{ fontSize: "0.85rem", color: "var(--gold-300)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Warangal • Telangana
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                color: "var(--ivory-50)",
                fontWeight: 400,
                marginBottom: "1.2rem",
                letterSpacing: "-0.01em",
              }}
            >
              Experience The Atelier Firsthand
            </h2>

            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.05rem",
                color: "var(--text-muted-dark)",
                maxWidth: "600px",
                lineHeight: 1.75,
                marginBottom: "2.5rem",
              }}
            >
              We look forward to welcoming you at Kashibugga Society Colony. Reserve your session today for personalized attention.
            </p>

            <Button href="/contact" variant="primary" size="lg" icon={<Calendar size={18} />}>
              Reserve Your Appointment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
