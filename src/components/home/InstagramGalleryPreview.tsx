"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Instagram, ArrowRight, Sparkles, Maximize2 } from "lucide-react";
import SalonImage from "@/components/ui/SalonImage";
import Lightbox from "@/components/ui/Lightbox";
import { GALLERY_ITEMS, GalleryItem } from "@/data/galleryData";
import { SALON_DATA } from "@/data/salonData";

export default function InstagramGalleryPreview() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Take the 6 featured home images
  const homeImages: GalleryItem[] = GALLERY_ITEMS.filter((item) => item.featuredOnHome).slice(0, 6);

  return (
    <section className="py-20 md:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
              <Instagram className="w-3.5 h-3.5 text-gold-400" />
              <span>Official Instagram Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-medium">
              Real Transformations
            </h2>
            <p className="text-sm sm:text-base text-ivory/70 font-light">
              A glimpse of the looks created at Karthikeya Lavish Looks. Real salon results
              from our authentic work.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SALON_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              {SALON_DATA.instagram.handle}
            </a>
          </div>
        </div>

        {/* Gallery Grid (6 balanced items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {homeImages.map((item, index) => (
            <div
              key={item.id}
              className="group flex flex-col space-y-3 cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            >
              <div className="relative overflow-hidden rounded-2xl border border-surface-border group-hover:border-gold-400/50 transition-all duration-300">
                <SalonImage
                  src={item.src}
                  alt={item.title}
                  category={item.category}
                  tag={item.tag}
                  aspectRatio="portrait"
                  className="rounded-2xl"
                />

                {/* Click to open badge overlay */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-ivory/80 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Caption under image */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <h4 className="font-serif text-lg text-ivory group-hover:text-gold-300 transition-colors font-medium">
                    {item.title}
                  </h4>
                  <p className="text-xs text-ivory/60 font-sans">{item.tag}</p>
                </div>
                <span className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-card border border-surface-border text-gold-400 font-medium">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Link */}
        <div className="mt-14 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold bg-surface-elevated hover:bg-surface-card text-ivory border border-gold-400/40 hover:border-gold-400 hover:text-gold-300 shadow-md transition-all duration-200"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4 text-gold-400" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        items={homeImages}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onSelectIndex={(index) => setSelectedImageIndex(index)}
      />
    </section>
  );
}
