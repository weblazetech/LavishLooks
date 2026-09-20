import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Scissors,
  Sparkles,
  Brush,
  Hand,
  Flower2,
  User,
  ArrowRight,
  MapPin,
  Clock,
  Instagram,
  Navigation,
  CheckCircle2,
  Sparkle,
} from "lucide-react";
import { Kicker } from "@/components/site/kicker";
import { Reveal } from "@/components/site/reveal";
import { Button } from "@/components/site/button";
import { FeatherMotif } from "@/components/site/feather-motif";
import { salon, serviceCategories } from "@/data/salon";

export const metadata: Metadata = {
  title: "About Us | Karthikeya Lavish Looks - Unisex Salon Warangal",
  description:
    "Learn about Karthikeya Lavish Looks in Kashibugga, Warangal. A premium unisex beauty atelier providing professional hair, skin, bridal, mehndi and men's grooming.",
  openGraph: {
    title: "About Us | Karthikeya Lavish Looks - Unisex Salon Warangal",
    description:
      "A premium unisex beauty atelier in Kashibugga, Warangal providing hair transformations, skincare, bridal mehndi, and men's grooming.",
    type: "website",
    locale: "en_IN",
  },
};

const iconMap = {
  scissors: Scissors,
  sparkles: Sparkles,
  brush: Brush,
  hand: Hand,
  flower2: Flower2,
  user: User,
} as const;

// Instagram / Real work showcase images
const instagramShowcase = [
  {
    src: "/salon/gallery-hair-1.png",
    caption: "Layered styling & blow-dry",
    category: "Hair",
    alt: "Women's layered haircut and finish at Karthikeya Lavish Looks",
  },
  {
    src: "/salon/gallery-mehndi-1.png",
    caption: "Intricate bridal mehndi",
    category: "Mehndi",
    alt: "Hand-applied bridal henna at Karthikeya Lavish Looks",
  },
  {
    src: "/salon/gallery-hair-2.png",
    caption: "Clean taper & beard shape",
    category: "Grooming",
    alt: "Men's precision haircut and beard line at Karthikeya Lavish Looks",
  },
  {
    src: "/salon/gallery-makeup-1.png",
    caption: "Soft glam celebration makeup",
    category: "Makeup",
    alt: "Occasion makeup with radiant glow at Karthikeya Lavish Looks",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. ABOUT HERO */}
      <AboutHeroSection />

      {/* 2. OUR STORY */}
      <OurStorySection />

      {/* 3. WHAT WE OFFER */}
      <WhatWeOfferSection />

      {/* 4. UNISEX BEAUTY & GROOMING */}
      <UnisexShowcaseSection />

      {/* 5. REAL WORK / INSTAGRAM */}
      <RealWorkInstagramSection />

      {/* 6. LOCATION & BUSINESS INFORMATION */}
      <LocationHoursSection />

      {/* 7. ABOUT PAGE CTA */}
      <AboutCTASection />
    </>
  );
}

/* =================================================================
   1. ABOUT HERO - Split editorial banner
   ================================================================= */
