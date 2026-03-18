# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production (runs pagefind indexing automatically via postbuild)
pnpm start        # Start production server
```

Use **pnpm** (not npm or yarn).

## Architecture

This is a personal portfolio/project showcase site for Kevin Samson built with **Next.js 15 + Nextra 4** (docs theme). Content is MDX-first, hosted on Vercel.

### How pages work

- **Home page** (`app/page.tsx`) — standalone client component with Framer Motion animations, not MDX-based.
- **All other pages** (`app/[...mdxPath]/page.jsx`) — dynamic route that loads MDX files from `content/` via Nextra's `importPage`. Metadata is extracted from MDX frontmatter and fed into `generateMetadata` for SEO + dynamic OG images via `/api/og?title=...`.
- **Layout** (`app/layout.tsx`) — wraps everything with Nextra's `Layout` component (navbar, footer, search). Navigation is driven by `content/_meta.ts` files.

### Content & navigation

All content lives in `content/` as MDX files. Navigation order and display titles are controlled by `_meta.ts` files (Nextra `MetaRecord`):
- `content/_meta.ts` — top-level nav (About, Projects)
- `content/projects/_meta.ts` — project listing order and titles

To add a project: create `content/projects/my-project.mdx` and add an entry to `content/projects/_meta.ts`.

### MDX components

`mdx-components.js` registers custom components available in all MDX files. Nextra's built-in components (`Cards`, `Card`, `Steps`, etc.) are available by default through the theme.

### Search

Search is powered by **pagefind** and runs automatically after `pnpm build` (postbuild script). The index is output to `public/_pagefind/`. Search does not work in dev mode.

### Styling

- Tailwind CSS v4 with PostCSS (`@tailwindcss/postcss`)
- Custom animated gradient keyframes defined in `tailwind.config.ts` and used in `globals.css`
- `tsconfig.json` has path alias `@/*` → root directory
