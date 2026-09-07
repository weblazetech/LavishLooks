# Karthikeya Lavish Looks Website - Build Prompt (PROMPT.md)

Master generation prompt for the Karthikeya Lavish Looks (unisex beauty salon, Kashibugga, Warangal) website. Use with any AI site builder (Stitch, v0, Lovable, Cursor) or as the build contract for the real Next.js implementation.

**Stack (required):** Next.js App Router + TypeScript + Tailwind v4 + `motion/react` for UI animation + `@react-three/fiber` (Three.js) for the 3D layer. Multiple pages (5 routes, listed below). Light ivory theme, locked site-wide. Exactly ONE WebGL canvas (Home hero only).

**How to use**
- `DESIGN.md` (same folder) is the design-system source of truth. Feed both files to the builder.
- Generate the Home page first with the Master Prompt below. Then use the interior-page prompts, one page at a time.
- Use the Section-Edit prompts for targeted changes only - one change per prompt.
- Wherever `[PHONE]`, `[WHATSAPP]`, `[PRICE]` or `[CONFIRM]` appears, fill from the salon's real data before shipping. Never invent prices, review quotes, hours, or certifications.

---

## Master Prompt - full site (run this first)

A warm, editorial, multi-page Next.js website for Karthikeya Lavish Looks, a 5.0-rated unisex beauty salon in Kashibugga, Warangal: peacock-teal booking CTAs, a gold bridal band, real transformation gallery, service price list, and a booking form. Premium Indian atelier, never template, never pink/lavender.

