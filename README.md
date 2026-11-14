# azimetkeremersoy.com

Personal portfolio of Azimet Kerem Ersoy. Built with Next.js (App Router), TypeScript and Tailwind CSS, and deployed on Vercel.

## Getting started

Requires Node.js 26.x.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | What it does               |
| --------------- | -------------------------- |
| `npm run dev`   | Start the dev server       |
| `npm run build` | Create a production build  |
| `npm run start` | Serve the production build |
| `npm run lint`  | Lint the code              |

## Configuration

| Variable               | Default                        | Purpose                                              |
| ---------------------- | ------------------------------ | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://azimetkeremersoy.com` | Canonical URL used in metadata, sitemap and robots   |
| `NEXT_DIST_DIR`        | `.next`                        | Build output folder (run a second server in parallel) |

## Project structure

```
src/
  app/          Routes, metadata files, global styles and icons
  components/
    layout/     App shell, sidebar, mobile navbar, settings toggles
    home/       Home page sections
    career/     Career timeline used by the home and Experience pages
    experience/ Experience page
    projects/   Projects page, project card and tech icons
    command-palette/  Cmd/Ctrl+K palette
    common/     Small shared pieces (chip, reveal-on-scroll, rich text)
    ui/         shadcn/ui primitives
  content/      All site copy and data (career, projects, profiles, ...)
  i18n/         English/Turkish dictionary, provider and server-side language
  lib/          Dates, metadata, schema.org data, site constants, helpers
```

## Editing content

- **Career, projects, About, certificates:** edit the files in `src/content/`. Every user-facing string there has an `en` and a `tr` version.
- **UI labels:** `src/i18n/dictionary.ts`. The Turkish dictionary must have the same keys as the English one (checked by TypeScript).
- In content strings, `**bold**` and `[label](https://url)` are rendered as bold text and links.
- Dates are written as `YYYY-MM`; ranges and durations such as "2 yrs 4 mos" are computed at render time.

## Language

The chosen language is stored in a `lang` cookie and read on the server, so the first paint is already in the right language. Without a cookie, the browser's `Accept-Language` decides (Turkish or English).
