# holiday-packing-checklist
Holiday Packing Checklist

PackSmart is a static web app: an interactive holiday packing checklist with trip templates, progress tracking and essentials flagging. Everything is saved to the browser's `localStorage`.

## Pages

| Path | File | Description |
| --- | --- | --- |
| `/` | `public/index.html` | Landing page |
| `/app` | `public/app.html` | The checklist app |
| `/app?template=beach` | `public/app.html` | Opens the app and offers to load a template (`beach`, `city`, `winter`, `camping`) |

The old `/holiday_packing_checklist.html` URL redirects to `/app`.

## Styles

Styling uses [Tailwind CSS](https://v3.tailwindcss.com/) v3, compiled at build time. The theme (brand colours, font) lives in `tailwind.config.js`. Tailwind scans `public/**/*.html` and writes `public/styles.css`, which is generated and git-ignored.

## Run locally

Requires Node.js 18+.

```sh
npm install
npm run dev          # rebuilds public/styles.css whenever an HTML file changes
npx serve public     # in a second terminal, then open http://localhost:3000
```

`npm run build` produces a one-off minified build.

## Deploy to Vercel

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Deploy. `vercel.json` already sets the build command (`npm run build`) and the output directory (`public`), so no project settings need changing.

Or from the command line: `npx vercel` (preview) / `npx vercel --prod`.

`vercel.json` also enables clean URLs (`/app` instead of `/app.html`), the legacy redirect and a few security headers.
