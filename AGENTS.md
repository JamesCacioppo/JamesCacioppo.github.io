# Repository guidance

## Project and orientation

This repository builds **Modern Engineer**, James Cacioppo's technical notes,
documentation, and personal blog at https://jamescacioppo.github.io/.
It is a static Hugo site using Docsy as a Go module.

Read `README.md` for setup, dependency updates, and deployment details, and
`CONTRIBUTING.md` for the contribution workflow. Check `git status` before
editing and preserve unrelated work. Keep changes focused on the requested task.

## Source locations

- `content/en/`: homepage, About page, docs, blog posts, and page images.
- `hugo.toml`: site configuration, navigation options, permalinks, and theme import.
- `layouts/`: project template overrides, including the 404 page and heading hook.
- `assets/scss/`: Docsy project style hooks.
- `scripts/check-site.mjs`: offline checks of generated pages, links, and assets.
- `.github/workflows/gh-pages.yml`: build checks and production deployment.

Edit source files. `public/`, `resources/`, and `node_modules/` are generated and
ignored. Keep the theme external; do not edit downloaded Docsy module files.
`packages/hugoautogen/` is generated but committed; regenerate it through Hugo
when updating dependencies, following the README.

## Content and presentation

- Preserve the author's voice and distinguish technical documentation from
  personal blog content. Do not invent personal experiences, credentials, or facts.
- Follow nearby pages' front matter and shortcode conventions. Most content uses
  Markdown with YAML front matter; the existing About page uses HTML.
- Use `_index.md` for section landing pages and `index.md` for Markdown page
  bundles. Keep page images with their bundles.
- Preserve existing URLs, including path capitalization, dated blog permalinks,
  and section print pages at `<section>/_print/`. When intentionally moving a
  page, add a Hugo alias for its old URL and update internal links.
- Preserve navigation intent expressed through `linkTitle`, `weight`, and
  `menu.main` front matter.
- Prefer Docsy configuration and supported style hooks before template overrides.
  Use `assets/scss/_variables_project.scss` for theme variables and
  `assets/scss/_styles_project.scss` for project styles, creating it when needed.
- Review intentional raw HTML and shortcodes when editing them. Preserve
  accessible headings, descriptive links, and appropriate image alternative text.

## Commands and validation

Use the versions declared in `.nvmrc`, `go.mod`, and `package.json`. Run Hugo
through npm so the pinned local Hugo Extended and Sass binaries are available.

```sh
npm ci                      # Install locked dependencies when needed
npm run serve               # Preview with drafts and future-dated pages
npm test                    # Production build, then internal link/asset checks
npm run build:preview       # Build including drafts and future-dated pages
npm run check:links         # Recheck an already built production site
```

For content, configuration, layout, style, dependency, or build changes, run
`npm test`. Hugo warnings fail the build. The link checker checks internal pages,
fragments, and assets; it does not verify external websites. For drafts or future
content, also build a preview and inspect the affected pages.

For visual changes, preview affected pages at desktop and mobile widths, in
light and dark modes, and in print views. For repository instruction-only edits,
review the diff and referenced paths and commands; no site build is necessary.
Report what was checked and any validation that could not be completed.

## Dependencies and delivery

Follow the README's dependency update procedure. Keep manifests, lockfiles,
generated theme npm workspace, and relevant Docker/Netlify tool versions aligned.
Avoid unrelated dependency upgrades.

Follow `CONTRIBUTING.md`: use a feature branch, conventional commit messages,
and a pull request describing the change and validation. Pushing to `main`
triggers production deployment to `gh-pages`; keep that consequence in mind
before publishing changes. Do not manually edit generated deployment output.
