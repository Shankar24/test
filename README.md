# CARES Platform

Premium Next.js website for **Center for Applied Research and Educational Services** (CARES) — research training, consultancy, analytics, and applied research support.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Client-side enquiry form (no payment backend)

## Setup

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL if needed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata, sitemap, and Open Graph |

## Key routes

- `/` — Premium homepage
- `/training`, `/consultancy`, `/research`, `/gallery`
- `/book` — Enquiry-only Book Now form
- `/contact`, `/about`, `/privacy`, `/terms`

## Assets

- Gallery images: `public/assets/gallery/`
- Research model images: `public/assets/research-models/`
