"use client";

import React, { useState, useMemo } from "react";
import { Instagram, Maximize2, Camera } from "lucide-react";
import SalonImage from "@/components/ui/SalonImage";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import { SALON_DATA } from "@/data/salonData";

const GALLERY_CATEGORIES = [
  "All",
  "Hair",
  "Makeup",
  "Bridal",
  "Mehndi",
  "Men's Grooming",
] as const;

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems: GalleryItem[] = useMemo(() => {
    if (activeCategory === "All") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Camera className="w-3.5 h-3.5 text-gold-400" />
            <span>Editorial Bento Gallery</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ivory font-medium tracking-tight">
            Our Work
          </h1>

          <p className="text-base sm:text-lg text-ivory/70 font-light leading-relaxed">
            Real transformations and beauty work crafted by the stylists and artists at
            Karthikeya Lavish Looks.
          </p>

          <div className="pt-2">
            <a
              href={SALON_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              Follow {SALON_DATA.instagram.handle} on Instagram
            </a>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isSelected
                    ? "bg-gradient-to-r from-gold-400 to-gold-500 text-background shadow-md shadow-gold-400/20 font-bold"
                    : "bg-surface-card hover:bg-surface-elevated text-ivory/80 hover:text-gold-300 border border-surface-border"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Dynamic Bento Box Layout */}
        <div
          className={
            activeCategory === "All"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
              : filteredItems.length === 2
              ? "max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          }
        >
          {filteredItems.map((item, index) => {
            const isWide = activeCategory === "All" && item.bentoSpan === "wide";

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`group flex flex-col justify-between p-4 rounded-3xl bg-surface-card border border-surface-border hover:border-gold-400/50 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-gold-950/20 ${
                  isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
              >
                <div className="relative overflow-hidden rounded-2xl border border-surface-border/60 group-hover:border-gold-400/40 transition-all duration-300 h-full">
                  <SalonImage
                    src={item.src}
                    alt={item.title}
                    category={item.category}
                    tag={item.tag}
                    aspectRatio={isWide ? "landscape" : "portrait"}
                    objectPosition={item.objectPosition || "top"}
                    className="rounded-2xl h-full"
                  />

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all shadow-lg group-hover:scale-110">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Caption */}
                <div className="flex items-center justify-between px-2 pt-4 pb-1">
                  <div>
                    <h3 className="font-serif text-xl text-ivory group-hover:text-gold-300 transition-colors font-medium">
                      {item.title}
                    </h3>
                    <p className="text-xs text-ivory/60 font-sans">{item.tag}</p>
                  </div>
                  <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-elevated border border-surface-border text-gold-400 font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={filteredItems}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onSelectIndex={(index) => setSelectedImageIndex(index)}
      />
    </div>
  );
}
