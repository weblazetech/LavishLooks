"use client";

import React, { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Instagram, Sparkles } from "lucide-react";
import Image from "next/image";
import { GalleryItem } from "@/data/galleryData";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}: LightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onSelectIndex(nextIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onSelectIndex(nextIndex);
  }, [currentIndex, items.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 dark:bg-black/95 backdrop-blur-md p-4 sm:p-6 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar Controls */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-50 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-gold-400/20 text-gold-400 dark:text-gold-300 border border-gold-400/30">
            {currentItem.category}
          </span>
          <span className="text-xs text-ivory/60">
            {currentIndex + 1} of {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="w-11 h-11 rounded-full bg-surface-elevated/90 hover:bg-gold-400/20 border border-surface-border hover:border-gold-400/40 text-ivory flex items-center justify-center transition-all duration-200 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation - Left */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous Image"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-surface-elevated/90 hover:bg-gold-400/20 border border-surface-border hover:border-gold-400/40 text-ivory flex items-center justify-center transition-all duration-200 z-50 shadow-xl"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div
        className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-[60vh] sm:h-[68vh] rounded-2xl overflow-hidden bg-surface-card border border-gold-400/20 shadow-2xl flex items-center justify-center">
          {/* Real Image or Placeholder Card */}
          <div className="relative w-full h-full">
            <Image
              src={currentItem.src}
              alt={currentItem.title}
              fill
              className="object-contain"
              onError={(e) => {
                // When fallback is needed, hide img element and reveal placeholder below
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            {/* Fallback Display if image file is not present yet */}
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-surface-elevated to-surface">
              <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-ivory mb-2 font-medium">
                {currentItem.title}
              </h3>
              <p className="text-sm text-ivory/70 max-w-md mb-4">
                {currentItem.description || "Authentic work crafted at Karthikeya Lavish Looks."}
              </p>
              <div className="p-3 bg-surface-card/80 rounded-xl border border-surface-border text-xs font-mono text-gold-500 dark:text-gold-300 mb-4">
                Asset location: {currentItem.src}
              </div>
              <a
                href={currentItem.instagramPostUrl || "https://www.instagram.com/k_lavishlooks/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-500 dark:hover:text-gold-300 transition-colors"
              >
                <Instagram className="w-4 h-4" />
                View On Official Instagram @k_lavishlooks →
              </a>
            </div>
          </div>
        </div>

        {/* Caption bar */}
        <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 px-2 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-ivory font-medium">
              {currentItem.title}
            </h4>
            <p className="text-xs text-ivory/60">{currentItem.tag}</p>
          </div>
          <a
            href={currentItem.instagramPostUrl || "https://www.instagram.com/k_lavishlooks/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:text-gold-500 dark:hover:text-gold-300 font-medium py-1.5 px-3 rounded-full bg-gold-400/10 border border-gold-400/20 transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            Verified @k_lavishlooks Work
          </a>
        </div>
      </div>

      {/* Navigation - Right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next Image"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-surface-elevated/90 hover:bg-gold-400/20 border border-surface-border hover:border-gold-400/40 text-ivory flex items-center justify-center transition-all duration-200 z-50 shadow-xl"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}

