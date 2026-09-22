"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Sparkles, Brush, HandMetal, Crown, UserCheck, Calendar, ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import DottedPriceRow from "@/components/ui/DottedPriceRow";
import Button from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/data/services";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const iconMap: Record<string, React.ReactNode> = {
    Scissors: <Scissors size={18} />,
    Sparkles: <Sparkles size={18} />,
    Brush: <Brush size={18} />,
    HandMetal: <HandMetal size={18} />,
    Crown: <Crown size={18} />,
    UserCheck: <UserCheck size={18} />,
  };

  const displayedCategories =
    selectedCategory === "all"
      ? SERVICE_CATEGORIES
      : SERVICE_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <div style={{ backgroundColor: "var(--teal-950)", minHeight: "100vh", paddingTop: "calc(var(--header-height) + 2rem)" }}>
      {/* Page Hero Header */}
      <section
        style={{
          position: "relative",
          padding: "4rem 0 3rem",
          borderBottom: "1px solid rgba(197, 168, 112, 0.15)",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "800px" }}>
            <span className="editorial-tag" style={{ marginBottom: "1rem" }}>
              <Sparkles size={12} /> Service Menu & Rituals
            </span>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
                fontWeight: 400,
                color: "var(--ivory-50)",
                lineHeight: 1.12,
                marginBottom: "1.2rem",
              }}
            >
              Curated Services, <br />
              <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>
                Uncompromised Care.
              </span>
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "1.08rem",
                color: "var(--text-muted-dark)",
                lineHeight: 1.8,
              }}
            >
              Explore our unisex beauty menu across precision hair transformations, restorative skincare facials, occasion makeup, handcrafted henna, and gentlemen’s grooming. All treatments are scheduled by dedicated appointments.
            </p>
          </div>

          {/* Elegant Category Navigation Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "2.5rem",
            }}
          >
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid",
                borderColor: selectedCategory === "all" ? "var(--gold-400)" : "var(--gold-border)",
                background: selectedCategory === "all" ? "var(--gold-gradient)" : "rgba(13, 49, 49, 0.5)",
                color: selectedCategory === "all" ? "var(--teal-950)" : "var(--ivory-100)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.25s ease",
              }}
            >
              All Disciplines
            </button>

            {SERVICE_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.55rem 1.25rem",
                    borderRadius: "var(--radius-full)",
                    border: "1px solid",
                    borderColor: isActive ? "var(--gold-400)" : "var(--gold-border)",
                    background: isActive ? "var(--gold-gradient)" : "rgba(13, 49, 49, 0.5)",
                    color: isActive ? "var(--teal-950)" : "var(--ivory-100)",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Listing Section */}
      <section className="section-spacing">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {displayedCategories.map((cat) => (
              <div
                key={cat.id}
                id={cat.id}
                className="editorial-glass-card"
                style={{
                  padding: "3rem",
                  backgroundColor: "rgba(7, 30, 30, 0.6)",
                  position: "relative",
                  scrollMarginTop: "120px",
                }}
              >
                {/* Category Header Row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "2.5rem",
                    alignItems: "center",
                    paddingBottom: "2.5rem",
                    borderBottom: "1px solid rgba(197, 168, 112, 0.2)",
                    marginBottom: "2rem",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.8rem" }}>
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
                          color: "var(--gold-400)",
                        }}
                      >
                        {iconMap[cat.icon]}
                      </div>
                      <span className="editorial-tag">{cat.name}</span>
                    </div>

                    <h2
                      className="font-serif"
                      style={{
                        fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                        fontWeight: 400,
                        color: "var(--ivory-50)",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {cat.name} Rituals
                    </h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--text-muted-dark)" }}>
                      {cat.shortDesc}
                    </p>
                  </div>

                  {/* Category Atmospheric Image Thumbnail */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      maxWidth: "480px",
                      height: "260px",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid var(--gold-border)",
                      boxShadow: "0 12px 32px rgba(0, 0, 0, 0.4)",
                      justifySelf: "end",
                    }}
                  >
                    <Image
                      src={cat.heroImage}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      style={{ objectFit: "cover", objectPosition: cat.imagePosition || "center" }}
                    />
                  </div>
                </div>

                {/* Service Items with Dotted Gold Leaders */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {cat.items.map((item, idx) => (
                    <DottedPriceRow
                      key={idx}
                      name={item.name}
                      price={item.price}
                      description={item.description}
                      featured={item.featured}
                    />
                  ))}
                </div>

                {/* Dedicated Booking CTA on Every Category */}
                <div
                  style={{
                    marginTop: "2.8rem",
                    paddingTop: "2rem",
                    borderTop: "1px solid rgba(197, 168, 112, 0.15)",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1.2rem",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.95rem", color: "var(--ivory-50)", fontWeight: 500 }}>
                      Ready to reserve your {cat.name.toLowerCase()} session?
                    </p>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted-dark)" }}>
                      Consult with our senior artisans for personalized guidance.
                    </p>
                  </div>

                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    icon={<Calendar size={15} />}
                  >
                    Book This Category
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
