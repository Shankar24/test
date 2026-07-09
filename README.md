# CARES Platform

Website for CARES (Center for Applied Research and Educational Services) —
training, consultancy, and research services with an online booking enquiry
form.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. The site is
**statically exported** (no backend, no payment gateway) and deployed to
GitHub Pages by the workflow in `.github/workflows/deploy-pages.yml`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To produce the static site locally, run `npm run build` — the output is
written to `out/`.

## Managing images

- **Gallery** — drop workshop/event photos into `public/assets/gallery/`.
  Every image there appears automatically on the Gallery page after the next
  deployment. File names become captions (`spss-workshop.jpg` → "Spss
  Workshop").
- **Research models** — images in `public/assets/research-models/` appear in
  the "Research & Data Visualization Models" section of the Research page.
  Sample SVG diagrams are included; replace them with real (anonymised)
  screenshots keeping the same file names to retain the curated titles.

## Booking flow

There is no online payment. The **Book Now** page (`/book`) shows an enquiry
form (name, email, phone, institution, service, requirement, deadline).
Submitting validates the fields, opens the visitor's email app with a
pre-filled message to info@caresindia.co.in, and shows a confirmation message.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow, which builds the
static export with the `/test` base path and publishes it to GitHub Pages.
In the repository settings, **Pages → Build and deployment → Source** must be
set to **GitHub Actions**.
