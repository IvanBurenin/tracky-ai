# Tracky landing

Public landing page for **Tracky** — a training log inside Telegram.
Built with Vite, React and TypeScript. It is a standalone app: it does not
import code from the Mini App and does not call the backend API.

The only action on the page is the Telegram bot link: `https://t.me/AiTrackyBot`.

## Run locally

```bash
cd landing
npm install
npm run dev
```

Open `http://127.0.0.1:5174/`.

## Build

```bash
npm run build
```

Static output goes to `dist/`.

## Deploy

Every push to `main` builds the landing and publishes it to GitHub Pages
through `.github/workflows/pages.yml`.

Live site: https://ivanburenin.github.io/tracky-ai/

## Structure

```text
landing/
├── DESIGN.md          art direction, palette, type, grid
├── index.html         static metadata and noscript fallback
├── public/logo.jpg    the Tracky mark
├── public/favicon.png the Tracky tab icon
├── public/hero-cardio.jpg
├── public/levels/     eight level badges from the Mini App
├── public/screens/    real Mini App screenshots in six languages
└── src/
    ├── App.tsx        page sections
    ├── components/    log sheet, hero strip, header nav, steps, app screens,
    │                  levels, measurements, developer section, language switcher,
    │                  program table, route and goals, AI dialog, chart
    ├── i18n/          landing copy for EN/RU/DE/FR/ES/ZH
    └── styles.css     tokens, grid, geometry, components, responsive rules
```

## Design rules

The page is deliberately monochrome in its chrome: black ground, off-white ink,
a single yellow logo plate. Product imagery keeps its own colour: the Mini App
screenshots and the eight level badges. All type is **Inter Tight**; hierarchy
comes from size, weight and tabular numerals. The layout is a 12-column grid
capped at 1400px, with 24px column gaps below the hero. Geometry carries the
logbook language: the weight-plate circle, crop marks, numbered step circles,
the route trace, soft-cornered goal boxes and the final target circle. Cards,
panels, media, menus and controls use soft 10 to 14px corners; screenshot windows
use 16px; the floating header uses 22px.

## Assets

All paths are resolved through `import.meta.env.BASE_URL`, so the site works
from any sub-path (this is why the build passes `--base` in CI).

English is the primary language; a visitor's explicit choice is stored in
`localStorage` and wins on later visits.
