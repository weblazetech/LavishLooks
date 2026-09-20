import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Brush,
  Hand,
  Flower2,
  User,
  Star,
  ArrowRight,
  CalendarCheck,
  Users,
  CheckCircle2,
  HeartHandshake,
  Layers,
  Crown,
} from "lucide-react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import { FeatherMotif } from "@/components/site/feather-motif";
import { HeroCanvas } from "@/components/threejs/hero-canvas";
import { salon } from "@/data/salon";

// Six category items with luxury salon photography
const homeServiceCards = [
  {
    title: "Hair",
    slug: "hair",
    description: "Professional cuts, styling and hair transformations.",
    icon: Scissors,
    image: "/salon/gallery-hair-1.png",
    alt: "Professional cuts, styling and hair transformations at Karthikeya Lavish Looks",
  },
  {
    title: "Skin & Facials",
    slug: "skin-facials",
    description: "Beauty and skincare treatments tailored to your needs.",
    icon: Sparkles,
    image: "/salon/service-skin-facials.jpg",
    alt: "Beauty and skincare treatments tailored to your needs at Karthikeya Lavish Looks",
  },
  {
    title: "Makeup",
    slug: "makeup",
    description: "Makeup looks for occasions, celebrations and special moments.",
    icon: Brush,
    image: "/salon/gallery-makeup-1.png",
    alt: "Makeup looks for occasions, celebrations and special moments at Karthikeya Lavish Looks",
  },
  {
    title: "Nails",
    slug: "nails",
    description: "Clean, polished and occasion-ready nail services.",
    icon: Hand,
    image: "/salon/service-nails.jpg",
    alt: "Clean, polished and occasion-ready nail services at Karthikeya Lavish Looks",
  },
  {
    title: "Mehndi & Bridal",
    slug: "mehndi-bridal",
    description: "Mehndi, bridal makeup and occasion-ready beauty services.",
    icon: Flower2,
    image: "/salon/gallery-mehndi-1.png",
    alt: "Mehndi, bridal makeup and occasion-ready beauty services at Karthikeya Lavish Looks",
  },
  {
    title: "Men's Grooming",
    slug: "mens-grooming",
    description: "Professional hair, beard and grooming services for men.",
    icon: User,
    image: "/salon/gallery-grooming-1.png",
    alt: "Professional hair, beard and grooming services for men at Karthikeya Lavish Looks",
  },
];

// Transformation gallery items (6 real salon looks)
const transformationGallery = [
  {
    src: "/salon/gallery-hair-1.png",
    category: "Hair",
    alt: "Professional hair transformation and styling at Karthikeya Lavish Looks",
    caption: "Lustrous layered haircut and styling",
  },
  {
    src: "/salon/gallery-mehndi-1.png",
    category: "Mehndi",
    alt: "Intricate bridal henna design hand-applied at Karthikeya Lavish Looks",
    caption: "Intricate bridal and occasion mehndi",
  },
  {
    src: "/salon/gallery-hair-2.png",
    category: "Men's Grooming",
    alt: "Precision men's fade cut and beard trim",
    caption: "Precision fade and beard line-up",
  },
  {
    src: "/salon/gallery-makeup-1.png",
    category: "Makeup",
    alt: "Soft evening makeup with luminous glow",
    caption: "Warm evening occasion makeup",
  },
  {
    src: "/salon/gallery-grooming-1.png",
    category: "Men's Grooming",
    alt: "Traditional hot towel clean shave and beard shaping",
    caption: "Hot-towel shave and grooming",
  },
  {
    src: "/salon/gallery-styling-1.png",
    category: "Hair",
    alt: "Professional blow-dry and hair transformation finish",
    caption: "Smooth salon blowout and finish",
  },
];

// Why Karthikeya Lavish Looks (4 feature items)
const whyFeatures = [
  {
    title: "Personalized Service",
    description: "Every appointment is tailored to the look and finish you want.",
    icon: HeartHandshake,
  },
  {
    title: "Complete Beauty Experience",
    description: "Hair, skin, makeup, nails, bridal, mehndi and grooming under one roof.",
    icon: Layers,
  },
  {
    title: "Unisex Expertise",
    description: "Professional beauty and grooming services for women and men.",
    icon: Users,
  },
  {
    title: "Bridal Attention",
    description: "Dedicated bridal and occasion services planned around your special day.",
    icon: Crown,
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. TRUST STRIP */}
      <TrustStripSection />

      {/* 3. SERVICES PREVIEW */}
      <ServicesPreviewSection />

      {/* 4. BRIDAL & OCCASION BANNER */}
      <BridalBannerSection />

      {/* 5. TRANSFORMATION GALLERY PREVIEW */}
      <GalleryPreviewSection />

      {/* 6. WHY KARTHIKEYA LAVISH LOOKS */}
      <WhySection />

      {/* 7. SOCIAL PROOF */}
      <SocialProofSection />

      {/* 8. FINAL BOOKING CTA */}
      <FinalBookingCTASection />
    </>
  );
}