function AboutHeroSection() {
  return (
    <section
      id="about-hero"
      aria-label="About Karthikeya Lavish Looks"
      className="relative min-h-[calc(85dvh-88px)] flex items-center pt-28 pb-14 sm:py-20"
    >
      <div className="container-atelier w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Kicker className="tracking-[0.2em] text-teal uppercase font-semibold text-[0.8125rem]">
                ABOUT KARTHIKEYA LAVISH LOOKS
              </Kicker>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-display text-ink mt-4 text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1.08] font-serif font-semibold">
                Beauty That Brings Out
                <br />
                Your Signature.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-muted prose-atelier max-w-[560px]">
                Karthikeya Lavish Looks is a unisex beauty and grooming destination in Warangal, bringing together professional hair, beauty, bridal, mehndi and grooming services in one welcoming space.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button as="link" href="/contact" size="lg" className="shadow-sm">
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

          <div className="lg:col-span-5 relative">
            <Reveal delay={120}>
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-img overflow-hidden bg-sand shadow-[0_12px_36px_rgba(34,48,45,0.09)] gold-glow-edge">
                <Image
                  src="/salon/hero-styling-chair.png"
                  alt="Karthikeya Lavish Looks salon studio interior in Warangal"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-white/90">
                    WARANGAL ATELIER
                  </span>
                  <p className="font-serif text-[1.25rem] font-medium leading-snug mt-0.5">
                    Crafted for Your Signature Style
                  </p>
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
   2. OUR STORY - More Than a Salon (Two-column editorial)
   ================================================================= */
function OurStorySection() {
  return (
    <section
      id="our-story"
      aria-labelledby="story-heading"
      className="bg-sand border-y border-hairline/70 py-16 sm:py-24"
    >
      <div className="container-atelier">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Salon Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-card overflow-hidden bg-ivory shadow-md border border-hairline/60">
                <Image
                  src="/salon/gallery-styling-1.png"
                  alt="Hair styling and treatment session at Karthikeya Lavish Looks"
                  fill
                  sizes="(max-width: 768px) 90vw, 450px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <Kicker>OUR STORY &amp; PHILOSOPHY</Kicker>
              <h2 id="story-heading" className="text-h2 text-ink mt-3">
                More Than a Salon
              </h2>

              <div className="mt-5 space-y-4 text-muted text-[1.0625rem] leading-[1.75]">
                <p>
                  At Karthikeya Lavish Looks, every visit begins with personal attention. We believe that true grooming and beauty care is about understanding your unique preferences, hair texture, skin tone, and personal aesthetic.
                </p>
                <p>
                  Our chairs host a full spectrum of professional beauty services: tailored hair cuts and transformative styling, revitalizing skincare treatments, luminous makeup for special celebrations, detailed bridal preparation, hand-applied mehndi, and clean, sharp men&apos;s grooming.
                </p>
                <p>
                  Whether you are dropping in for routine upkeep or preparing for the most meaningful milestones in your life, our mission is simple: to provide a relaxed, hygienic, and welcoming environment where you leave feeling confident, refreshed, and unmistakably yourself.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-hairline/60 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <Sparkle size={18} className="text-teal shrink-0" />
                  <span className="text-[0.875rem] font-semibold text-ink">Personal Attention</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Scissors size={18} className="text-teal shrink-0" />
                  <span className="text-[0.875rem] font-semibold text-ink">Hair Transformations</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Flower2 size={18} className="text-teal shrink-0" />
                  <span className="text-[0.875rem] font-semibold text-ink">Bridal Preparation</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// Six service categories with real & atelier salon photography
const whatWeOfferCategories = [
  {
    slug: "hair",
    name: "Hair",
    icon: Scissors,
    description: "Professional cuts, styling and hair transformations.",
    image: "/salon/gallery-hair-1.png",
    alt: "Professional hair cuts, styling and hair transformations at Karthikeya Lavish Looks",
  },
  {
    slug: "skin-facials",
    name: "Skin & Facials",
    icon: Sparkles,
    description: "Beauty and skincare treatments tailored to your needs.",
    image: "/salon/service-skin-facials.jpg",
    alt: "Skincare and facial beauty treatments at Karthikeya Lavish Looks",
  },
  {
    slug: "makeup",
    name: "Makeup",
    icon: Brush,
    description: "Makeup looks for occasions, celebrations and special moments.",
    image: "/salon/gallery-makeup-1.png",
    alt: "Occasion, celebration and bridal makeup artistry at Karthikeya Lavish Looks",
  },
  {
    slug: "nails",
    name: "Nails",
    icon: Hand,
    description: "Clean, polished and occasion-ready nail services.",
    image: "/salon/service-nails.jpg",
    alt: "Clean, polished manicure and occasion-ready nail services at Karthikeya Lavish Looks",
  },
  {
    slug: "mehndi-bridal",
    name: "Mehndi & Bridal",
    icon: Flower2,
    description: "Mehndi, bridal makeup and occasion-ready beauty services.",
    image: "/salon/gallery-mehndi-1.png",
    alt: "Intricate bridal mehndi and occasion beauty services at Karthikeya Lavish Looks",
  },
  {
    slug: "mens-grooming",
    name: "Men's Grooming",
    icon: User,
    description: "Professional hair, beard and grooming services for men.",
    image: "/salon/gallery-grooming-1.png",
    alt: "Professional haircuts, beard grooming and hot towel shaves for men at Karthikeya Lavish Looks",
  },
];

/* =================================================================
   3. WHAT WE OFFER - Six category cards linking to /services
   ================================================================= */
function WhatWeOfferSection() {
  return (
    <section
      id="what-we-offer"
      aria-labelledby="offerings-heading"
      className="py-16 sm:py-24 bg-ivory"
    >
      <div className="container-atelier">
        <div className="text-center max-w-[660px] mx-auto">
          <Reveal>
            <Kicker>SERVICES &amp; EXPERTISE</Kicker>
            <h2 id="offerings-heading" className="text-h2 text-ink mt-3">
              What We Offer
            </h2>
            <p className="mt-3.5 text-muted text-[1.0625rem] leading-relaxed">
              Explore our six dedicated service categories designed for complete head-to-toe beauty and grooming.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {whatWeOfferCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.slug} delay={index * 60}>
                <article className="group h-full flex flex-col justify-between rounded-card bg-porcelain border border-hairline/80 overflow-hidden shadow-[0_8px_24px_rgba(34,48,45,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(34,48,45,0.12)] hover:border-teal/40">
                  {/* Category Image Header */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand">
                    <Image
                      src={cat.image}
                      alt={cat.alt}
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
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-hairline/40">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep transition-colors"
                      >
                        Explore Services
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
   4. UNISEX BEAUTY & GROOMING - Strong visual section
   ================================================================= */
function UnisexShowcaseSection() {
  return (
    <section
      id="unisex-showcase"
      aria-labelledby="unisex-heading"
      className="bg-sand border-y border-hairline/70 py-16 sm:py-24"
    >
      <div className="container-atelier">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <Reveal>
            <Kicker>FOR WOMEN &amp; MEN</Kicker>
            <h2 id="unisex-heading" className="text-h2 text-ink mt-3">
              Beauty &amp; Grooming for Everyone
            </h2>
            <p className="mt-3.5 text-muted text-[1.0625rem] leading-relaxed">
              From women&apos;s hair, makeup and mehndi to men&apos;s hair, beard and grooming services, Karthikeya Lavish Looks brings professional beauty and grooming together in one place.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Women's Beauty & Bridal Card */}
          <Reveal delay={80}>
            <div className="rounded-card bg-porcelain border border-hairline/80 overflow-hidden shadow-sm flex flex-col h-full">
              <div className="relative aspect-[16/10] w-full bg-sand">
                <Image
                  src="/salon/gallery-hair-1.png"
                  alt="Women's beauty, hair styling and bridal care at Karthikeya Lavish Looks"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[0.75rem] font-bold tracking-[0.16em] uppercase text-teal">
                    WOMEN&apos;S SERVICES
                  </span>
                  <h3 className="text-h3 text-ink text-[1.35rem] font-semibold mt-1.5">
                    Hair, Makeup &amp; Bridal Artistry
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] text-muted leading-relaxed">
                    Custom haircuts, smoothening treatments, facials, party and bridal makeup, alongside intricate henna artistry tailored to every celebration.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-hairline/40">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep"
                  >
                    View Women&apos;s Services
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Men's Grooming Card */}
          <Reveal delay={160}>
            <div className="rounded-card bg-porcelain border border-hairline/80 overflow-hidden shadow-sm flex flex-col h-full">
              <div className="relative aspect-[16/10] w-full bg-sand">
                <Image
                  src="/salon/gallery-hair-2.png"
                  alt="Men's haircuts, beard styling and hot towel shave at Karthikeya Lavish Looks"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[0.75rem] font-bold tracking-[0.16em] uppercase text-teal">
                    MEN&apos;S SERVICES
                  </span>
                  <h3 className="text-h3 text-ink text-[1.35rem] font-semibold mt-1.5">
                    Precision Hair &amp; Beard Grooming
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] text-muted leading-relaxed">
                    Contemporary fades, scissor cuts, precise beard shaping, soothing hot-towel clean shaves, and revitalizing head massage and skin therapies.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-hairline/40">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep"
                  >
                    View Men&apos;s Services
                    <ArrowRight size={14} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   5. REAL WORK / INSTAGRAM - Social section
   ================================================================= */
function RealWorkInstagramSection() {
  return (
    <section
      id="instagram-journey"
      aria-labelledby="insta-heading"
      className="py-16 sm:py-24 bg-ivory"
    >
      <div className="container-atelier">
        <div className="text-center max-w-[660px] mx-auto mb-12">
          <Reveal>
            <Kicker>COMMUNITY &amp; CRAFT</Kicker>
            <h2 id="insta-heading" className="text-h2 text-ink mt-3">
              See the Looks. Follow the Journey.
            </h2>
            <p className="mt-3.5 text-muted text-[1.0625rem] leading-relaxed">
              Follow {salon.instagramHandle} for hair transformations, mehndi, makeup and men&apos;s grooming.
            </p>
            <div className="mt-6">
              <Button
                as="link"
                href={salon.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="gap-2"
              >
                <Instagram size={17} strokeWidth={2} />
                Follow on Instagram
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
          {instagramShowcase.map((item, index) => (
            <Reveal key={item.src} delay={index * 60}>
              <a
                href={salon.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-square rounded-img overflow-hidden bg-sand shadow-sm border border-hairline/50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram size={24} className="text-white" />
                  </div>
                </div>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[0.75rem] font-semibold text-teal uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[0.8125rem] text-muted font-medium">
                    {item.caption}
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   6. LOCATION & BUSINESS INFORMATION - Strict adherence to verified data
   ================================================================= */
function LocationHoursSection() {
  return (
    <section
      id="location-details"
      aria-labelledby="location-heading"
      className="bg-sand border-y border-hairline/70 py-16 sm:py-24"
    >
      <div className="container-atelier">
        <div className="max-w-[580px] mb-12">
          <Reveal>
            <Kicker>VISIT THE ATELIER</Kicker>
            <h2 id="location-heading" className="text-h2 text-ink mt-3">
              Location &amp; Business Information
            </h2>
            <p className="mt-3 text-muted text-[1.0625rem]">
              We welcome you to visit us in Warangal for your styling and grooming needs.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Address & Plus Code Card */}
          <div className="lg:col-span-6">
            <Reveal delay={60}>
              <div className="rounded-card bg-porcelain border border-hairline/80 p-8 shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-teal mb-4">
                    <MapPin size={22} strokeWidth={1.8} />
                    <span className="text-[0.8125rem] font-bold uppercase tracking-[0.16em]">
                      OUR ADDRESS
                    </span>
                  </div>
                  <h3 className="text-h3 text-ink text-[1.35rem] font-semibold mb-3">
                    Karthikeya Lavish Looks
                  </h3>
                  <address className="not-italic text-[1rem] leading-[1.7] text-muted">
                    Road No. 14A, opposite O City Main Road,
                    <br />
                    Kashibugga Society Colony,
                    <br />
                    Kashibugga, Azam Jahi Mills Colony,
                    <br />
                    Warangal, Telangana 506002
                  </address>

                  <div className="mt-6 pt-5 border-t border-hairline/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[0.75rem] uppercase font-bold text-muted tracking-wider block">
                        Plus Code
                      </span>
                      <span className="font-mono text-[0.9375rem] font-semibold text-ink">
                        {salon.plusCode}
                      </span>
                    </div>
                    <a
                      href={salon.mapLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.875rem] font-semibold text-teal hover:text-teal-deep"
                    >
                      <Navigation size={15} />
                      Open in Google Maps
                    </a>
                  </div>

                  <div className="mt-5 pt-4 border-t border-hairline/50">
                    <span className="text-[0.75rem] uppercase font-bold text-muted tracking-wider block">
                      Instagram
                    </span>
                    <a
                      href={salon.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-teal hover:text-teal-deep mt-0.5"
                    >
                      <Instagram size={16} />
                      {salon.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Schedule & Verified Hours Card */}
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="rounded-card bg-porcelain border border-hairline/80 p-8 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-teal">
                    <Clock size={22} strokeWidth={1.8} />
                    <span className="text-[0.8125rem] font-bold uppercase tracking-[0.16em]">
                      OPERATING HOURS
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-pill bg-sand text-teal text-[0.75rem] font-bold">
                    Schedule
                  </span>
                </div>

                {/* Verified Highlight */}
                <div className="mb-6 p-4 rounded-xl bg-sand/60 border border-hairline/60">
                  <div className="flex items-center gap-2 text-teal font-semibold text-[0.9375rem]">
                    <CheckCircle2 size={17} />
                    <span>Verified Monday Hours</span>
                  </div>
                  <p className="mt-1 font-sans font-bold text-[1.25rem] text-ink">
                    8:00 AM – 9:00 PM
                  </p>
                </div>

                {/* Full Week Schedule List */}
                <ul className="space-y-2.5 text-[0.9375rem]">
                  {salon.hours.map((item) => (
                    <li
                      key={item.day}
                      className="flex items-center justify-between py-1 border-b border-hairline/30 last:border-0"
                    >
                      <span className="font-medium text-ink">{item.day}</span>
                      <span
                        className={
                          item.verified
                            ? "font-semibold text-teal"
                            : "text-muted/80 italic text-[0.875rem]"
                        }
                      >
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-[0.8125rem] text-muted italic">
                  Note: Verified Monday hours are 8:00 AM – 9:00 PM. Hours for remaining days are to be confirmed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =================================================================
   7. ABOUT PAGE CTA - Let's Create Your Next Look
   ================================================================= */
function AboutCTASection() {
  return (
    <section
      id="about-cta"
      aria-labelledby="about-cta-heading"
      className="py-16 sm:py-24 bg-ivory text-center"
    >
      <div className="container-atelier max-w-[660px]">
        <Reveal>
          <FeatherMotif size={32} className="mx-auto mb-4 text-gold" />
          <h2
            id="about-cta-heading"
            className="text-display text-ink text-[clamp(2.25rem,4.8vw,3.75rem)] font-serif font-semibold leading-tight"
          >
            Let&apos;s Create Your Next Look
          </h2>
          <p className="mt-4 text-[1.0625rem] text-muted leading-relaxed">
            Discover professional beauty and grooming services at Karthikeya Lavish Looks.
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
