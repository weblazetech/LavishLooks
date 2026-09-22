"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
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
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Touch swipe support for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // Focus transfer on open, inert background, and focus restoration on close
  useEffect(() => {
    if (isOpen) {
      // Store trigger element if not already captured
      if (!triggerElementRef.current && typeof document !== "undefined") {
        triggerElementRef.current = document.activeElement as HTMLElement | null;
      }

      // Mark background elements inert and aria-hidden
      const backgroundElements = document.querySelectorAll("header, main, footer");
      backgroundElements.forEach((el) => {
        el.setAttribute("inert", "");
        el.setAttribute("aria-hidden", "true");
      });

      // Move focus into the dialog (Close button)
      const focusTimer = setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = originalOverflow;
      };
    } else if (!isOpen && triggerElementRef.current) {
      // Un-inert background elements
      const backgroundElements = document.querySelectorAll("header, main, footer");
      backgroundElements.forEach((el) => {
        el.removeAttribute("inert");
        el.removeAttribute("aria-hidden");
      });

      // Restore focus to opening gallery item
      const restoreEl = triggerElementRef.current;
      triggerElementRef.current = null;
      setTimeout(() => {
        restoreEl?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Cleanup inert and scroll on unmount
  useEffect(() => {
    return () => {
      const backgroundElements = document.querySelectorAll("header, main, footer");
      backgroundElements.forEach((el) => {
        el.removeAttribute("inert");
        el.removeAttribute("aria-hidden");
      });
      document.body.style.overflow = "";
    };
  }, []);

  // Keyboard navigation & Focus Trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrev();
        return;
      }

      // Focus trap within dialog
      if (e.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Backward tab: from first wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Forward tab: from last wrap to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  // Touch swipe handlers
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      onNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      onPrev();
    }
  };

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Viewing ${currentItem.title}`}
      className="lightbox-overlay"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Controls Bar */}
      <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-meta">
          <span className="editorial-tag">{currentItem.category}</span>
          <span className="lightbox-counter">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox (Esc)"
          className="lightbox-close-btn"
        >
          <X size={20} />
        </button>
      </div>

      {/* Desktop Prev Button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous Image (Left Arrow)"
          className="lightbox-nav-btn lightbox-prev-btn"
        >
          <ChevronLeft size={26} />
        </button>
      )}

      {/* Main Content Area */}
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-wrapper">
          <Image
            src={currentItem.imageUrl}
            alt={currentItem.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 920px"
            className="lightbox-image"
            priority
          />
        </div>

        {/* Caption & Details */}
        <div className="lightbox-caption-area">
          <h3 className="font-serif lightbox-title">{currentItem.title}</h3>
          <p className="lightbox-caption-text">{currentItem.caption}</p>
        </div>

        {/* Mobile Action Controls Bar */}
        {items.length > 1 && (
          <div className="lightbox-mobile-controls">
            <button
              type="button"
              onClick={onPrev}
              aria-label="Previous Image"
              className="lightbox-mobile-nav-btn"
            >
              <ChevronLeft size={18} />
              <span>Previous</span>
            </button>

            <span className="lightbox-mobile-counter">
              {currentIndex + 1} of {items.length}
            </span>

            <button
              type="button"
              onClick={onNext}
              aria-label="Next Image"
              className="lightbox-mobile-nav-btn"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Desktop Next Button */}
      {items.length > 1 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next Image (Right Arrow)"
          className="lightbox-nav-btn lightbox-next-btn"
        >
          <ChevronRight size={26} />
        </button>
      )}

      <style jsx>{`
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          background-color: rgba(4, 18, 18, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          padding: 1.5rem;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          animation: fadeIn 0.25s ease-out;
        }

        .lightbox-top-bar {
          position: fixed;
          top: 1.25rem;
          left: 1.5rem;
          right: 1.5rem;
          display: flex;
          align-items: center;
          justifyContent: space-between;
          z-index: 1020;
          pointer-events: auto;
        }

        .lightbox-meta {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .lightbox-counter {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          color: var(--text-muted-dark);
          letter-spacing: 0.05em;
        }

        .lightbox-close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: var(--radius-full);
          background-color: rgba(13, 49, 49, 0.7);
          border: 1px solid var(--gold-border);
          color: var(--ivory-50);
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .lightbox-close-btn:focus-visible {
          border-color: var(--gold-300);
          box-shadow: 0 0 0 2px rgba(197, 168, 112, 0.4);
        }

        .lightbox-close-btn:hover {
          border-color: var(--gold-400);
          background-color: rgba(197, 168, 112, 0.2);
          color: var(--gold-200);
        }

        .lightbox-nav-btn {
          display: none;
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 52px;
          height: 52px;
          border-radius: var(--radius-full);
          background-color: rgba(7, 30, 30, 0.85);
          border: 1px solid var(--gold-border);
          color: var(--gold-300);
          align-items: center;
          justify-content: center;
          z-index: 1010;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .lightbox-nav-btn:focus-visible {
          border-color: var(--gold-300);
          box-shadow: 0 0 0 2px rgba(197, 168, 112, 0.4);
        }

        .lightbox-nav-btn:hover {
          background: var(--gold-gradient);
          color: var(--teal-950);
          border-color: var(--gold-300);
        }

        .lightbox-prev-btn {
          left: 1.75rem;
        }

        .lightbox-next-btn {
          right: 1.75rem;
        }

        .lightbox-content {
          max-width: 920px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justifyContent: center;
          z-index: 1005;
          margin-top: auto;
          margin-bottom: auto;
          padding: 3.5rem 0 1.5rem;
        }

        .lightbox-image-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 3;
          max-height: min(64vh, 600px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--gold-border);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          background-color: var(--teal-900);
        }

        :global(.lightbox-image) {
          object-fit: contain !important;
          object-position: center;
        }

        .lightbox-caption-area {
          width: 100%;
          margin-top: 1.25rem;
          text-align: center;
          padding: 0 1rem;
        }

        .lightbox-title {
          font-size: 1.5rem;
          color: var(--ivory-50);
          margin-bottom: 0.35rem;
          font-weight: 400;
        }

        .lightbox-caption-text {
          font-family: var(--font-sans);
          font-size: 0.92rem;
          color: var(--text-muted-dark);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .lightbox-mobile-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 380px;
          margin-top: 1.25rem;
          padding: 0.4rem 0.6rem;
          background: rgba(7, 30, 30, 0.7);
          border: 1px solid var(--gold-border);
          border-radius: var(--radius-full);
          backdrop-filter: blur(10px);
        }

        .lightbox-mobile-nav-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 0.9rem;
          border-radius: var(--radius-full);
          background: rgba(13, 49, 49, 0.6);
          border: 1px solid var(--gold-border);
          color: var(--gold-300);
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          outline: none;
        }

        .lightbox-mobile-nav-btn:active {
          background: var(--gold-gradient);
          color: var(--teal-950);
        }

        .lightbox-mobile-counter {
          font-family: var(--font-sans);
          font-size: 0.78rem;
          color: var(--ivory-100);
          font-weight: 500;
        }

        @media (min-width: 769px) {
          .lightbox-nav-btn {
            display: flex;
          }
          .lightbox-mobile-controls {
            display: none;
          }
          .lightbox-content {
            padding: 4rem 0 2rem;
          }
          .lightbox-title {
            font-size: 1.7rem;
          }
        }

        @media (max-width: 768px) {
          .lightbox-overlay {
            padding: 0.75rem;
            justify-content: flex-start;
          }
          .lightbox-top-bar {
            position: sticky;
            top: 0;
            left: 0;
            right: 0;
            padding: 0.5rem 0.25rem 0.75rem;
            background: rgba(4, 18, 18, 0.95);
            backdrop-filter: blur(12px);
          }
          .lightbox-content {
            margin-top: 0.5rem;
            padding: 0;
          }
          .lightbox-image-wrapper {
            max-height: 48vh;
            border-radius: 12px;
          }
          .lightbox-title {
            font-size: 1.25rem;
          }
          .lightbox-caption-text {
            font-size: 0.84rem;
          }
        }
      `}</style>
    </div>
  );
}