/* =================================================================
   1. HERO SECTION - Split-screen with floating card
   ================================================================= */
function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-label="Welcome to Karthikeya Lavish Looks"
      className="relative min-h-[calc(100dvh-88px)] flex items-center pt-24 pb-14 sm:py-20 overflow-hidden"
    >
      <div className="container-atelier w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Eyebrow, Main Headline, Subtext, Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              <Kicker className="tracking-[0.22em] text-teal uppercase font-semibold text-[0.8125rem]">
                KARTHIKEYA LAVISH LOOKS
              </Kicker>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-display text-ink mt-4 text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.08] font-serif font-semibold">
                Where Every Look
                <br />
                Becomes Your Signature.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-muted prose-atelier max-w-[540px]">
                Professional hair, beauty, bridal, mehndi and grooming services designed to help you look and feel your best.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  as="link"
                  href="/contact"
                  size="lg"
                  className="shadow-sm hover:shadow-md transition-shadow"
                >
                  Book an Appointment
                </Button>
                <Button
                  as="link"
                  href="/services"
                  variant="ghost"
                  size="lg"
                  className="border border-hairline/80 hover:border-teal/50"
                >
                  Explore Services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Image with Floating Card */}
          <div className="lg:col-span-5 relative">
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-img overflow-hidden bg-sand shadow-[0_12px_36px_rgba(34,48,45,0.09)]">
                {/* Ambient 3D canvas layer behind salon image */}
                <HeroCanvas className="absolute inset-0 opacity-60" />

                {/* Main Salon Photo */}
                <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4">
                  <div className="relative w-full h-full rounded-img overflow-hidden gold-glow-edge">
                    <Image
                      src="/salon/hero-styling-chair.png"
                      alt="Karthikeya Lavish Looks luxurious styling studio in Kashibugga, Warangal"
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Card */}
                <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto z-10">
                  <div className="backdrop-blur-md bg-porcelain/95 border border-hairline/90 rounded-card p-4 shadow-[0_10px_25px_rgba(34,48,45,0.12)]">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-pill bg-teal animate-pulse" />
                      <span className="text-[0.75rem] font-bold tracking-[0.18em] uppercase text-teal">
                        UNISEX SALON
                      </span>
                    </div>
                    <p className="mt-1 text-[0.875rem] font-medium text-ink">
                      Hair • Beauty • Bridal • Grooming
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   2. TRUST STRIP SECTION - Clean verified metrics
   ================================================================= */
