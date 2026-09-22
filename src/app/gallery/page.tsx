"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Eye, Sparkles, Filter } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionHeader from "@/components/ui/SectionHeader";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { SALON_INFO } from "@/data/salonInfo";

export default function GalleryPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filterCategories = ["All", "Hair", "Makeup", "Mehndi", "Men's Grooming"];

  const filteredItems =
    selectedFilter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev ?? 0) + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev ?? 0) - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div style={{ backgroundColor: "var(--teal-950)", minHeight: "100vh", paddingTop: "calc(var(--header-height) + 2rem)" }}>
      {/* Gallery Hero Header */}
      <section
        style={{
          position: "relative",
          padding: "4rem 0 3rem",
          borderBottom: "1px solid rgba(197, 168, 112, 0.15)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <div style={{ maxWidth: "720px" }}>
              <span className="editorial-tag" style={{ marginBottom: "1rem" }}>
                <Sparkles size={12} /> Transformations & Portfolio
              </span>
              <h1
                className="font-serif"
                style={{
                  fontSize: "clamp(2.8rem, 5.2vw, 4.4rem)",
                  fontWeight: 400,
                  color: "var(--ivory-50)",
                  lineHeight: 1.12,
                  marginBottom: "1rem",
                }}
              >
                The Visual <span className="gold-gradient-text" style={{ fontStyle: "italic" }}>Chronicles</span>
              </h1>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--text-muted-dark)", lineHeight: 1.7 }}>
                Explore authentic salon work completed at {SALON_INFO.name}. An asymmetric editorial showcase spanning couture hair colour, royal bridal mehndi, occasion makeup, and men’s executive grooming.
              </p>
            </div>

            <a
              href={SALON_INFO.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.75rem 1.4rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--gold-border)",
                background: "rgba(13, 49, 49, 0.6)",
                color: "var(--gold-300)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <InstagramIcon size={16} />
              <span>Follow {SALON_INFO.social.instagramHandle}</span>
            </a>
          </div>

          {/* Smooth Category Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              marginTop: "2.5rem",
            }}
          >
            {filterCategories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  style={{
                    padding: "0.55rem 1.3rem",
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
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Asymmetric Editorial Bento / Masonry Grid */}
      <section className="section-spacing">
        <div className="container">
          <div className="gallery-portfolio-grid">
            {filteredItems.map((item, index) => {
              return (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image Card Container with locked 4:3 aspect ratio, 16px radius, no distortion */}
                  <div
                    onClick={() => handleOpenLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") handleOpenLightbox(index);
                    }}
                    aria-label={`View photo of ${item.title}`}
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "4 / 3",
                      borderRadius: "16px",
                      overflow: "hidden",
                      border: "1px solid var(--gold-border)",
                      backgroundColor: "var(--teal-900)",
                      cursor: "pointer",
                      transition: "all 0.35s ease",
                    }}
                    className="gallery-card-item"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                      className="gallery-item-image"
                    />

                    {/* Gradient Overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to top, rgba(4, 18, 18, 0.75) 0%, transparent 60%)",
                      }}
                    />

                    {/* Category Label */}
                    <div
                      style={{
                        position: "absolute",
                        top: "1.2rem",
                        left: "1.2rem",
                        padding: "0.28rem 0.75rem",
                        borderRadius: "var(--radius-full)",
                        background: "rgba(4, 18, 18, 0.8)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid var(--gold-border)",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-sans)",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        color: "var(--gold-300)",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.category}
                    </div>

                    {/* Floating Zoom Action Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.2rem",
                        right: "1.2rem",
                        width: "42px",
                        height: "42px",
                        borderRadius: "var(--radius-full)",
                        background: "var(--gold-gradient)",
                        color: "var(--teal-950)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                        opacity: 0,
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                      }}
                      className="hover-badge"
                    >
                      <Eye size={20} />
                    </div>
                  </div>

                  {/* Caption & Metadata Underneath */}
                  <div style={{ marginTop: "1rem", padding: "0 0.2rem" }}>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "1.35rem",
                        color: "var(--ivory-50)",
                        fontWeight: 400,
                        marginBottom: "0.35rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.88rem",
                        color: "var(--text-muted-dark)",
                        lineHeight: 1.55,
                      }}
                    >
                      {item.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        isOpen={activeLightboxIndex !== null}
        items={filteredItems}
        currentIndex={activeLightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <style jsx>{`
        .gallery-portfolio-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem 2rem;
        }

        @media (min-width: 640px) {
          .gallery-portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-portfolio-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gallery-card-item:hover {
          border-color: var(--gold-border-bright);
          transform: translateY(-5px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
        }

        .gallery-card-item:hover .gallery-item-image {
          transform: scale(1.05);
        }

        .gallery-card-item:hover .hover-badge {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
