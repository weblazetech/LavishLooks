"use client";

import React, { useState } from "react";
import { Heart, Instagram, Maximize2 } from "lucide-react";
import SalonImage from "@/components/ui/SalonImage";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import { SALON_DATA } from "@/data/salonData";

export default function BridalGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filter bridal and mehndi items (4 items)
  const bridalItems: GalleryItem[] = GALLERY_ITEMS.filter(
    (item) => item.category === "Bridal" || item.category === "Mehndi"
  );

  return (
    <section className="py-20 md:py-24 bg-background relative border-b border-black/[0.06] dark:border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400/30" />
              <span>Real Bridal Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium">
              Real Bridal &amp; Mehndi Looks
            </h2>
            <p className="text-sm sm:text-base text-ivory/70 font-light">
              Actual bridal transformations and intricate henna artistry crafted for our brides.
            </p>
          </div>

          <a
            href={SALON_DATA.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-gold-400 hover:text-gold-300 transition-colors"
          >
            <Instagram className="w-4 h-4" />
            More on Instagram @k_lavishlooks
          </a>
        </div>

        {/* True Bento Box Grid (Row 1: 2+1 = 3 cols, Row 2: 1+2 = 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {bridalItems.map((item, idx) => {
            // Bento layout: idx 0 and idx 3 are wide (2 cols), idx 1 and idx 2 are normal (1 col)
            const isWide = idx === 0 || idx === 3;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
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

                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex items-center justify-between px-2 pt-4 pb-1">
                  <div>
                    <h4 className="font-serif text-xl text-ivory group-hover:text-gold-300 transition-colors font-medium">
                      {item.title}
                    </h4>
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

      <Lightbox
        items={bridalItems}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onSelectIndex={(index) => setSelectedImageIndex(index)}
      />
    </section>
  );
}
