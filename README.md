# Moin Bin Umair — Portfolio

Modern single-page portfolio for **Moin Bin Umair**, rebuilt with Astro and Tailwind CSS. Inspired by minimal cinematic portfolio design — monochrome palette, self-hosted hero loop, Commercial / Art & Films sections, and full-screen Vimeo playback.

## Stack

- [Astro 7](https://astro.build) (static output)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript (client scripts)
- Hosted on **Cloudflare Pages**

## Local development

```bash
git clone git@github.com:m-wasii/moin-bin-umair-rebuild.git
cd moin-bin-umair-rebuild
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

Production build:

```bash
npm run build
npm run preview
```

## Content

Edit JSON files in `src/content/`:

| File | Purpose |
|------|---------|
| `works.json` | Vimeo films (`category`: `commercial` or `art`) |
| `timeline.json` | Career timeline entries |
| `site.json` | Name, about copy, nav, contact email |

## Hero video

Replace the placeholder loop at:

- `public/video/hero-loop.mp4`
- `public/video/hero-poster.webp`

The site uses the poster for LCP and lazy-plays the loop when the hero is visible.

## Contact form (Formspree)

1. Create a free form at [formspree.io](https://formspree.io)
2. In Cloudflare Pages → Settings → Environment variables, add:
   - `PUBLIC_FORMSPREE_ID` = your form ID

## Deploy to Cloudflare Pages

One-time setup:

1. Push this repo to GitHub (`moin-bin-umair-rebuild`)
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages**
3. **Create** → **Pages** → **Import an existing Git repository**
4. Select `moin-bin-umair-rebuild`
5. Build settings:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` |

6. **Save and Deploy**

Every push to `main` triggers a new deploy. Preview URLs are created for pull requests automatically.

### Custom domain

In Cloudflare Pages → your project → **Custom domains**, add your domain. If DNS is already on Cloudflare, HTTPS is provisioned automatically.

## Project structure

```
src/
├── components/     # Astro UI components
├── content/        # JSON data (works, timeline, site)
├── layouts/        # Page shell
├── pages/          # index.astro (single page)
├── scripts/        # Client JS (cursor, modal, scroll)
└── styles/         # Tailwind + design tokens
public/
├── img/            # Timeline images
└── video/          # Hero loop + poster
```

## License

Private — © Moin Bin Umair
