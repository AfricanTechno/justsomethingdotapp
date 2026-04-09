# justsomething.app

Marketing site for the **Just Apps** family — a growing set of simple,
single-purpose health-tracking apps (Just BP, Just Weight, Just Glucose,
and more to come).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build

## Deployment

- This site is deployed on **Cloudflare Pages**, not Vercel.
- `next.config.mjs` uses `output: "export"` so `npm run build` produces the
  static `out/` directory used for deployment.
- Production deploys happen from `.github/workflows/ci.yml` on pushes to
  `main`, using `wrangler pages deploy out --project-name=justsomethingdotapp --branch=main`.
- For a manual preview deploy from a branch, build first and then run:

```bash
npm run build
wrangler pages deploy out --project-name=justsomethingdotapp --branch=<branch-name>
```

- Do not set this repo up on Vercel unless the hosting platform is being
  intentionally migrated.

## Project structure

```
app/
  layout.tsx          Root layout, metadata, nav + footer
  page.tsx            Homepage
  apps/page.tsx       Full apps listing
  support/page.tsx    Support page
  privacy/page.tsx    Starter privacy policy
  not-found.tsx       404
  globals.css         Tailwind + base styles
components/
  Nav.tsx             Responsive top navigation
  Footer.tsx          Site footer
  AppCard.tsx         Reusable app card
  Section.tsx         Section wrapper with eyebrow/title/intro
lib/
  apps.ts             Source of truth for the app family
```

## Adding a new app

1. Add an entry to `lib/apps.ts` (`slug`, `name`, `tagline`, `description`,
   `accent`, `status`).
2. Optionally add a new accent colour in `tailwind.config.ts` under
   `theme.extend.colors.accent` and map it in `components/AppCard.tsx`.
3. The homepage and `/apps` page will pick it up automatically.

To create a dedicated app detail page later, add `app/apps/[slug]/page.tsx`
and read from `lib/apps.ts`.

## Placeholders to replace before launch

- **Support email** — `support@justsomething.app` in `app/support/page.tsx`
  and `app/privacy/page.tsx`.
- **Privacy copy** — `app/privacy/page.tsx` is a starter template and must
  be reviewed by a qualified legal professional before production.
- **Favicon / OG image** — referenced in `app/layout.tsx` metadata; add real
  assets under `public/`.
- **App Store links** — not yet wired up; add buttons on each app card or a
  future `/apps/[slug]` page.

## Design notes

- Neutral paper/ink palette with three accent colours:
  - BP → red
  - Weight → green
  - Glucose → blue
- Soft radial gradients (`.bg-grid`) for hero sections.
- Rounded cards, restrained shadows, generous whitespace.
- Mobile-first responsive layout, accessible focus states, skip link.

## Language

Copy uses British / South African English spellings.
