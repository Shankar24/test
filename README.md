# CARES Platform

Website and online booking platform for CARES (Center for Applied Research and
Educational Services) — training, consultancy, and research services with
Razorpay payments.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Razorpay keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay key ID (public, used by the checkout widget) |
| `RAZORPAY_KEY_SECRET` | Razorpay key secret (server-side only, never exposed) |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for metadata/sitemap |

Without Razorpay keys the site runs fine; the booking API returns a friendly
"call us to book" message instead of opening checkout.

## Project structure

- `app/` — pages (home, about, training, consultancy, research, contact,
  book & pay, legal pages), API routes, sitemap/robots
- `app/api/payments/` — Razorpay order creation and signature verification
- `components/` — header, footer, booking form, shared UI
- `lib/` — service catalogue, site config, shared zod validation schemas

## Payments flow

1. Customer fills the booking form (`/book/[serviceId]`); zod validates
   client-side for inline errors.
2. `POST /api/payments/create-order` re-validates, looks the price up
   server-side (client never sends an amount), and creates a Razorpay order.
3. Razorpay Checkout opens; on completion `POST /api/payments/verify` checks
   the HMAC-SHA256 signature (timing-safe) before redirecting to the success
   page.

See [ANALYSIS.md](./ANALYSIS.md) for the audit of the previous deployment and
the rationale behind this rebuild.
