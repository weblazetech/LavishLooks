# Karthikeya Lavish Looks — Salon Website

Website for **Karthikeya Lavish Looks**, a unisex beauty salon in Kashibugga, Warangal — a warm, editorial "Peacock Atelier" luxury identity built to book everyday grooming (men and women) and win bridal consultations.

## Features

- **Home** — editorial landing with the atelier design system: ivory/porcelain surfaces, deep peacock teal (`#0F6B62`), bridal gold accents, Cormorant Garamond display type, feather motif flourishes
- **Services** (`/services`) — the salon's service menu (hair, skin, grooming) presented with price typography and section kickers
- **Bridal** (`/bridal`) — dedicated bridal landing track with enquiry path
- **Gallery** (`/gallery`) — work showcase
- **Contact** (`/contact`) — validated contact/enquiry form (name, 10-digit phone validation with inline errors)
- Shared site kit in `src/components/site/`: sticky nav, footer, wordmark, kicker, feather-motif, reveal-on-scroll animations, site shell
- `src/components/threejs/` — 3D scene components used as ambient accents, with reduced-motion handling

## Tech Stack

- Next.js (App Router) + React 19 + TypeScript
- Tailwind CSS 4 + shadcn/ui, motion (framer-motion successor), lucide-react
- Three.js + @react-three/fiber (ambient 3D scenes)
- Prisma 6 (scaffolded `User`/`Post` models — content and enquiries do not require a database to run)
- recharts, embla carousel, react-hook-form + zod available

## Getting Started

```bash
bun install
bun run dev        # next dev on port 3000
bun run build      # next build (standalone output)
bun run start      # bun .next/standalone/server.js

# Database (scaffold only)
bun run db:generate
bun run db:push
```

## Project Structure

```
├── src/
│   ├── app/              # /, /services, /bridal, /gallery, /contact
│   ├── components/
│   │   ├── site/         # nav, footer, wordmark, kicker, feather-motif, reveal
│   │   ├── threejs/      # ambient 3D scenes
│   │   └── ui/           # shadcn/ui primitives
│   └── lib/
├── prisma/               # scaffolded schema
├── DESIGN.md             # "Peacock Atelier" design contract (colors, type, spacing)
└── tailwind.theme.json   # exported theme tokens
```

## Deployment

Configured for Vercel (`.vercel/` project metadata present). Production runs the standalone Next.js server under Bun; no environment variables are required for the static content paths.

## Notes

`DESIGN.md` is the single source of visual truth: ivory `#FAF6F0` / sand `#F3ECE2` surfaces, ink `#22302D` text, peacock teal primary, gold `#A16207` accents, hairline borders `#E3D9CB`, Montserrat body with Cormorant Garamond display, 88px section rhythm, 20px cards / 999px pills.
