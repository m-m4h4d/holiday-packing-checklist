# holiday-packing-checklist
Holiday Packing Checklist

PackSmart is a static, no-build web app: an interactive holiday packing checklist with trip templates, progress tracking and essentials flagging. Everything is saved to the browser's `localStorage`.

## Pages

| Path | File | Description |
| --- | --- | --- |
| `/` | `index.html` | Landing page |
| `/app` | `app.html` | The checklist app |
| `/app?template=beach` | `app.html` | Opens the app and offers to load a template (`beach`, `city`, `winter`, `camping`) |

The old `/holiday_packing_checklist.html` URL redirects to `/app`.

## Run locally

Any static file server works, for example:

```sh
npx serve .
```

## Deploy to Vercel

The repo is ready to deploy as-is — no build step, no dependencies.

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Leave **Framework Preset** as `Other`, with no build command and the root directory as the output.
3. Deploy.

Or from the command line: `npx vercel` (preview) / `npx vercel --prod`.

`vercel.json` enables clean URLs (`/app` instead of `/app.html`), the legacy redirect and a few security headers.