**DESIGN SYSTEM (REQUIRED):**
- Platform: Web, Next.js App Router + TypeScript + Tailwind v4, Desktop-first, responsive at 375 / 768 / 1024 / 1440
- Theme: Light only ("Peacock Atelier"). Background: Ivory #FAF6F0 (warm ivory, never #FFFFFF). Section tint: Sand #F3ECE2. Cards: Porcelain #FFFDF9
- Text Primary: Ink #22302D. Text Secondary: Muted #5A655F
- Primary Accent: Peacock Teal #0F6B62 for CTAs, kickers, links (hover #0B5148)
- Prestige: Bridal Gold #A16207 for prices, stars, badges, bridal band, feather motif
- Hairline: Warm border #E3D9CB at 60% opacity
- Fonts: Cormorant Garamond (display H1/H2 600, italic pull 500) + Montserrat (UI, body 400, buttons 600, prices 700, kickers 600 tracked 0.18em) via `next/font`, no other fonts
- Wordmark: stacked lockup - "KARTHIKEYA" tracked Montserrat caps above "Lavish Looks" in Cormorant Garamond
- Buttons: full pill (999px), teal bg with ivory label (primary), porcelain bg with ink label (ghost). Cards 20px. Images 16px. Inputs 12px. Service rows 14px
- Motion: fade-up 20px reveals with 100ms stagger (`motion/react` whileInView), hover lift translateY(-2px), easing cubic-bezier(0.16, 1, 0.3, 1), transform/opacity only, ONE gold sheen drift on the bridal band (8s loop), `prefers-reduced-motion` disables everything
- 3D (Three.js via @react-three/fiber): ONE WebGL canvas on the Home hero - a "Lustrous Strands" field (soft gold #A16207 + peacock teal #0F6B62 shimmer particles drifting upward, ~1200 desktop / ~600 mobile) plus three slow-undulating gold ribbon strands (TubeGeometry on animated CatmullRom curves) behind the salon photo, normal blending tuned for the ivory background (no additive glow). Dynamic import with `ssr: false`, DPR clamped [1, 2], frameloop paused when offscreen (IntersectionObserver), pointer parallax max 3 degrees desktop-only, all disposed on unmount. Static CSS sand-gradient fallback when WebGL is unavailable; static poster under `prefers-reduced-motion`
- Icons: Lucide thin-line SVG icons only (scissors, sparkles, brush, hand-heart etc), no emoji as icons
- States: every button has hover/active/2px teal focus ring; loading = skeleton shimmer; forms have inline error states; labels above inputs

**Pages (App Router):**
1. `/` - Home: split hero, trust strip, service categories, bridal band, gallery strip, why-row, reviews, booking CTA, footer
2. `/services` - full service list: category pills, rows with dotted gold leaders, [PRICE] placeholders, booking link
3. `/bridal` - bridal & occasion: packages overview, real bridal gallery, enquiry/booking form
4. `/gallery` - transformation grid from the salon's Instagram reels stills, category filters, lightbox
5. `/contact` - booking form (Name, Phone, Service, Preferred Date/Time, Notes), map embed, hours, WhatsApp/Instagram links

**Home Page Structure:**
1. **Nav:** floating porcelain pill, detached from top, stacked wordmark left, links (Services, Bridal, Gallery, Contact) center, teal "Book an Appointment" pill right; hamburger + full-screen sand overlay below 820px
2. **Hero:** left - kicker "WARANGAL'S UNISEX BEAUTY STUDIO", H1 "Look Lavish. Every Single Day.", subtext "Hair, skin, makeup, mehndi and men's grooming in Kashibugga - Warangal's 5.0-rated unisex salon.", CTAs "Book an Appointment" (teal) + "View Services" (ghost); right - "Lustrous Strands" WebGL panel (gold + teal shimmer particles and three undulating gold ribbon strands) behind the warm daylight salon photo with a soft gold glow at the image edge
3. **Trust strip:** sand band, four block facts: 5.0★ (11 JustDial reviews) / Unisex Studio / Kashibugga, Warangal / Open 8 AM - 9 PM (Monday verified)
4. **Service categories:** 6 porcelain cards - Hair; Skin & Facials; Makeup; Nails; Mehndi & Bridal; Men's Grooming - each with Lucide icon, one-line description, teal "View services" link to /services
5. **Bridal band:** full-width gold band, display headline "Bridal & Occasion Glamour", white subtext "Makeup, hair and henna crafted for your big day - booked by appointment only.", white ghost CTA "Book an Appointment", slow gold sheen drift on the headline
6. **Gallery strip:** 6-8 transformation tiles from the salon's real Instagram (hair, mehndi, grooming, makeup), 16px radii, captions below images, link to /gallery
7. **Why-row:** split section, three promises: Trained stylists / Hygienic tools, single-use disposables / Honest pricing with a printed rate card
8. **Reviews:** "5.0★ from 11 JustDial reviews" + teal "Read reviews on JustDial" link; no quotes until the salon provides real ones
9. **Booking CTA band:** sand band, display headline "Ready when you are.", subtext "Walk in or book ahead - the chair is waiting.", teal "Book an Appointment" CTA linking to /contact
10. **Footer:** ivory with hairline top border, 4 columns: stacked wordmark + tagline "Warangal's unisex beauty studio"; hours (Monday 8 AM - 9 PM verified + "[CONFIRM] full week" note); contact ([PHONE], WhatsApp [WHATSAPP], Instagram @k_lavishlooks); address (Road No. 14A, opposite O City Main Road, Kashibugga Society Colony, Warangal 506002, plus code XJJ7+7Q) + quick links

---

## Interior Page Prompts

### /services - Services & Prices Page
A clean, editorial service menu for Karthikeya Lavish Looks with category pills and a dotted-leader price list.

**DESIGN SYSTEM (REQUIRED):** same Peacock Atelier tokens as the Master Prompt (Ivory #FAF6F0 base, Porcelain #FFFDF9 cards, Ink #22302D text, Teal #0F6B62 accents, Gold #A16207 prices, Cormorant Garamond display + Montserrat UI).

**Page Structure:**
1. Inner hero: sand band, display title "Services & Prices", subtext "Honest pricing - every rate printed before you sit down."
2. Sticky category pills (porcelain pills, active = teal), scroll-synced
3. Service rows: porcelain rows, name, category tag, dotted gold price leader, gold [PRICE], per-category "Book an Appointment" link
4. Rate-card note: caption line "Prices shown are the salon's printed rate card. Confirm final quotes on the phone for combination services." - only after real prices arrive; until then the [PRICE] placeholders stand
5. Empty state: composed "no services match" card with a reset pill
6. Footer: shared site footer

### /bridal - Bridal & Occasion Page
A gold-accented bridal pitch page for Karthikeya Lavish Looks: the high-ticket conversion path for Warangal weddings.

**Page Structure:**
1. Inner hero: display "Your Wedding Day, Perfected." + subtext "Bridal makeup, hair and henna by appointment."
2. Package overview: three porcelain cards (Engagement / Wedding Day / Family & Guests) - contents listed in plain lines, every price a [PRICE] placeholder, no invented package contents beyond makeup, hair and henna
3. Bridal gallery: real bridal/transformation images (IG or image-gen labeled), 16px radii, lightbox
4. Booking note: "Bridal bookings need a consultation. Share your date and we'll hold a slot." + teal CTA to /contact
5. Footer: shared site footer

### /gallery - Transformations Page
A visual-first gallery page proving the salon's craft with its own work.

**Page Structure:**
1. Inner hero: display "Fresh from the chair."
2. Filter pills: All / Hair / Mehndi / Makeup / Grooming
3. Masonry grid: real IG reel stills (downloaded at build time - IG CDN URLs expire), 16px radii, lightbox, captions below images
4. Instagram band: "More transformations on Instagram" + @k_lavishlooks link pill
5. Footer: shared site footer

### /contact - Booking & Contact Page
A practical booking page: the form is the primary conversion path (the salon has no public phone yet).

**Page Structure:**
1. Inner hero: display "Book your visit."
2. Booking form (porcelain panel): Name, Phone, Service (select: Hair / Skin & Facials / Makeup / Nails / Mehndi & Bridal / Men's Grooming), Preferred Date/Time, Notes - labels above inputs, inline errors, submit "Book an Appointment"
3. Contact block: [PHONE] (tel link), WhatsApp [WHATSAPP], Instagram @k_lavishlooks, address with plus code XJJ7+7Q, hours card (Monday 8 AM - 9 PM + [CONFIRM] full-week note)
4. Map embed: Google Maps embed centered on the plus code XJJ7+7Q Warangal
5. Footer: shared site footer

---

## Section-Edit Prompts (one change at a time)

1. "Replace the hero photo with [asset]. Keep the gold glow at the image edge only, keep all copy and CTAs unchanged."
2. "Add [service name] as a row under the [category] pill in /services with dotted gold leader and [PRICE] placeholder. Never create an empty row."
3. "Add [image] to the /gallery grid with category [Hair|Mehndi|Makeup|Grooming] and caption [text]. Caption sits below the image, never on it."
4. "Change the bridal band headline to [text]. Keep the gold composition, the white ghost CTA, and the sheen drift."
5. "Fill [PHONE] across nav-adjacent contact, /contact, and the footer from the salon's real number - one find-replace, all three locations."

---

## Negative Prompt (banned on every page)

- No light/dark theme flipping; the ivory theme is locked site-wide; no dark sections
- No pink (#EC4899-family), no lavender/purple, no blue or AI gradients; the only glow is gold, on the hero photo edge and the bridal band headline, never on text
- No Inter, Roboto, Poppins, Playfair Display, Lalezar, or italic serif outside the pull token
- No emoji as icons; no hand-drawn SVG icon paths; Lucide thin-line only
- No lorem ipsum, fake reviews, invented ratings, invented prices, invented packages, fake awards, or "reviews coming soon" placeholders
- No scroll-hijacking, no horizontal scroll on mobile, no h-screen (use min-h-[100dvh])
- No stock corporate photography; warm real salon photography only
- No em-dashes in any visible copy; no filler verbs ("elevate", "seamless", "unleash")
- No content hidden by default with opacity 0 in CSS (progressive enhancement only)
- No second WebGL canvas, no OrbitControls, no autorotate, no bloom passes; 3D lives on the Home hero only
- Never render "Lavish Looks The Family Salon" (old listing name) or any Jalandhar "Lavish Looks" prices (₹199/₹699/₹499/₹1499 are a different salon in a different city)

---

## Content Checklist (real data - verbatim, verified Sep 7, 2026)

- Canonical name: **Karthikeya Lavish Looks** (title case, all three words). Wordmark: "KARTHIKEYA" tracked caps over "Lavish Looks" Cormorant
- Rating: 5.0★ from 11 JustDial reviews (Google Maps place also shows 5.0; never cite a GMaps review count)
- Address: Road No. 14A (opposite O City Main Road), Kashibugga Society Colony, Kashibugga, Azam Jahi Mills Colony, Warangal, Telangana 506002. Plus code: XJJ7+7Q Warangal
- Hours: Monday 8:00 AM - 9:00 PM verified. Full week [CONFIRM] - never claim "open daily" until confirmed
- Instagram: @k_lavishlooks (77 followers; reels: hair transformations, mehndi, men's grooming, makeup)
- Unisex proof: men's beard/hair grooming + women's hair/mehndi/makeup all appear in the salon's own reels
- Categories: Hair; Skin & Facials; Makeup; Nails; Mehndi & Bridal; Men's Grooming
- Fill before ship: [PHONE], [WHATSAPP], all [PRICE] values, full-week hours [CONFIRM], bridal package contents [CONFIRM]
- Banned data: "Lavish Looks The Family Salon" (predecessor listing name), Jalandhar salon prices, US/Canada salon details, "established 2023" (unconfirmed)

---

## Build Acceptance Greps (run after generation)

- `grep -rn "₹199\|₹699\|₹499\|₹1499" src/` → 0 hits (Jalandhar prices leaked = FAIL)
- `grep -rniE "inter|roboto|poppins|playfair|lalezar" src/` → 0 hits in font usage
- `grep -rn "Lavish Looks The Family Salon" src/` → 0 hits
- `grep -rn "use client" src/components/threejs/` → present; WebGL bundle dynamically imported with `ssr: false` and exactly one canvas in the app
- `grep -rn "h-screen" src/` → 0 hits; `min-h-[100dvh]` in hero
- `grep -rn "PRICE\|PHONE\|WHATSAPP\|CONFIRM" src/data/` → only where real data is still unfilled, never shipped as-is
- `grep -rn "elevate\|seamless\|unleash" src/` → 0 hits
