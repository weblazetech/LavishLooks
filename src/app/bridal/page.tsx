import Image from "next/image";
import { Check, ArrowRight, CalendarHeart } from "lucide-react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import { FeatherMotif } from "@/components/site/feather-motif";
import { bridalPackages, galleryTiles } from "@/data/salon";

export default function BridalPage() {
  const bridalGallery = galleryTiles.filter(
    (t) => t.category === "Mehndi" || t.category === "Makeup"
  );

  return (
    <>
      {/* Inner hero */}
      <section className="relative bg-sand py-[64px] sm:py-[84px] overflow-hidden">
        <div className="absolute top-6 right-6 opacity-20" aria-hidden="true">
          <FeatherMotif size={48} />
        </div>
        <div className="container-atelier text-center max-w-[760px] mx-auto">
          <Reveal>
            <Kicker>By appointment</Kicker>
            <h1 className="text-display text-ink mt-3">
              Your Wedding Day,
              <br />
              Perfected.
            </h1>
            <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
              Bridal makeup, hair and henna by appointment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Package overview - 3 porcelain cards */}
      <section className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-ivory">
        <div className="container-atelier">
          <Reveal className="max-w-[640px] mb-10">
            <Kicker>Packages</Kicker>
            <h2 className="text-h2 text-ink mt-3">
              Three ways to do the day.
            </h2>
            <p className="mt-3 text-muted leading-relaxed">
              Every package is built around makeup, hair and henna - the three things that matter on the day. Final prices are confirmed on consultation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {bridalPackages.map((pkg, i) => (
              <Reveal key={pkg.slug} delay={i * 100}>
                <article className="group relative h-full rounded-card bg-porcelain border border-hairline/60 p-6 sm:p-7 shadow-[0_8px_24px_rgba(34,48,45,0.08)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(34,48,45,0.12)] hover:border-gold/40">
                  {/* Featured ribbon for Wedding Day */}
                  {pkg.slug === "wedding-day" && (
                    <div className="absolute -top-3 left-6 inline-flex items-center rounded-pill bg-gold px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_rgba(161,98,7,0.35)]">
                      Most chosen
                    </div>
                  )}
                  <h3 className="text-h3 text-ink">{pkg.name}</h3>
                  <p className="mt-2 text-pull text-muted">{pkg.tagline}</p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {pkg.contents.map((c) => (
                      <li key={c} className="flex items-start gap-2.5 text-[0.9375rem] text-ink">
                        <Check size={16} className="mt-1 shrink-0 text-teal" strokeWidth={2} />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-5 border-t border-hairline/60 flex items-baseline justify-between gap-2">
                    <span className="text-caption text-muted">Starting at</span>
                    <span className="font-sans font-bold text-[1.5rem] text-gold italic">
                      {pkg.price}
                    </span>
                  </div>

                  <div className="mt-5">
                    <Button as="link" href="/contact" variant="ghost" size="md" className="w-full">
                      Enquire
                      <ArrowRight size={14} strokeWidth={1.75} />
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="text-caption text-muted max-w-[60ch]">
              Package contents are limited to makeup, hair and henna. Add-ons and custom combinations are quoted on consultation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Bridal gallery */}
      <section className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-sand">
        <div className="container-atelier">
          <Reveal className="mb-10 max-w-[640px]">
            <Kicker>Recent work</Kicker>
            <h2 className="text-h2 text-ink mt-3">
              Bridal &amp; occasion looks.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {bridalGallery.map((tile, i) => (
              <Reveal key={tile.slug} delay={(i % 3) * 80}>
                <article className="group">
                  <div className="relative aspect-[4/5] rounded-img overflow-hidden bg-ivory border border-hairline/60">
                    <Image
                      src={tile.src}
                      alt={tile.caption}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-3 text-caption text-ink/80">{tile.caption}</p>
                  {tile.generated && (
                    <p className="text-[0.6875rem] uppercase tracking-[0.18em] text-muted/70 mt-0.5">
                      Illustration
                    </p>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking note */}
      <section className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-ivory">
        <div className="container-atelier">
          <Reveal className="rounded-card bg-porcelain border border-hairline/60 p-8 sm:p-12 text-center max-w-[720px] mx-auto shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-pill bg-sand text-gold mb-4">
              <CalendarHeart size={22} strokeWidth={1.5} />
            </div>
            <h2 className="text-h2 text-ink">
              Bridal bookings need a consultation.
            </h2>
            <p className="mt-3 text-muted leading-relaxed max-w-[52ch] mx-auto">
              Share your date and we&apos;ll hold a slot. Trials, draping assistance and henna sittings are scheduled in advance - not on the day.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button as="link" href="/contact" size="lg">
                Book an Appointment
              </Button>
              <Button as="link" href="/gallery" variant="ghost" size="lg">
                See more work
                <ArrowRight size={14} strokeWidth={1.75} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
