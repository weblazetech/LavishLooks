---
version: alpha
name: "Karthikeya Lavish Looks - Peacock Atelier"
description: >-
  Warm, editorial luxury identity for Karthikeya Lavish Looks, a unisex beauty
  salon in Kashibugga, Warangal. Ivory porcelain surfaces, deep peacock teal,
  bridal gold, and high-contrast Garamond display type. Built for two jobs at
  once: booking everyday grooming (men and women) and winning bridal.
colors:
  primary: "{colors.teal}"
  ivory: "#FAF6F0"
  sand: "#F3ECE2"
  porcelain: "#FFFDF9"
  ink: "#22302D"
  muted: "#5A655F"
  teal: "#0F6B62"
  teal-deep: "#0B5148"
  gold: "#A16207"
  hairline: "#E3D9CB"
typography:
  display:
    fontFamily: Cormorant Garamond
    fontSize: 4.5rem
    fontWeight: 600
    lineHeight: 1.08
  h2:
    fontFamily: Cormorant Garamond
    fontSize: 3rem
    fontWeight: 600
    lineHeight: 1.15
  h3:
    fontFamily: Montserrat
    fontSize: 1.375rem
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  button:
    fontFamily: Montserrat
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.02em"
  price:
    fontFamily: Montserrat
    fontSize: 1.25rem
    fontWeight: 700
    lineHeight: 1.2
  kicker:
    fontFamily: Montserrat
    fontSize: 0.8125rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
  pull:
    fontFamily: Cormorant Garamond
    fontSize: 1.5rem
    fontWeight: 500
    lineHeight: 1.4
  caption:
    fontFamily: Montserrat
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.5
rounded:
  pill: 999px
  card: 20px
  img: 16px
  input: 12px
spacing:
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  section: 88px
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: 14px 30px
  button-primary-hover:
    backgroundColor: "{colors.teal-deep}"
  button-ghost:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 13px 28px
  card:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 28px 24px
  service-card:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 24px
  service-row:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: 14px
    padding: 16px 20px
  badge-gold:
    backgroundColor: "{colors.gold}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  badge-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: 6px 14px
  band-bridal:
    backgroundColor: "{colors.gold}"
    textColor: "#FFFFFF"
    rounded: "{rounded.card}"
    padding: 40px 32px
  input:
    backgroundColor: "{colors.sand}"
    textColor: "{colors.ink}"
    rounded: "{rounded.input}"
    padding: 14px 18px
  kicker:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.teal}"
    padding: 0
  nav-pill:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: 10px 12px
  review-card:
    backgroundColor: "{colors.porcelain}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: 24px
---

# Karthikeya Lavish Looks - Peacock Atelier Design System

## Overview

Karthikeya Lavish Looks is a unisex beauty parlour in Kashibugga, Warangal: hair, skin, nails, hair removal and makeup services, an active Instagram of hair transformations, mehndi and men's grooming, a 5.0-star JustDial rating (11 reviews), and open-early-to-late hours (8 AM to 9 PM on Mondays). The identity is built on one idea: **the peacock atelier**. Karthikeya's vahana is the peacock, so the brand pairs deep peacock teal with bridal gold on warm ivory - premium, culturally rooted, and unmistakably not a template.

- Brand name in copy: **Karthikeya Lavish Looks** (title case, all three words). The wordmark is a stacked lockup: "KARTHIKEYA" in tracked Montserrat caps above "Lavish Looks" in Cormorant Garamond. Never "Karthikeya's Lavish Looks" (no possessive), never "K L Lavish", never the old listing name (see Do's and Don'ts).
- Voice: warm, assured, local pride. Warangal's own unisex studio. Never corporate, never sleazy-salon-flyer.
- Design read: premium unisex salon + bridal destination. Variance 6, Motion 5, Density 5. Light theme (ivory), locked site-wide - no dark sections, no theme flipping.
- Build stack: Next.js App Router + TypeScript + Tailwind v4 + motion/react + @react-three/fiber (Three.js). Five pages (/, /services, /bridal, /gallery, /contact). This file styles the stack; PROMPT.md in the same folder is the generation prompt that consumes it.
- This system is deliberately distinct from the studio's other builds: no dark charcoal food-chain palette, no boho forest cream. If it doesn't feel like ivory, teal and gold in warm daylight, it isn't Karthikeya Lavish Looks.

