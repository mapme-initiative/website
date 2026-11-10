# Notes for coding agents

Static Hugo site, deployed to GitHub Pages by `.github/workflows/deploy.yml`. Read `README.md` first:
it lists the folder layout and every shortcode.

- **Content edits** go in `content/**/*.md`. Do not rewrite existing text unless asked.
- **New news post:** copy the front matter from `archetypes/blog.md` into `content/blog/<slug>.md`.
  `title` is the short card title, `headline` the long one. Nothing else needs updating – lists are generated.
- **Images:** add to `static/images/` (lower-case, hyphenated names) and reference as `/images/name.jpg`.
  Never hand-resize; `layouts/_partials/img.html` creates WebP versions.
- **Links:** write site-internal links as absolute paths with trailing slash (`/news/`).
- **Design changes:** only `assets/css/main.css` (design tokens are CSS variables in `:root`).
  Keep it a single plain CSS file; do not add npm, Sass, Tailwind or JS libraries.
- **Shortcodes** are in `layouts/_shortcodes/`. Shortcodes that wrap Markdown must reference `.Inner`
  in the template itself and render it via `partial "inner.html"`. Leave blank lines around shortcode tags.
- **URLs are part of the contract** (old CMS URLs such as `/contact-1/`, `/ressources/`, `/blog/kategorie/…`
  are kept on purpose). Renaming a file changes its URL – add `aliases:` to the front matter if you must.
- **Verify** every change with `hugo --gc` (must finish without errors or warnings) and look at the page
  with `hugo server`.
- Hugo version is pinned in the workflow; uses the template layout of Hugo ≥ 0.146
  (`layouts/_partials`, `layouts/_shortcodes`, `layouts/_markup`).
