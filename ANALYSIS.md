# Site Analysis — cares-platform-blue.vercel.app

An audit of the live CARES platform (as deployed on 2026-07-04), and what this
rebuild changes. Issues were verified directly against the production
deployment (HTTP probes, rendered HTML, and shipped JS bundles).

## Verified issues on the live site

### Bugs

| # | Issue | Evidence |
|---|-------|----------|
| 1 | **`/book/success` returns HTTP 500** when the `order` query param is unknown (e.g. a user refreshes or edits the URL). A paying customer landing here after checkout could see a server error page. | `GET /book/success?order=test` → 500 |
| 2 | **No custom 404 page** — unknown routes render the bare Next.js default. | `GET /nonexistent-page` → default 404 |
| 3 | **Payment gateway key read incorrectly on the client.** The booking form bundle reads `u.env.NEXT_PUBLIC_RAZORPAY_KEY_ID` via a runtime `process.env` shim (`5704` module) instead of a build-time inlined constant, and only fails *after* the order is created server-side — so the customer's order is created but checkout never opens. | booking page JS chunk |

### Missing pages required for a payments site

Razorpay's website checklist expects merchants to publish contact details,
terms, a privacy policy, and a refund/cancellation policy. None existed:

- `/privacy` → 404
- `/terms` → 404
- `/refund-policy` (any variant) → 404
- `/contact` → 404 (contact info existed only in the footer/topbar)

### SEO / discoverability

- `robots.txt` → 404
- `sitemap.xml` → 404
- `favicon.ico` → 404 (no icon at all)
- No Open Graph or Twitter Card tags on any page (links shared on WhatsApp/
  LinkedIn — the primary channels for an Indian training business — render with
  no preview).
- No canonical URLs, no structured data (JSON-LD) for the business.

### Accessibility

- Mobile navigation is a horizontally scrolling pill strip with no menu
  button, no `aria` state, and tiny (`text-xs`) touch targets.
- No "skip to main content" link.
- No visible active-page indicator in the navigation.
- Testimonials rendered as bare `<article>`s with quote marks in text rather
  than `blockquote`/`figure` semantics.

### Payment flow robustness

- Client-side form relied only on HTML `required` attributes; the server uses
  zod (good — verified via API probe returning structured 400s), but
  validation errors from the server were shown as one generic message rather
  than per-field feedback.
- Razorpay `checkout.js` loading strategy could not be confirmed from outside,
  but the form throws a generic error if `window.Razorpay` is absent.

### Content / trust

- Hero headline "We CARES you" is grammatically broken — undermines
  credibility for an academic-services brand.
- Footer `tel:` link contained a space (`tel:+91 9901857466`), which some
  dialers mishandle.
- Copyright year hardcoded server-side (fine, but noted).

## What this rebuild delivers

The repository previously contained only a README, so the full application
source is included here, addressing every finding above:

1. **Graceful success page** — `/book/success` never 500s; it renders a
   confirmation with whatever order/service context is available.
2. **Branded 404 page** with navigation back to home and services.
3. **Correct Razorpay key handling** — `NEXT_PUBLIC_RAZORPAY_KEY_ID` is
   inlined at build time; the checkout script is loaded with `next/script`;
   configuration errors are caught *before* creating a server-side order, and
   the API returns a clear 503 with a call-us fallback if unconfigured.
4. **Server-authoritative pricing** — order amounts are looked up from the
   service catalogue on the server; the client never sends a price.
5. **HMAC signature verification** for payment confirmation uses
   `timingSafeEqual` to prevent timing attacks.
6. **Legal & compliance pages** — `/privacy`, `/terms`, `/refunds`, and
   `/contact`, all linked from the footer.
7. **SEO** — per-page metadata with title templates, Open Graph + Twitter
   Card tags, `sitemap.xml` and `robots.txt` (generated), an SVG favicon, and
   `ProfessionalService` JSON-LD with the business's address and phone.
8. **Accessibility** — proper hamburger mobile menu with `aria-expanded`/
   `aria-controls`, skip-to-content link, active-page indicators, focus-visible
   rings throughout, semantic `figure`/`blockquote` testimonials,
   `prefers-reduced-motion` support, and `autocomplete` attributes on the
   booking form.
9. **Better form UX** — shared zod schema runs on both client and server, so
   users get per-field inline errors before any network call.
10. **Copy fixes** — hero headline replaced with "Research expertise you can
    build on"; `tel:` links normalized.
11. **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`,
    `Referrer-Policy` via `next.config.ts`; `poweredByHeader` disabled.

## Suggested next steps (not in scope here)

- Persist orders/bookings in a database (currently order context lives only in
  Razorpay order `notes`), and add a Razorpay webhook for `payment.captured`
  so bookings are recorded even if the customer closes the tab mid-redirect.
- Transactional email (booking confirmation to customer + notification to
  CARES) after verified payment.
- An admin view for managing bookings.
- Real client logos and named testimonials with consent.
