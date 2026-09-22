"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import SectionHeader from "@/components/ui/SectionHeader";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import { SALON_INFO } from "@/data/salonInfo";

export default function GalleryPreview() {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  // Take 6-8 featured images representing all 4 required categories
  const previewItems: GalleryItem[] = GALLERY_ITEMS.filter((item) => item.featuredOnHome).slice(0, 8);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev ?? 0) + 1) % previewItems.length);
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev ?? 0) - 1 + previewItems.length) % previewItems.length);
  };

  return (
    <section className="section-spacing" style={{ backgroundColor: "var(--teal-900)" }}>
      <div className="container">
        {/* Header with Instagram mention */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3rem",
            gap: "1.5rem",
          }}
        >
          <SectionHeader
            tag="Visual Portfolio"
            number="04"
            title="Real Salon Transformations"
            subtitle="Authentic artistry captured at Karthikeya Lavish Looks. Featuring hair transformations, fine bridal henna, high-definition makeup, and sharp men’s grooming."
            maxWidth="640px"
          />

          <a
            href={SALON_INFO.social.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.65rem 1.25rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--gold-border)",
              background: "rgba(13, 49, 49, 0.6)",
              color: "var(--gold-300)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "3rem",
            }}
          >
            <InstagramIcon size={15} />
            <span>{SALON_INFO.social.instagramHandle}</span>
          </a>
        </div>

        {/* 6-8 Transformations Grid with Locked 4:3 Aspect Ratio and Underneath Captions */}
        <div className="gallery-preview-grid">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image Container with 16px radius and locked 4:3 photographic aspect ratio */}
              <div
                onClick={() => handleOpenLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleOpenLightbox(index);
                }}
                aria-label={`Open photo of ${item.title}`}
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--gold-border)",
                  cursor: "pointer",
                  backgroundColor: "var(--teal-950)",
                  transition: "all 0.35s ease",
                }}
                className="gallery-preview-card"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="preview-img"
                />

                {/* Ambient Subtle Gradient */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(4, 18, 18, 0.6) 0%, transparent 60%)",
                  }}
                />

                {/* Category Pill */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(4, 18, 18, 0.75)",
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

                {/* Hover Quick Zoom Indicator */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "rgba(7, 30, 30, 0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.25s ease",
                  }}
                  className="hover-overlay"
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "var(--radius-full)",
                      background: "var(--gold-gradient)",
                      color: "var(--teal-950)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                    }}
                  >
                    <Eye size={20} />
                  </div>
                </div>
              </div>

              {/* Caption Underneath Each Image */}
              <div style={{ marginTop: "0.85rem", padding: "0 0.25rem" }}>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--ivory-50)",
                    fontWeight: 400,
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted-dark)",
                    lineHeight: 1.5,
                  }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link Button */}
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <Link
            href="/gallery"
            className="gallery-view-more-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              padding: "0.85rem 2.2rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--gold-400)",
              background: "transparent",
              color: "var(--gold-300)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.88rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}
          >
            <span>View Full Gallery</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .gallery-preview-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.2rem 1.8rem;
        }

        @media (min-width: 640px) {
          .gallery-preview-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-preview-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gallery-preview-card:hover {
          border-color: var(--gold-border-bright);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        }

        .gallery-preview-card:hover .preview-img {
          transform: scale(1.06);
        }

        .gallery-preview-card:hover .hover-overlay {
          opacity: 1;
        }

        .gallery-view-more-btn:hover {
          background: var(--gold-gradient);
          color: var(--teal-950);
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(197, 168, 112, 0.25);
        }
      `}</style>  {/* Lightbox Modal */}
      <Lightbox
        isOpen={activeLightboxIndex !== null}
        items={previewItems}
        currentIndex={activeLightboxIndex ?? 0}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
