"use client";

import * as React from "react";
import Image from "next/image";
import { X, ArrowRight, Instagram } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import { galleryTiles, salon, type GalleryTile } from "@/data/salon";
import { cn } from "@/lib/utils";

type Filter = "All" | "Hair" | "Mehndi" | "Makeup" | "Grooming";
const FILTERS: Filter[] = ["All", "Hair", "Mehndi", "Makeup", "Grooming"];

export default function GalleryPage() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [active, setActive] = React.useState<GalleryTile | null>(null);

  const filtered = React.useMemo(() => {
    if (filter === "All") return galleryTiles;
    return galleryTiles.filter((t) => t.category === filter);
  }, [filter]);

  return (
    <>
      {/* Inner hero */}
      <section className="bg-sand py-[64px] sm:py-[84px]">
        <div className="container-atelier text-center max-w-[760px] mx-auto">
          <Reveal>
            <Kicker>Transformations</Kicker>
            <h1 className="text-display text-ink mt-3">
              Fresh from the chair.
            </h1>
            <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
              Hair, mehndi, makeup and grooming - real work from the salon floor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter pills */}
      <div className="sticky top-[76px] z-30 bg-ivory/95 backdrop-blur-md border-b border-hairline/60">
        <div className="container-atelier py-3">
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={isActive}
                  className={cn(
                    "rounded-pill px-4 py-2 text-[0.8125rem] font-semibold tracking-[0.02em] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isActive
                      ? "bg-teal text-ivory shadow-[0_8px_24px_rgba(34,48,45,0.08)]"
                      : "bg-porcelain text-ink border border-hairline hover:border-teal/40 hover:text-teal"
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Masonry-style grid (CSS columns) */}
      <section className="py-[clamp(3rem,7vw,4.5rem)]">
        <div className="container-atelier">
          {filtered.length === 0 ? (
            <div className="rounded-card bg-porcelain border border-hairline/60 p-10 text-center">
              <p className="text-h3 text-ink">No transformations match.</p>
              <p className="mt-2 text-muted">Try a different filter.</p>
              <div className="mt-5">
                <Button onClick={() => setFilter("All")} variant="ghost" size="md">
                  Reset filter
                </Button>
              </div>
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 [column-fill:_balance]">
              {filtered.map((tile, i) => (
                <Reveal
                  key={tile.slug}
                  delay={(i % 3) * 60}
                  className="mb-4 sm:mb-5 break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={() => setActive(tile)}
                    className="group block w-full text-left"
                    aria-label={`Open: ${tile.caption}`}
                  >
                    <div className="relative rounded-img overflow-hidden bg-sand border border-hairline/60">
                      <Image
                        src={tile.src}
                        alt={tile.caption}
                        width={800}
                        height={1000}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="w-full h-auto object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                      />
                      <span className="absolute top-3 left-3 inline-flex items-center rounded-pill bg-porcelain/90 backdrop-blur px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-teal border border-hairline/60">
                        {tile.category}
                      </span>
                    </div>
                    <p className="mt-3 text-caption text-ink/80">{tile.caption}</p>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Instagram band */}
      <section className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-sand">
        <div className="container-atelier">
          <Reveal className="rounded-card bg-porcelain border border-hairline/60 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
            <div>
              <Kicker>More on Instagram</Kicker>
              <h2 className="text-h2 text-ink mt-3">
                More transformations on Instagram.
              </h2>
              <p className="mt-2 text-muted">
                Reels of hair, mehndi, grooming and makeup - posted regularly.
              </p>
            </div>
            <Button as="a" href={salon.instagramUrl} variant="ghost" size="lg" className="shrink-0">
              <Instagram size={16} strokeWidth={1.75} />
              {salon.instagramHandle}
              <ArrowRight size={14} strokeWidth={1.75} />
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox tile={active} onClose={() => setActive(null)} />
    </>
  );
}

/* --- Lightbox --- */
function Lightbox({
  tile,
  onClose,
}: {
  tile: GalleryTile | null;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();

  // Lock scroll + ESC to close
  React.useEffect(() => {
    if (!tile) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [tile, onClose]);

  return (
    <AnimatePresence>
      {tile && (
        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-ink/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={tile.caption}
          onClick={onClose}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-[640px] w-full rounded-card bg-porcelain p-3 sm:p-4 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-pill bg-porcelain border border-hairline text-ink hover:bg-sand hover:text-teal transition-colors shadow-[0_8px_24px_rgba(34,48,45,0.15)]"
            >
              <X size={16} />
            </button>
            <div className="relative rounded-img overflow-hidden bg-sand">
              <Image
                src={tile.src}
                alt={tile.caption}
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="mt-3 px-2 pb-1">
              <span className="inline-flex items-center rounded-pill bg-gold/10 text-gold px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]">
                {tile.category}
              </span>
              <p className="mt-2 text-ink font-medium">{tile.caption}</p>
              {tile.generated && (
                <p className="text-[0.75rem] text-muted mt-1">
                  Illustration, not actual salon photography.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
