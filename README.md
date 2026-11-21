# Order Flow & DOM Mastery — Premium Course Landing Page

A minimal, high-craft financial education landing page built with **Next.js 15**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**.

## Key Features

- **Design System**: Clean Google-inspired minimalism + Apple product presentation + modern fintech typography (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono` self-hosted).
- **Hero Microstructure Studio**: Interactive 3D-tilted visual featuring an Order Flow Liquidity Heatmap, Bid × Ask Footprint Clusters, DOM Depth Ladder, Session Delta bar, and floating glassmorphic telemetry callouts.
- **Interactive DOM & Footprint Simulator**: Switch between 4 educational market auction scenarios (*Passive Ask Absorption*, *Stacked Buy Imbalance*, *Balanced Two-Way Auction*, *Liquidity Sweep & Exhaustion*), play/pause simulated tick flow, and click individual ladder rows to inspect level mechanics (clearly marked as illustrative demo data).
- **Expandable 8-Module Curriculum**: 42 lessons across 8 structured modules with individual & bulk expand/collapse controls.
- **Course Video Preview Modal**: Studio thumbnail card with interactive chapter preview and drop-in video player integration placeholder.
- **Refined SaaS Bento Grid, Instructor Profile, Sample Testimonial Placeholders, Pricing & Razorpay / WhatsApp Placeholders, and Accessible FAQ Accordion**.

## Quick Customization

All brand placeholders, pricing, curriculum items, and integration URLs live in a single configuration file:

- **`src/data/courseData.ts`**
  - `siteConfig.brandName` (`[YOUR BRAND NAME]`)
  - `siteConfig.priceDisplay` (`₹[YOUR PRICE]`)
  - `siteConfig.integrations.razorpay` (Razorpay Key ID / Payment Link)
  - `siteConfig.integrations.whatsapp` (WhatsApp Business phone number)
  - `siteConfig.integrations.previewVideo` (YouTube / Vimeo / BunnyStream / MP4 embed URL)
  - `sampleTestimonials` & `instructorPlaceholder`

## Running Locally

```bash
npm install
npm run dev
```
