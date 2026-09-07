import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Brush,
  Hand,
  Flower2,
  User,
  ShieldCheck,
  Receipt,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import { HeroCanvas } from "@/components/threejs/hero-canvas";
import { FeatherMotif } from "@/components/site/feather-motif";
import {
  salon,
  serviceCategories,
  homeGalleryTiles,
  promises,
  reviews,
} from "@/data/salon";

// Icon map - Lucide thin-line only
const iconMap = {
  scissors: Scissors,
  sparkles: Sparkles,
  brush: Brush,
  hand: Hand,
  flower2: Flower2,
  user: User,
  "shield-check": ShieldCheck,
  receipt: Receipt,
} as const;

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <Hero />

      {/* ===================== TRUST STRIP ===================== */}
      <TrustStrip />

      {/* ===================== SERVICE CATEGORIES ===================== */}
      <ServiceCategories />

      {/* ===================== BRIDAL BAND ===================== */}
      <BridalBand />

      {/* ===================== GALLERY STRIP ===================== */}
      <GalleryStrip />

      {/* ===================== WHY ROW ===================== */}
      <WhyRow />

      {/* ===================== REVIEWS ===================== */}
      <Reviews />

      {/* ===================== BOOKING CTA BAND ===================== */}
      <BookingCTA />
    </>
  );
}

/* ----------------------------------------------------------------
   HERO - split: left text + CTAs, right WebGL panel + salon photo
   ---------------------------------------------------------------- */