function TrustStripSection() {
  const trustMetrics = [
    {
      stat: "5.0★",
      label: "Rated on JustDial",
      icon: Star,
    },
    {
      stat: "11 Reviews",
      label: "JustDial reviews",
      icon: CheckCircle2,
    },
    {
      stat: "Unisex Salon",
      label: "Beauty & grooming",
      icon: Users,
    },
    {
      stat: "Appointment Based",
      label: "Bridal services",
      icon: CalendarCheck,
    },
  ];

  return (
    <section
      id="trust-strip"
      aria-label="Verified Salon Highlights"
      className="bg-sand border-y border-hairline/70 py-9 sm:py-11"
    >
      <div className="container-atelier">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Reveal
                as="li"
                key={metric.stat}
                delay={index * 70}
                className="flex items-center gap-3.5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-pill bg-porcelain text-gold shadow-sm border border-hairline/40">
                  <Icon size={20} strokeWidth={1.75} className="text-gold" />
                </div>
                <div className="min-w-0">
                  <div className="font-sans font-bold text-[1.25rem] sm:text-[1.375rem] leading-tight text-ink">
                    {metric.stat}
                  </div>
                  <div className="text-[0.8125rem] text-muted font-medium mt-0.5">
                    {metric.label}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* =================================================================
   3. SERVICES PREVIEW SECTION - Six elegant cards (3 cols / 2 cols / 1 col)
   ================================================================= */
function ServicesPreviewSection() {
  return (
    <section
      id="services-preview"
      aria-labelledby="services-heading"
      className="py-16 sm:py-24 bg-ivory"
    >
      <div className="container-atelier">
        <div className="text-center max-w-[680px] mx-auto">
          <Reveal>
            <Kicker>WHAT WE DO</Kicker>
            <h2 id="services-heading" className="text-h2 text-ink mt-3">
              Everything You Need, Under One Roof
            </h2>
            <p className="mt-3.5 text-muted text-[1.0625rem] leading-relaxed">
              From everyday grooming to bridal glamour, explore our range of professional beauty and grooming services.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {homeServiceCards.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={index * 60}>
                <article className="group h-full flex flex-col justify-between rounded-card bg-porcelain border border-hairline/80 overflow-hidden shadow-[0_8px_24px_rgba(34,48,45,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(34,48,45,0.12)] hover:border-teal/40">
                  {/* Category Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3.5 left-3.5">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-pill bg-porcelain/95 backdrop-blur-sm text-teal shadow-sm border border-hairline/50 transition-colors group-hover:bg-teal group-hover:text-ivory">
                        <Icon size={19} strokeWidth={1.75} />
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-h3 text-ink text-[1.25rem] font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-hairline/40">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep transition-colors"
                      >
                        View Services
                        <ArrowRight
                          size={15}
                          strokeWidth={2}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   4. BRIDAL & OCCASION BANNER - Full-width gold section with subtle sheen
   ================================================================= */
function BridalBannerSection() {
  return (
    <section id="bridal-banner" aria-labelledby="bridal-heading" className="px-3 sm:px-6">
      <div className="container-atelier">
        <div className="relative overflow-hidden rounded-card bg-gold px-6 py-12 sm:px-12 sm:py-16 text-white shadow-[0_14px_36px_rgba(161,98,7,0.22)]">
          {/* Ambient Sheen Drift */}
          <div className="sheen-drift" aria-hidden="true" />

          {/* Corner feather accent */}
          <div className="absolute top-5 right-5 opacity-25" aria-hidden="true">
            <FeatherMotif size={44} className="text-white" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <Reveal>
                <span className="inline-block font-sans font-semibold uppercase tracking-[0.2em] text-[0.8125rem] text-white/90">
                  BY APPOINTMENT ONLY
                </span>
                <h2
                  id="bridal-heading"
                  className="mt-3 font-serif font-semibold text-white text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.12]"
                >
                  Bridal &amp; Occasion Glamour
                </h2>
                <p className="mt-4 text-white/95 text-[1.0625rem] sm:text-[1.125rem] leading-relaxed max-w-[55ch]">
                  Makeup, hair and henna crafted for your big day — booked by appointment only.
                </p>
                <div className="mt-8">
                  <Button
                    as="link"
                    href="/contact"
                    variant="ghost"
                    size="lg"
                    className="bg-porcelain text-ink hover:bg-ivory hover:text-teal font-semibold shadow-md"
                  >
                    Book an Appointment
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Bridal Image Asset */}
            <div className="lg:col-span-4 relative flex justify-center">
              <Reveal delay={120}>
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-card overflow-hidden border-2 border-white/40 shadow-xl">
                  <Image
                    src="/salon/bridal-still-life.png"
                    alt="Bridal jewelry, henna and wedding preparation essentials at Karthikeya Lavish Looks"
                    fill
                    sizes="(max-width: 768px) 240px, 300px"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   5. TRANSFORMATION GALLERY PREVIEW - Real salon looks with hover zoom
   ================================================================= */
function GalleryPreviewSection() {
  return (
    <section
      id="gallery-preview"
      aria-labelledby="gallery-heading"
      className="py-16 sm:py-24 bg-ivory"
    >
      <div className="container-atelier">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div className="max-w-[580px]">
            <Kicker>REAL RESULTS</Kicker>
            <h2 id="gallery-heading" className="text-h2 text-ink mt-3">
              Transformations Worth Remembering
            </h2>
            <p className="mt-3 text-muted text-[1.0625rem] leading-relaxed">
              Explore real looks across hair, makeup, mehndi and men&apos;s grooming.
            </p>
          </div>
          <div>
            <Button
              as="link"
              href="/gallery"
              variant="ghost"
              size="md"
              className="border border-hairline/80 hover:border-teal/50"
            >
              View Full Gallery
              <ArrowRight size={15} strokeWidth={2} />
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {transformationGallery.map((item, index) => (
            <Reveal key={item.src} delay={index * 60}>
              <figure className="group flex flex-col h-full">
                <div className="relative aspect-square rounded-img overflow-hidden bg-sand shadow-sm border border-hairline/50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-pill bg-porcelain/90 backdrop-blur-sm text-[0.6875rem] font-bold uppercase tracking-wider text-teal shadow-xs">
                      {item.category}
                    </span>
                  </div>
                </div>
                <figcaption className="mt-3 text-caption text-ink font-medium">
                  {item.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   6. WHY KARTHIKEYA LAVISH LOOKS - Editorial 4-pillar section
   ================================================================= */
function WhySection() {
  return (
    <section
      id="why-karthikeya"
      aria-labelledby="why-heading"
      className="bg-sand border-y border-hairline/60 py-16 sm:py-24"
    >
      <div className="container-atelier">
        <div className="text-center max-w-[700px] mx-auto">
          <Reveal>
            <Kicker>THE ATELIER STANDARD</Kicker>
            <h2 id="why-heading" className="text-h2 text-ink mt-3">
              Beauty, Detail &amp; Confidence — In One Place
            </h2>
            <p className="mt-3 text-muted text-[1.0625rem] leading-relaxed">
              We focus on thoughtful craftsmanship and dedicated care so every guest leaves looking and feeling exceptional.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {whyFeatures.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 80}>
                <article className="h-full flex gap-5 items-start rounded-card bg-porcelain border border-hairline/70 p-7 shadow-[0_8px_20px_rgba(34,48,45,0.05)] transition-all hover:shadow-[0_12px_28px_rgba(34,48,45,0.09)]">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-pill bg-sand text-teal border border-hairline/50">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3 className="text-h3 text-ink text-[1.2rem] font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   7. SOCIAL PROOF - Verified Rating Focus (No Fake Testimonials)
   ================================================================= */
function SocialProofSection() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-heading"
      className="py-16 sm:py-24 bg-ivory"
    >
      <div className="container-atelier">
        <Reveal className="rounded-card bg-porcelain border border-hairline/80 p-8 sm:p-14 text-center max-w-[740px] mx-auto shadow-[0_10px_30px_rgba(34,48,45,0.07)]">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                className="text-gold fill-gold"
                strokeWidth={1.5}
              />
            ))}
          </div>
          <div className="font-sans font-bold text-[3rem] sm:text-[3.5rem] leading-none text-gold">
            5.0★
          </div>
          <h2
            id="social-proof-heading"
            className="mt-3.5 text-h3 text-ink text-[1.375rem] sm:text-[1.5rem]"
          >
            Rated 5.0 on JustDial
          </h2>
          <p className="mt-2 text-muted font-medium text-[1.0625rem]">
            11 Reviews
          </p>
          <p className="mt-4 text-muted/80 text-[0.9375rem] leading-relaxed max-w-[48ch] mx-auto">
            Verified rating based on authentic customer reviews on JustDial for Karthikeya Lavish Looks in Warangal.
          </p>
          <div className="mt-7">
            <Button
              as="link"
              href={salon.rating.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="md"
              className="border border-hairline hover:border-gold/60 text-ink"
            >
              Verify on JustDial
              <ArrowRight size={14} strokeWidth={1.75} />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* =================================================================
   8. FINAL BOOKING CTA - Ready for Your Next Look?
   ================================================================= */
function FinalBookingCTASection() {
  return (
    <section
      id="final-cta"
      aria-labelledby="cta-heading"
      className="bg-sand border-t border-hairline/70 py-16 sm:py-24"
    >
      <div className="container-atelier">
        <Reveal className="text-center max-w-[660px] mx-auto">
          <FeatherMotif size={32} className="mx-auto mb-4 text-gold" />
          <h2 id="cta-heading" className="text-display text-ink text-[clamp(2.25rem,4.8vw,3.75rem)] font-serif font-semibold leading-tight">
            Ready for Your Next Look?
          </h2>
          <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
            From everyday grooming to bridal glamour, let Karthikeya Lavish Looks create a look that feels like you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button as="link" href="/contact" size="lg" className="shadow-md">
              Book an Appointment
            </Button>
            <Button
              as="link"
              href="/services"
              variant="ghost"
              size="lg"
              className="border border-hairline/80 hover:border-teal/50"
            >
              Explore Services
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
