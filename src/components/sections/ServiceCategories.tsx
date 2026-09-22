"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Scissors, Sparkles, Brush, HandMetal, Crown, UserCheck, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServiceCategories() {
  const categories = [
    {
      id: "hair",
      name: "Hair",
      description: "Precision couture cuts, bespoke balayage, keratin smoothing, and transformative hair rituals.",
      icon: Scissors,
      tag: "Couture Styling",
      image: "/images/services/hair-rituals.jpg",
      imagePosition: "center 25%",
      highlights: ["Balayage & Colour", "Precision Cuts", "Keratin Smoothing", "Scalp Spa"],
    },
    {
      id: "skin-facials",
      name: "Skin & Facials",
      description: "Thoughtful clinical skincare, deep hydra infusions, and botanical rituals for radiant skin.",
      icon: Sparkles,
      tag: "Restorative Rituals",
      image: "/images/services/skin-facials.jpg",
      imagePosition: "center 30%",
      highlights: ["Hydra Facials", "Brightening Rituals", "Anti-Ageing"],
    },
    {
      id: "makeup",
      name: "Makeup",
      description: "Editorial celebration makeup, high-definition bridal looks, and bespoke occasion artistry.",
      icon: Brush,
      tag: "Celebration Artistry",
      image: "/images/services/makeup-rituals.jpg",
      imagePosition: "center 25%",
      highlights: ["HD Party Makeup", "Engagement Glam", "Airbrush Finish"],
    },
    {
      id: "nails",
      name: "Nails",
      description: "Couture gel extensions, chrome artistry, French manicures, and indulgent hand wellness.",
      icon: HandMetal,
      tag: "Detail & Care",
      image: "/images/services/nails-rituals.jpg",
      imagePosition: "center 40%",
      highlights: ["Gel Extensions", "Chrome & Nail Art", "Luxury Spa Pedicure"],
    },
    {
      id: "mehndi-bridal",
      name: "Mehndi & Bridal",
      description: "Royal bridal transformations, intricate Rajasthani & Arabic henna, and heirloom wedding artistry.",
      icon: Crown,
      tag: "Royal Heritage",
      image: "/images/services/mehndi-bridal.jpg",
      imagePosition: "center 30%",
      highlights: ["Bridal Henna", "Muhurtham Styling", "Saree Draping", "Pre-Bridal Packages"],
    },
    {
      id: "mens-grooming",
      name: "Men's Grooming",
      description: "Executive scissor haircuts, sculpted beard styling, scalp detox, and revitalizing face rituals.",
      icon: UserCheck,
      tag: "Gentlemen's Suite",
      image: "/images/services/mens-grooming.jpg",
      imagePosition: "center 25%",
      highlights: ["Precision Fade & Cut", "Beard Sculpting", "Scalp Therapy"],
    },
  ];

  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--teal-950)" }}>
      <div className="container">
        <SectionHeader
          tag="Curated Offerings"
          number="02"
          title="Bespoke Salon Disciplines"
          subtitle="Explore our comprehensive unisex beauty, grooming, and bridal services. Each category is guided by specialized artistry and premium formulations."
          align="center"
        />

        {/* Symmetrical 3-Column Luxury Grid */}
        <div className="services-grid">
          {categories.map((cat) => {
            const IconComponent = cat.icon;

            return (
              <div
                key={cat.id}
                className="service-card"
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--gold-border)",
                  backgroundColor: "var(--teal-900)",
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.35rem",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Prominent Service Image Container with Fixed 16:10 Aspect Ratio */}
                <div
                  className="service-card-image-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "16 / 10",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid rgba(197, 168, 112, 0.25)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={`${cat.name} at Karthikeya Lavish Looks`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: cat.imagePosition,
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="service-card-img"
                  />

                  {/* Soft bottom vignette for contrast */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(4, 18, 18, 0.15) 0%, rgba(4, 18, 18, 0.05) 50%, rgba(4, 18, 18, 0.55) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Floating Tag Badge (Top Right) */}
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      zIndex: 2,
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold-300)",
                      backgroundColor: "rgba(4, 18, 18, 0.85)",
                      backdropFilter: "blur(8px)",
                      padding: "0.28rem 0.65rem",
                      borderRadius: "var(--radius-full)",
                      border: "1px solid rgba(197, 168, 112, 0.3)",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {cat.tag}
                  </span>

                  {/* Floating Icon Badge (Bottom Left) */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      zIndex: 2,
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(4, 18, 18, 0.88)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid var(--gold-border-bright)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--gold-400)",
                      boxShadow: "0 4px 14px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <IconComponent size={19} />
                  </div>
                </div>

                {/* Card Body: Heading, Description, Highlights & Link */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "1.65rem",
                        fontWeight: 400,
                        color: "var(--ivory-50)",
                        marginBottom: "0.45rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {cat.name}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "var(--text-muted-dark)",
                        lineHeight: 1.55,
                        marginBottom: "1rem",
                      }}
                    >
                      {cat.description}
                    </p>

                    {/* Service Highlights Pills */}
                    {cat.highlights && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "0.4rem",
                          marginBottom: "1.25rem",
                        }}
                      >
                        {cat.highlights.map((h, i) => (
                          <span
                            key={i}
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "0.72rem",
                              color: "var(--ivory-200)",
                              backgroundColor: "rgba(13, 49, 49, 0.65)",
                              border: "1px solid rgba(197, 168, 112, 0.18)",
                              padding: "0.2rem 0.55rem",
                              borderRadius: "4px",
                            }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link
                    href={`/services#${cat.id}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold-300)",
                      transition: "gap 0.2s ease, color 0.2s ease",
                      marginTop: "0.5rem",
                    }}
                    className="view-services-link"
                  >
                    <span>View Services</span>
                    <ArrowRight size={14} className="arrow-icon" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.75rem;
        }

        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card:hover {
          border-color: var(--gold-border-bright);
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45), 0 0 25px rgba(197, 168, 112, 0.15);
        }

        :global(.service-card:hover .service-card-img) {
          transform: scale(1.08) !important;
        }

        .service-card:hover .view-services-link {
          color: var(--gold-200);
          gap: 0.75rem;
        }
      `}</style>
    </section>
  );
}
