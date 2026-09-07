"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import {
  serviceCategories,
  serviceRows,
  type ServiceCategory,
} from "@/data/salon";
import { cn } from "@/lib/utils";

export default function ServicesPage() {
  const [active, setActive] = React.useState<string>("all");

  const filteredRows = React.useMemo(() => {
    if (active === "all") return serviceRows;
    return serviceRows.filter((r) => r.category === active);
  }, [active]);

  const activeCategory: ServiceCategory | undefined = React.useMemo(
    () => serviceCategories.find((c) => c.slug === active),
    [active]
  );

  return (
    <>
      {/* Inner hero */}
      <section className="bg-sand py-[64px] sm:py-[84px]">
        <div className="container-atelier text-center max-w-[760px] mx-auto">
          <Reveal>
            <Kicker>Honest pricing</Kicker>
            <h1 className="text-display text-ink mt-3">
              Services &amp; Prices
            </h1>
            <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
              Honest pricing - every rate printed before you sit down.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sticky category pills */}
      <div className="sticky top-[76px] z-30 bg-ivory/95 backdrop-blur-md border-b border-hairline/60">
        <div className="container-atelier py-3">
          <CategoryPills active={active} onChange={setActive} />
        </div>
      </div>

      {/* Service rows */}
      <section className="py-[clamp(3rem,7vw,4.5rem)]">
        <div className="container-atelier">
          {/* Active category heading */}
          <Reveal className="mb-6 flex items-end justify-between gap-4">
            <div>
              <Kicker>
                {active === "all"
                  ? "Full menu"
                  : activeCategory?.name ?? "Services"}
              </Kicker>
              <h2 className="text-h2 text-ink mt-2">
                {active === "all"
                  ? "Every chair, every service."
                  : activeCategory?.name}
              </h2>
              {active !== "all" && activeCategory && (
                <p className="mt-2 text-muted leading-relaxed">
                  {activeCategory.description}
                </p>
              )}
            </div>
          </Reveal>

          {/* Empty state */}
          {filteredRows.length === 0 ? (
            <Reveal>
              <div className="rounded-card bg-porcelain border border-hairline/60 p-10 text-center">
                <p className="text-h3 text-ink">No services match.</p>
                <p className="mt-2 text-muted">
                  Reset the filter to see the full menu.
                </p>
                <div className="mt-5">
                  <Button onClick={() => setActive("all")} variant="ghost" size="md">
                    Reset filter
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : (
            <ul className="flex flex-col gap-2.5">
              {filteredRows.map((row, i) => (
                <Reveal as="li" key={`${row.category}-${row.name}`} delay={(i % 8) * 30}>
                  <div className="group flex items-center gap-3 rounded-[14px] bg-porcelain border border-hairline/60 px-5 py-4 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-teal/30 hover:shadow-[0_8px_24px_rgba(34,48,45,0.06)]">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-sans font-medium text-[0.9375rem] text-ink">
                          {row.name}
                        </span>
                        {row.tag && (
                          <span className="inline-flex items-center rounded-pill bg-gold/10 text-gold px-2.5 py-0.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em]">
                            {row.tag}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Dotted gold leader */}
                    <span className="dotted-leader hidden sm:block" aria-hidden="true" />
                    {/* Price */}
                    <span
                      className={cn(
                        "font-sans font-bold text-[1.25rem] text-gold whitespace-nowrap",
                        row.price === "[PRICE]" && "italic opacity-70"
                      )}
                    >
                      {row.price}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          )}

          {/* Rate-card note */}
          <Reveal className="mt-8">
            <p className="text-caption text-muted max-w-[60ch]">
              Prices shown are the salon&apos;s printed rate card. Confirm final quotes on the phone for combination services.
            </p>
          </Reveal>

          {/* Per-category CTA */}
          <Reveal className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Button as="link" href="/contact" size="lg">
              Book an Appointment
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep transition-colors"
            >
              <CalendarClock size={15} strokeWidth={1.75} />
              Or call ahead for a slot
              <ArrowRight size={14} strokeWidth={1.75} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* --- Sticky category pills --- */
function CategoryPills({
  active,
  onChange,
}: {
  active: string;
  onChange: (s: string) => void;
}) {
  const pills = [{ slug: "all", name: "All" }, ...serviceCategories];
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {pills.map((p) => {
        const isActive = active === p.slug;
        return (
          <button
            key={p.slug}
            type="button"
            onClick={() => onChange(p.slug)}
            aria-pressed={isActive}
            className={cn(
              "shrink-0 rounded-pill px-4 py-2 text-[0.8125rem] font-semibold tracking-[0.02em] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]",
              isActive
                ? "bg-teal text-ivory shadow-[0_8px_24px_rgba(34,48,45,0.08)]"
                : "bg-porcelain text-ink border border-hairline hover:border-teal/40 hover:text-teal"
            )}
          >
            {p.name}
          </button>
        );
      })}
    </div>
  );
}