function Hero() {
  return (
    <section
      aria-label="Welcome"
      className="relative min-h-[calc(100dvh-88px)] flex items-center"
    >
      <div className="container-atelier w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-12 items-center">
          {/* LEFT - text */}
          <div className="order-2 lg:order-1 max-w-[560px]">
            <Reveal>
              <Kicker>Warangal&apos;s Unisex Beauty Studio</Kicker>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="text-display text-ink mt-4">
                Look Lavish.
                <br />
                Every Single Day.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-[1.0625rem] leading-[1.65] text-muted prose-atelier">
                Hair, skin, makeup, mehndi and men&apos;s grooming in Kashibugga - Warangal&apos;s 5.0-rated unisex salon.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Button as="link" href="/contact" size="lg">
                  Book an Appointment
                </Button>
                <Button as="link" href="/services" variant="ghost" size="lg">
                  View Services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT - WebGL panel behind salon photo */}
          <div className="order-1 lg:order-2 relative">
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[5/6] w-full rounded-img overflow-hidden">
                {/* Sand-gradient base + WebGL canvas (Lustrous Strands) */}
                <HeroCanvas className="absolute inset-0" />
                {/* Salon photo, composited over the canvas */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative w-[78%] h-[88%] mb-3">
                    <Image
                      src="/salon/hero-styling-chair.png"
                      alt="Karthikeya Lavish Looks salon interior in warm daylight - empty styling chair before a brass-framed mirror"
                      fill
                      priority
                      sizes="(max-width: 1024px) 90vw, 45vw"
                      className="object-cover rounded-img gold-glow-edge"
                    />
                  </div>
                </div>
                {/* Subtle inner top fade so the canvas reads above the photo edge */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sand/60 to-transparent pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   TRUST STRIP - sand band, 4 block facts
   ---------------------------------------------------------------- */
function TrustStrip() {
  const facts = [
    { stat: "5.0★", label: `${reviews.count} ${reviews.platform} reviews`, icon: Star },
    { stat: "Unisex", label: "Studio for women & men", icon: Users },
    { stat: "Kashibugga", label: "Warangal, Telangana", icon: MapPin },
    { stat: "8 AM - 9 PM", label: "Monday verified", icon: Clock },
  ];
  return (
    <section aria-label="Salon facts" className="bg-sand py-10 sm:py-12">
      <div className="container-atelier">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facts.map((f, i) => (
            <Reveal as="li" key={f.stat} delay={i * 80} className="flex items-center gap-3">
              <f.icon size={20} className="text-gold shrink-0" strokeWidth={1.5} />
              <div className="min-w-0">
                <div className="font-sans font-bold text-[1.5rem] leading-tight text-ink">
                  {f.stat}
                </div>
                <div className="text-caption text-muted">{f.label}</div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   SERVICE CATEGORIES - 6 porcelain cards
   ---------------------------------------------------------------- */
function ServiceCategories() {
  return (
    <section aria-labelledby="categories-h" className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px]">
      <div className="container-atelier">
        <Reveal className="max-w-[640px]">
          <Kicker>What we do</Kicker>
          <h2 id="categories-h" className="text-h2 text-ink mt-3">
            Six categories, one chair.
          </h2>
          <p className="mt-3 text-muted leading-relaxed">
            From a quick beard line-up to full bridal mehndi - every service is held by a trained stylist, never a trainee.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap] ?? Scissors;
            return (
              <Reveal key={cat.slug} delay={i * 80}>
                <article className="group h-full rounded-card bg-porcelain border border-hairline/60 p-6 shadow-[0_8px_24px_rgba(34,48,45,0.08)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(34,48,45,0.12)] hover:border-teal/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-pill bg-sand text-teal">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <FeatherMotif size={16} className="opacity-30 group-hover:opacity-70 transition-opacity" />
                  </div>
                  <h3 className="text-h3 text-ink">{cat.name}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                    {cat.description}
                  </p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep transition-colors"
                  >
                    View services
                    <ArrowRight size={14} strokeWidth={1.75} />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   BRIDAL BAND - full-width gold band + sheen drift
   ---------------------------------------------------------------- */
function BridalBand() {
  return (
    <section aria-labelledby="bridal-h" className="px-3 sm:px-4">
      <div className="container-atelier">
        <div className="relative overflow-hidden rounded-card bg-gold px-6 py-12 sm:px-12 sm:py-16">
          {/* Sheen drift - the ONE allowed ambient motion */}
          <div className="sheen-drift" aria-hidden="true" />

          {/* Corner feather accent */}
          <div className="absolute top-4 right-4 opacity-30" aria-hidden="true">
            <FeatherMotif size={36} className="text-white" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <Reveal>
              <div>
                <p className="font-sans font-semibold uppercase tracking-[0.18em] text-[0.8125rem] text-white/85">
                  By appointment
                </p>
                <h2 id="bridal-h" className="mt-3 font-display font-semibold text-white text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.08]">
                  Bridal &amp; Occasion Glamour
                </h2>
                <p className="mt-4 text-white/90 text-[1.0625rem] leading-relaxed max-w-[52ch]">
                  Makeup, hair and henna crafted for your big day - booked by appointment only.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="flex lg:justify-end">
              <Button as="link" href="/contact" variant="ghost" size="lg">
                Book an Appointment
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   GALLERY STRIP - 6 transformation tiles
   ---------------------------------------------------------------- */
function GalleryStrip() {
  return (
    <section aria-labelledby="gallery-h" className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-ivory">
      <div className="container-atelier">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div className="max-w-[560px]">
            <Kicker>Fresh from the chair</Kicker>
            <h2 id="gallery-h" className="text-h2 text-ink mt-3">
              Real transformations, real craft.
            </h2>
          </div>
          <Button as="link" href="/gallery" variant="ghost" size="md">
            View full gallery
            <ArrowRight size={14} strokeWidth={1.75} />
          </Button>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {homeGalleryTiles.map((tile, i) => (
            <Reveal
              key={tile.slug}
              delay={(i % 3) * 80}
              className={i === 0 || i === 5 ? "md:col-span-1" : ""}
            >
              <article className="group">
                <div className="relative aspect-square rounded-img overflow-hidden bg-sand">
                  <Image
                    src={tile.src}
                    alt={tile.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
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
  );
}

/* ----------------------------------------------------------------
   WHY ROW - three promises
   ---------------------------------------------------------------- */
function WhyRow() {
  return (
    <section aria-labelledby="why-h" className="bg-sand py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px]">
      <div className="container-atelier">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <Kicker>Why the chair</Kicker>
            <h2 id="why-h" className="text-h2 text-ink mt-3">
              Three things we will not compromise on.
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We will not list certifications we cannot show you. These are the three promises we can stand behind today.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
            {promises.map((p, i) => {
              const Icon = iconMap[p.icon as keyof typeof iconMap] ?? ShieldCheck;
              return (
                <Reveal key={p.title} delay={i * 100}>
                  <article className="flex gap-5 items-start rounded-card bg-porcelain border border-hairline/60 p-6">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-sand text-teal">
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-h3 text-ink">{p.title}</h3>
                      <p className="mt-2 text-muted leading-relaxed">{p.body}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   REVIEWS - stat + attribution only, no fabricated quotes
   ---------------------------------------------------------------- */
function Reviews() {
  return (
    <section aria-labelledby="reviews-h" className="py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px] bg-ivory">
      <div className="container-atelier">
        <Reveal className="rounded-card bg-porcelain border border-hairline/60 p-8 sm:p-12 text-center max-w-[720px] mx-auto shadow-[0_8px_24px_rgba(34,48,45,0.08)]">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} size={22} className="text-gold fill-gold" strokeWidth={1.5} />
            ))}
          </div>
          <p className="font-sans font-bold text-[2.75rem] leading-none text-gold">
            {reviews.stat}
          </p>
          <h2 id="reviews-h" className="mt-3 text-h3 text-ink">
            from {reviews.count} {reviews.platform} reviews
          </h2>
          <p className="mt-4 text-muted leading-relaxed max-w-[48ch] mx-auto">
            {reviews.note}
          </p>
          <div className="mt-6">
            <Button as="link" href={salon.rating.url} variant="ghost" size="md">
              {reviews.ctaLabel}
              <ArrowRight size={14} strokeWidth={1.75} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------
   BOOKING CTA BAND - sand band, display headline + CTA
   ---------------------------------------------------------------- */
function BookingCTA() {
  return (
    <section aria-labelledby="cta-h" className="bg-sand py-[clamp(3.5rem,9vw,5.5rem)] sm:py-[88px]">
      <div className="container-atelier">
        <Reveal className="text-center max-w-[640px] mx-auto">
          <FeatherMotif size={28} className="mx-auto mb-4" />
          <h2 id="cta-h" className="text-display text-ink">
            Ready when you are.
          </h2>
          <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
            Walk in or book ahead - the chair is waiting.
          </p>
          <div className="mt-7">
            <Button as="link" href="/contact" size="lg">
              Book an Appointment
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
