# Karthikeya Lavish Looks — Luxury Unisex Salon Website

A high-end, client-ready, responsive Next.js web application built for **Karthikeya Lavish Looks** in Warangal, Telangana.

---

## 💎 Brand & Design Identity
- **Canonical Name**: Karthikeya Lavish Looks
- **Wordmark**: `KARTHIKEYA` (tracked uppercase) + `Lavish Looks` (editorial serif)
- **Palette**: Dark luxury canvas (`#0B0C10`), Champagne & 24K Gold accents (`#D4AF37`, `#E5C568`), Ivory/cream typography, and subtle teal interaction accents.
- **Typography**: Cormorant Garamond & Plus Jakarta Sans via Next.js Google Fonts.

---

## 🏛️ Verified Business Information
- **Type**: Unisex Salon
- **Address**: Road No. 14A (opposite O City Main Road), Kashibugga Society Colony, Kashibugga, Azam Jahi Mills Colony, Warangal, Telangana 506002
- **Plus Code**: `XJJ7+7Q Warangal`
- **Verified Rating**: `5.0★` (11 JustDial Reviews)
- **Verified Hours**: `Monday — 8:00 AM – 9:00 PM`
- **Official Instagram**: [@k_lavishlooks](https://www.instagram.com/k_lavishlooks/)

---

## 📸 Real Salon Asset Management (Zero AI / Zero Stock Faces)
All image placeholders directly map to real salon photography destinations under `/public/images/`. When high-resolution Instagram posts are placed into the corresponding directory, they will immediately render across the website:
- `/public/images/hero/hero-main.jpg` — Signature Hero look
- `/public/images/bridal/bridal-hero.jpg` — Bridal Hero look
- `/public/images/gallery/hair-01.jpg` — Hair Transformation
- `/public/images/gallery/bridal-01.jpg` — Bridal Artistry
- `/public/images/gallery/mehndi-01.jpg` — Henna Design
- `/public/images/gallery/makeup-01.jpg` — Occasion Makeup
- `/public/images/gallery/grooming-01.jpg` — Men's Grooming & Beard Sculpt
- *(See `public/images/README.md` for full mapping)*

---

## 🚀 Routes & Pages
1. **Home (`/`)**:
   - Split-screen hero with luxury CTA
   - Verified Trust Strip (5.0★ on JustDial, 11 Reviews)
   - 6 Core Service Cards (Hair, Skin & Facials, Makeup, Nails, Mehndi & Bridal, Men's Grooming)
   - Bridal & Occasion full-width band with animated gold sheen
   - Real Instagram portfolio grid with fullscreen lightbox
   - Authentic salon pillars (Why Choose Us)
   - Verified JustDial reviews commitment section
   - Quick booking CTA
2. **Services (`/services`)**:
   - Interactive category filter tabs (All, Hair, Skin, Makeup, Nails, Mehndi, Men's Grooming)
   - Service rows with standard `[PRICE]` tags
   - Direct booking button per service
3. **Bridal & Occasion (`/bridal`)**:
   - Dedicated bridal hero & experience highlights
   - Verified bridal packages (Muhurtham, Reception, Henna Ritual)
   - Real bridal gallery
   - Dedicated Bridal Enquiry Form with validation and polite availability confirmation
4. **Gallery (`/gallery`)**:
   - Full categorized editorial gallery
   - Accessible fullscreen Lightbox with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`), touch controls, and Instagram post links
5. **Contact & Location (`/contact`)**:
   - Complete appointment request form with phone & date validation
   - Verified address, Plus code, and verified Monday hours
   - Embedded responsive Google Map
   - Official Instagram profile connection

---

## 🛠️ Development & Production
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production bundle
npm run build

# Start production server
npm run start
```
