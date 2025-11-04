# Repo guidance for AI coding agents

This project is a Nextra/Next.js site that renders MDX content from the `content/` folder and serves it using the App Router. Keep instructions concise and focused on code patterns that enable safe, minimal, and correct edits.

Key files and patterns

- `app/layout.tsx` - The site layout uses `nextra-theme-docs` (Navbar, Layout, Footer) and `getPageMap()`; default metadata and docs repository base are set here. Use this when editing site-level settings (analytics, head tags, footer links).
- `app/[[...mdxPath]]/page.jsx` - The MDX page loader: imports MDX content via `nextra/pages` (`importPage`) and exposes `toc` and `metadata` to the MDX wrapper. When changing how pages are loaded or metadata is used, update this file.
- `mdx-components.js` - Custom MDX components (wrapper, shortcodes). Modify this file to add new MDX components; prefer re-using the existing wrapper pattern.
- `content/_meta.ts`, `content/projects/_meta.ts` - Navigation and per-folder meta records (Nextra `MetaRecord`). Update these to add or rename pages in the sidebar/navigation.
- `content/**/*.mdx` - All page content lives here. New project pages belong in `content/projects/*.mdx`. Metadata inside MDX (frontmatter) is available through `importPage`.

Build / dev / deployment notes

- Use the repository's package scripts (package manager is pnpm; `pnpm` is used in this workspace):
  - `pnpm dev` → runs `next dev`
  - `pnpm build` → runs `next build` and then `postbuild` runs `pagefind` to generate search index at `public/_pagefind`
  - `pnpm start` → runs `next start`
- Static search: `pagefind` indexes `.next/server/app` during `postbuild` — don't change the output path unless you update `postbuild` in `package.json`.

Project-specific conventions (important to follow)

- Navigation / sidebar: update `content/*/_meta.ts` files to control titles, ordering, and per-page theme options. These meta files drive what appears in the docs sidebar.
- MDX pages: use existing frontmatter keys the site expects (e.g. `title`) — the `app` route uses `metadata.title` to build OG images and page titles.
- Adding pages: create `content/projects/<slug>.mdx` and, if you want it to appear in the Projects listing, add an entry in `content/projects/_meta.ts`.
- Custom MDX components: import or add them in `mdx-components.js`. The MDX wrapper is used in `app/[[...mdxPath]]/page.jsx` so prefer updating `mdx-components.js` rather than editing the wrapper repeatedly.

Integration points & external services

- Vercel Analytics: `@vercel/analytics` is wired into `app/layout.tsx`. Keep analytics calls minimal and preserve the existing `Analytics` usage.
- OG images: `/api/og` uses `@vercel/og`. Titles are computed from `metadata.title` (see `app/[[...mdxPath]]/page.jsx`) — when changing metadata shapes, update the OG generation accordingly.

Examples (do this)

- To add a new project:

  1. Add `content/projects/new-project.mdx` (use existing files as examples).
  2. Add or update the entry in `content/projects/_meta.ts` to control its label in the Projects page.
  3. Run `pnpm dev` locally to verify rendering.

- To change site-wide metadata (title/SEO): edit `app/layout.tsx` and `app/[[...mdxPath]]/page.jsx` (both files influence document head and OG generation).

What NOT to change without extra context

- The `postbuild` pagefind command and its output path. Changing this breaks on-site search unless the deploy pipeline is updated.
- The `docsRepositoryBase` string in `app/layout.tsx` unless you also want to change where “edit on GitHub” links point.

If uncertain, open these files first: `app/layout.tsx`, `app/[[...mdxPath]]/page.jsx`, `mdx-components.js`, and `content/_meta.ts`.

If you need more details or I missed a pattern, tell me what change you want and I will update these instructions.
