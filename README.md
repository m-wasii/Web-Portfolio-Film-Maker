# Moin Portfolio Web

Filmmaker portfolio website for **Moin Azeem**, connected to the GitHub repo [`m-wasii/Web-Portfolio-Film-Maker`](https://github.com/m-wasii/Web-Portfolio-Film-Maker).

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

Edit `src/data/site.ts` to update:

- Name, tagline, contact details
- Social links (Behance, Instagram, YouTube, Vimeo)
- Services list
- Featured projects

Replace project placeholders in `src/components/Work.tsx` with real video embeds and thumbnails when ready.

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — run production server locally
- `npm run lint` — lint the project

## Deploy

This project is ready for Vercel, Netlify, or GitHub Pages (via static export if configured).

Recommended: connect the GitHub repo to [Vercel](https://vercel.com) for automatic deploys on push.

## GitHub

```bash
git remote -v
# origin  https://github.com/m-wasii/Web-Portfolio-Film-Maker.git
```
