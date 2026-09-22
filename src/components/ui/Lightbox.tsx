"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryItem } from "@/data/gallery";

interface LightboxProps {
  isOpen: boolean;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentItem.title}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        backgroundColor: "rgba(4, 18, 18, 0.95)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        animation: "fadeIn 0.25s ease-out",
      }}
      onClick={onClose}
    >
      {/* Top Controls Bar */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "2rem",
          right: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1010,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}>
          <span className="editorial-tag">{currentItem.category}</span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              color: "var(--text-muted-dark)",
            }}
          >
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "44px",
            height: "44px",
            borderRadius: "var(--radius-full)",
            backgroundColor: "rgba(13, 49, 49, 0.6)",
            border: "1px solid var(--gold-border)",
            color: "var(--ivory-50)",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold-400)")}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--gold-border)")}
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation: Prev Button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image"
          style={{
            position: "absolute",
            left: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "var(--radius-full)",
            backgroundColor: "rgba(7, 30, 30, 0.8)",
            border: "1px solid var(--gold-border)",
            color: "var(--gold-300)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1010,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--gold-gradient)";
            e.currentTarget.style.color = "var(--teal-950)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(7, 30, 30, 0.8)";
            e.currentTarget.style.color = "var(--gold-300)";
          }}
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Main Content Area */}
      <div
        style={{
          maxWidth: "920px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1005,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "min(68vh, 600px)",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--gold-border)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
            backgroundColor: "var(--teal-900)",
          }}
        >
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            sizes="(max-width: 1024px) 95vw, 920px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            priority
          />
        </div>

        {/* Caption & Details */}
        <div
          style={{
            width: "100%",
            marginTop: "1.25rem",
            textAlign: "center",
            padding: "0 1rem",
          }}
        >
          <h3
            className="font-serif"
            style={{
              fontSize: "1.6rem",
              color: "var(--ivory-50)",
              marginBottom: "0.4rem",
              fontWeight: 400,
            }}
          >
            {currentItem.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              color: "var(--text-muted-dark)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {currentItem.caption}
          </p>
        </div>
      </div>

      {/* Navigation: Next Button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image"
          style={{
            position: "absolute",
            right: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "50px",
            height: "50px",
            borderRadius: "var(--radius-full)",
            backgroundColor: "rgba(7, 30, 30, 0.8)",
            border: "1px solid var(--gold-border)",
            color: "var(--gold-300)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1010,
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--gold-gradient)";
            e.currentTarget.style.color = "var(--teal-950)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(7, 30, 30, 0.8)";
            e.currentTarget.style.color = "var(--gold-300)";
          }}
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
