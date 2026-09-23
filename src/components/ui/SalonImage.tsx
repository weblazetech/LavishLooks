"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Instagram, Sparkles } from "lucide-react";

interface SalonImageProps {
  src: string;
  alt: string;
  category?: string;
  tag?: string;
  priority?: boolean;
  className?: string;
  aspectRatio?: "portrait" | "square" | "landscape" | "auto";
  objectPosition?: string;
  onClick?: () => void;
  sizes?: string;
}

export default function SalonImage({
  src,
  alt,
  category = "Salon Work",
  tag,
  priority = false,
  className = "",
  aspectRatio = "portrait",
  objectPosition = "center",
  onClick,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: SalonImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getAspectClass = () => {
    switch (aspectRatio) {
      case "portrait":
        return "aspect-[4/5]";
      case "square":
        return "aspect-square";
      case "landscape":
        return "aspect-[16/10]";
      default:
        return "aspect-[4/5]";
    }
  };

  const getPositionClass = () => {
    switch (objectPosition) {
      case "top":
        return "object-top";
      case "bottom":
        return "object-bottom";
      case "center":
        return "object-center";
      default:
        return objectPosition;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-surface-card rounded-2xl border border-surface-border/60 transition-all duration-300 group ${getAspectClass()} ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      {!hasError ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
            className={`object-cover ${getPositionClass()} transition-all duration-700 ease-out group-hover:scale-105 ${
              isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />
          {isLoading && (
            <div className="absolute inset-0 bg-surface-elevated animate-pulse flex items-center justify-center">
              <span className="w-8 h-8 rounded-full border-2 border-gold-400 border-t-transparent animate-spin" />
            </div>
          )}
        </>
      ) : (
        /* Real Salon Asset Placeholder (Authentic Fallback - Strictly No Stock/AI Faces) */
        <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-br from-surface-card via-surface-elevated to-surface border border-gold-400/20 text-center transition-colors duration-200">
          {/* Top category indicator */}
          <div className="flex items-center justify-between w-full">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-gold-400/10 text-gold-500 dark:text-gold-300 border border-gold-400/30">
              <Sparkles className="w-3 h-3 text-gold-400" />
              {category}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] text-ivory/60 font-medium">
              <Instagram className="w-3 h-3 text-gold-400" />
              @k_lavishlooks
            </span>
          </div>

          {/* Center Graphic */}
          <div className="my-auto flex flex-col items-center justify-center gap-2 py-4">
            <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-500 dark:text-gold-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <Camera className="w-6 h-6 stroke-[1.5]" />
            </div>
            <p className="font-serif text-lg tracking-wide text-ivory font-medium mt-1">
              {tag || alt}
            </p>
            <p className="text-[12px] text-ivory/70 max-w-[220px] leading-relaxed">
              Real Salon Work by Karthikeya Lavish Looks
            </p>
          </div>

          {/* Bottom asset path guide */}
          <div className="pt-3 border-t border-surface-border/60 flex flex-col items-center gap-1">
            <span className="text-[10px] uppercase tracking-widest text-gold-500 dark:text-gold-400/80 font-mono">
              Insert Asset at:
            </span>
            <code className="text-[11px] text-ivory/80 bg-surface-elevated px-2 py-0.5 rounded border border-surface-border font-mono max-w-full truncate">
              {src}
            </code>
          </div>
        </div>
      )}
    </div>
  );
}