## Colors

| Token | Hex | Role |
|---|---|---|
| ivory | #FAF6F0 | Page base. Warm ivory, never #FFFFFF. |
| sand | #F3ECE2 | Alternating section tint one step down from ivory. |
| porcelain | #FFFDF9 | Card, badge and input-panel surface. |
| ink | #22302D | Primary text. Deep teal-black, never pure black. |
| muted | #5A655F | Secondary text, captions, helper text. |
| teal | #0F6B62 | THE accent. CTAs, kickers, links, active states. Peacock teal. |
| teal-deep | #0B5148 | Teal hover and pressed states. |
| gold | #A16207 | Prices, stars, badges, bridal band, feather motif line-art. |
| hairline | #E3D9CB | 1px borders and dividers (used at 60% opacity). |

Contrast evidence (WCAG, computed Sep 7, 2026): ink on ivory 12.76:1; ink on porcelain 13.52:1; ink on sand 11.71:1; muted on ivory 5.64:1; muted on sand 5.17:1; ivory on teal 5.91:1; white on teal 6.36:1; teal on ivory 5.91:1; teal on sand 5.43:1; gold on ivory 4.57:1; gold on porcelain 4.92:1; white on gold 4.92:1; ivory on teal-deep 8.54:1.

**Accent rules:**
- Every pair in the table passes AA for body text (4.5:1) - this system needs NO large-text exemptions. Teal text is legal at any size on any surface.
- White (not ivory) sits on gold badges and the bridal band; ivory (not white) is the label color on teal buttons.
- Gold is functional prestige: prices, stars, bridal band, feather motif. Never body copy, never a second CTA color.
- No pink (#EC4899-family), no lavender or purple, no blue gradients, no pure black (#000000) fills, no pure white (#FFFFFF) page backgrounds. One accent (teal) + one prestige color (gold). That is the whole palette.

## Typography

| Token | Font | Weight | Use |
|---|---|---|---|
| display / h2 | Cormorant Garamond | 600 | H1, H2, wordmark line "Lavish Looks" |
| pull | Cormorant Garamond | 500 (italic) | One pull-line per section, max |
| h3 | Montserrat | 600 | Card titles, section subheads |
| body | Montserrat | 400/500 | Body copy, nav, labels |
| button | Montserrat | 600 | All button labels |
| price | Montserrat | 700 | Prices, big stats (in gold) |
| kicker | Montserrat | 600, 0.18em | Tracked caps kickers (teal) |
| caption | Montserrat | 500 | Captions, helper text, hours |

- Scale (px): 14, 16, 18, 22, 28, 40, 56, 72. H1 uses `clamp(2.75rem, 6vw, 4.5rem)`, max two lines.
- Cormorant Garamond is the bridal-editorial display voice; its italic (pull token) appears at most once per section. Montserrat is the clean geometric UI voice. Nothing else.
- Banned: Inter, Roboto, Arial, Open Sans, Poppins, Playfair Display (the slop default), Lalezar, and any italic serif outside the pull token. Emphasis is weight, color and size - never a mixed-family accent word, never all-caps Cormorant.
- Kickers: Montserrat 600 tracked caps in teal, 2-4 words. Teal passes AA at any size, so kickers may be small.
- Body max-width 65ch. Prices and stats always Montserrat 700 in gold, never Cormorant.
- Telugu note: v1 ships English copy. If Telugu headings are added later, load Noto Serif Telugu as the display fallback - never fake-transliterate Latin display fonts.

## Layout

- Container: max-width 1160px, centered, 20px side padding.
- Section gap: 88px desktop; `clamp(3.5rem, 9vw, 5.5rem)` mobile. Ivory and sand sections alternate to give the page a soft rhythm; never stack two same-tint sections without a hairline or band between them.
- Grids: CSS Grid only (never flexbox percentage math). 3-col collapses to 2 at 900px, 1 at 620px. Split sections (1fr 1fr) collapse at 860px.
- Breakpoints: 640 / 768 / 1024 / 1280 / 1536. Below 768px everything is single column, `w-full`, px-4; no horizontal scroll anywhere; touch targets at least 44px.
- **Hero (home):** asymmetric split. Left: kicker + headline (max 2 lines) + subtext (max 20 words) + two CTAs. Right: the WebGL "Lustrous Strands" canvas (see Three.js System) inside a sand-gradient panel, with the salon photograph (styling chair / transformation shot) composited over it and a soft gold glow at the image edge. All four text elements visible without scrolling; never `h-screen`, use `min-h-[100dvh]`; hero top padding max 6rem.
- Inner-page hero: sand band, centered display title, 84px/56px padding desktop/mobile.
- No overlapping elements; every element owns its spatial zone.

## Elevation & Depth

| Token | Value | Use |
|---|---|---|
| shadow-card | 0 8px 24px rgba(34, 48, 45, 0.08) | resting cards on ivory |
| shadow-lift | 0 14px 30px rgba(34, 48, 45, 0.12) | hover lift |

- Shadows are tinted to the ink hue, never pure black, never harsh. Cards float gently - this is a calm atelier, not a neon arcade.
- **Glow policy:** a soft gold glow is allowed in exactly two places - the edge of the hero photograph and behind the bridal band's headline. Never glowing text, never neon gradients, never more than one glow per viewport.
- Cards only where elevation communicates hierarchy (service cards, gallery tiles, review cards, form panels). Elsewhere, group with spacing and hairlines.
- Z-index discipline: sticky nav, overlays, modals, tooltips only. No z-[9999].

## Shapes

- Buttons, chips, badges, tabs: full pill (999px).
- Cards and service cards: 20px.
- Images and gallery tiles: 16px.
- Form inputs: 12px.
- Service rows (price list): 14px.
- That is the entire radius system - consistent everywhere, no exceptions. Dividers between service rows are dotted gold leaders, never solid gray lines. Peacock-feather line-art (gold, 1.5px stroke) may appear as: a small glyph beside the wordmark, a divider ornament, and a corner accent on the bridal band. Nowhere else, nothing larger than 48px.

## Components

- **nav** - floating porcelain pill, detached from the top edge (12px margin, centered, max-width fit), 1px hairline border, stacked wordmark left, links center (Services, Bridal, Gallery, Contact), teal "Book an Appointment" pill right. Collapses to a full-screen sand overlay menu below 820px with staggered link reveals (hamburger morphs into an X).
- **hero** - asymmetric split per Layout; the WebGL "Lustrous Strands" canvas sits behind the right-hand photo in a sand-gradient panel; teal primary CTA "Book an Appointment" + porcelain ghost "View Services"; gold glow on the photo edge only.
- **trust-strip** - single row of four block facts on sand: 5.0★ (11 JustDial reviews) / Unisex Studio / Kashibugga, Warangal / Open 8 AM - 9 PM. Montserrat 700 gold numbers, caption labels. Real facts only.
- **service-categories** - 6 cards (Hair; Skin & Facials; Makeup; Nails; Mehndi & Bridal; Men's Grooming): icon, name (h3), one-line description, "View services" text link in teal. Real categories only, no empty cells.
- **why-row** - split section with three promises on ivory: trained stylists, hygienic tools and single-use disposables, honest pricing with a printed rate card. Each promise: Montserrat 600 title + one body line. Do not invent certifications - write only what the salon can stand behind.
- **bridal-band** - full-width gold band: display headline "Bridal & Occasion Glamour", white subtext about makeup, hair and henna for the big day, white ghost CTA "Book an Appointment". This band is the one place gold leads the composition, and the one place the gold sheen drift (see Motion) is allowed.
- **gallery-strip** - 6-8 transformation tiles (16px radii): hair, mehndi, grooming, makeup stills from the salon's own Instagram. Captions sit below images, never on them. Lightbox on click.
- **reviews** - the rating stat + platform attribution: "5.0★ from 11 JustDial reviews" + a teal "Read reviews on JustDial" link. No invented quotes - when the salon provides real review text later, quote max 3 lines with attribution.
- **booking-form** - porcelain panel: Name, Phone, Service (select), Preferred Date/Time, Notes. Labels above fields (never placeholder-as-label), inline error text below in teal-deep on sand fields, submit = "Book an Appointment".
- **footer** - ivory base with a hairline top border, 4 columns: stacked wordmark + tagline; hours (verified line + [CONFIRM] note); contact ([PHONE], [WHATSAPP] WhatsApp, Instagram @k_lavishlooks); quick links + address with the plus code XJJ7+7Q.
- **service-row** - porcelain row, 44px photo thumb (optional), name, dotted gold price leader, gold price, category tag. Every price is a [PRICE] placeholder until the salon's real rate card arrives.
- **input** - sand field, ink text, hairline border, focus ring 2px teal, labels above fields, inline error text below.
- **buttons** - filled teal (ivory label), ghost porcelain (ink label). Hover: teal deepens to teal-deep, translateY(-2px) + shadow-lift. Active: translateY(0), scale 0.98.
- **states** - every interactive element has hover, active, and a 2px teal focus ring. Loading = skeleton shimmer matching the card shape (never a spinner). Empty = composed "no services match" card with a reset pill. Every form field has a real error state.

## Do's and Don'ts

**Do**
- Use real salon photography: transformation close-ups, styled hair, mehndi hands, clean styling stations in warm daylight. Soft, glossy, editorial grade.
- Lead every conversion path with the real actions: "Book an Appointment" (booking intent, one label everywhere) and "View Services" (browse intent, one label everywhere).
- Quote the verified facts exactly: 5.0 stars, 11 JustDial reviews, unisex, Kashibugga Warangal, Monday 8 AM - 9 PM.
- Keep teal for CTAs, kickers and links; keep gold for prices, stars and the bridal band; keep ivory/porcelain/sand for surfaces.
- Write warm, confident, local copy in plain English.

**Don't**
- Never invent prices, packages, review quotes, stylist names, certifications, or hours. Placeholders must be explicit [PRICE]/[PHONE]/[CONFIRM]-style tokens, never realistic fakes.
- Never use pink or lavender, purple gradients, blue gradients, or a dark theme section on the ivory page.
- Never use Inter, Roboto, Poppins, Playfair Display, Lalezar, or emoji as icons.
- Never render the old listing name "Lavish Looks The Family Salon", the Jalandhar "Lavish Looks Salon", or any price from those other businesses (their ₹199/₹699/₹499/₹1499 menu is a different salon in a different city).
- Never misspell the brand: it is **Karthikeya Lavish Looks** - not Karthikeya Lavishlook, Karthikeya's Lavish Looks, or KL Lavish Looks.
- Never ship a section with `opacity: 0` defaults; content is visible without JavaScript, reveal effects are progressive enhancement only.
- Never ship a second WebGL canvas or scroll-tied camera moves; the 3D layer lives on the Home hero only.
- Never put text pills on photos; captions sit below images.

## Motion

- Reveals: fade-up 20px, 600ms ease-out, 100ms stagger, via IntersectionObserver or scroll-linked APIs. Never `window.addEventListener('scroll')`.
- Hover: translateY(-2px) lift, 150-200ms, shadow-card to shadow-lift.
- Ambient (exactly one): a slow gold sheen drift across the bridal band headline, 8s loop, pauses on hover and under reduced motion.
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` family. Never linear, never default ease-in-out.
- Animate only transform and opacity. `prefers-reduced-motion: reduce` disables reveals, sheen drift, smooth scroll, AND the WebGL layer (static fallback renders instead) - non-negotiable. The WebGL layer is specified in the next section.

## Three.js System (single WebGL signature)

- Stack: @react-three/fiber (+ drei) on Next.js App Router. The canvas is dynamically imported (`next/dynamic`, `ssr: false`) inside a `'use client'` leaf component; the page itself stays a Server Component.
- Scene: Home hero ONLY - **"Lustrous Strands"**: a soft shimmer field (instanced particle sprites, gold #A16207 and peacock teal #0F6B62, ~1200 desktop / ~600 mobile, gentle upward drift like light catching hair) plus three slow-undulating gold ribbon strands (TubeGeometry along animated CatmullRom curves, 0.8-1.4px visual weight) behind the salon photograph. Normal blending only - the page is IVORY, so no additive glow tricks; particles read as soft gold/teal flecks on a sand-gradient panel, never neon.
- Post: none. No bloom, no glow passes - on a light background they wash out and look cheap. The strands carry the scene alone.
- Motion: particles drift up 8-14px/s with a slight sine sway; ribbons undulate on a ~10s loop; pointer parallax max 3 degrees, desktop only. Reduced-motion or no-WebGL renders a static sand-gradient panel + photo with identical content - no canvas node in the DOM.
- Performance guardrails: DPR clamped [1, 2]; particle count bounded and halved on mobile; frameloop paused when offscreen via IntersectionObserver; geometries/materials disposed on unmount; no OrbitControls, no autorotate, no external HDRI; the 3D layer never blocks LCP (photo + copy render without it).
- Hard limits: exactly ONE canvas in the whole site, on the Home hero only. No second 3D scene, no WebGL on interior pages, no scroll-tied camera moves.

## Imagery

- Priority: real brand photography (Instagram @k_lavishlooks reels - hair transformations, mehndi, grooming) downloaded at build time (IG CDN URLs expire); image-gen only to fill hero and service tiles, labeled as generated; final fallback is labeled placeholder slots, never fake div mockups.
- Hero: a warm-daylight salon photograph (styling in progress or a finished transformation), soft background, so the subject is the brightest object on the page.
- Grade: warm, soft, glossy editorial; consistent across all tiles (same temperature, no mixed daylight/studio looks).
- No text pills overlaid on photos; captions sit below images.

## Copy & Voice

- Headline max 8 words, subtext max 25 words, one visual or CTA per block.
- Zero em-dashes anywhere visible - hyphens only. Zero filler verbs ("elevate", "seamless", "unleash"). Zero fake numbers.
- CTA labels: "Book an Appointment" and "View Services" - exactly these, everywhere.
- Reviews are stat + attribution only until real quotes exist; never fabricated.

## Canonical Brand Data (verified Sep 7, 2026 - use verbatim)

- Canonical name: Karthikeya Lavish Looks (title case). IG handle: @k_lavishlooks (77 followers, active Aug 2026, reels of hair transformations, mehndi, men's grooming).
- Category: unisex beauty parlour. Rating: 5.0 stars, 11 JustDial reviews. Google Maps place also rates 5.0 (count not visible in limited view - never cite a GMaps count).
- Address: Road No. 14A (opposite O City Main Road), Kashibugga Society Colony, Kashibugga, Azam Jahi Mills Colony, Warangal, Telangana 506002. Plus code: XJJ7+7Q.
- Hours: Monday 8:00 AM - 9:00 PM (verified). Full week: [CONFIRM] before publishing any "open daily" claim.
- Services (listing-level): hair care, skin care, nails, hair removal, makeup. Unisex men's grooming and mehndi confirmed via Instagram content.
- Phone: not publicly listed - ship [PHONE] and [WHATSAPP] placeholders; fill before launch.
- Prices: not publicly listed - every price is a [PRICE] placeholder until the salon's rate card arrives. The Jalandhar Google-Sites "Lavish Looks" price list (₹199/₹699/₹499/₹1499) belongs to a different salon in Punjab and is banned from this project.
- Established 01-2023: belongs to the predecessor listing name; ship only with owner confirmation.
- Predecessor listing: "Lavish Looks The Family Salon Hair & Beauty", Kashibugga Society Colony (same colony, likely the same business renamed) - evidence only, never rendered on the site.
