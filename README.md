# Modern Engineer

James Cacioppo's technical documentation, notes, and personal blog, published at
[Modern Engineer](https://jamescacioppo.github.io/).

## Dependencies

The site imports Docsy as a **Hugo module**. Theme source is downloaded during the
first build; it is not copied into this repository.

| Tool | Version | Defined in |
| --- | --- | --- |
| Node.js | 24.22.1 | `.nvmrc` |
| Go | 1.27.3 | `go.mod` |
| Hugo Extended | 0.169.0 | `package.json` and `package-lock.json` |
| Docsy | 0.18.0 | `go.mod` and `go.sum` |
| Dart Sass | 1.107.1 | `package.json` and `package-lock.json` |

Install Git, Go, and Node.js. If you use nvm, run `nvm install` and `nvm use`.
`npm ci` installs the pinned Hugo and Sass binaries, plus the theme's Bootstrap
and Font Awesome dependencies. Run Hugo through npm so these binaries are on
`PATH`; a separately installed Hugo is unnecessary.

## Develop locally

```bash
npm ci
npm run serve
```

Open <http://localhost:1313/>. Changes reload automatically. Local previews include
drafts and future-dated pages; production builds exclude them.

```bash
npm test                    # Production build, then internal link/asset checks
npm run build               # Production build into public/
npm run build:preview       # Development build, including drafts and future pages
npm run hugo -- version     # Check the project-local Hugo binary
npm run hugo -- mod graph   # Check the resolved theme version
```

Builds fail on Hugo warnings, including duplicate output paths and stale theme npm
dependencies. The link checker examines generated HTML for missing internal
pages, fragments, images, stylesheets, and scripts. It does not contact external
websites. Run `npm run check:links` after a build to repeat just that check. For a
preview origin, use `SITE_URL=https://your-preview.example/ npm run check:links`.

`public/`, `resources/`, and `node_modules/` are generated and ignored by Git.

## Repository layout

- `content/en/`: homepage, About page, technical docs, blog posts, and page images.
- `hugo.toml`: site configuration, navigation options, URL patterns, and Docsy import.
- `layouts/`: the custom 404 page and a hook enabling Docsy's heading self-links.
- `packages/hugoautogen/`: generated npm workspace for the theme's dependencies.
- `scripts/check-site.mjs`: offline checks of the generated site.
- `.github/workflows/gh-pages.yml`: PR checks and production deployment.

Most pages use Markdown with YAML front matter. Section landing pages use
`_index.md`; individual posts with adjacent images use `index.md` page bundles.
Navigation labels and ordering are controlled by `linkTitle`, `weight`, and
`menu.main` in front matter. Blog URLs retain their dated paths, and printable
sections remain at `<section>/_print/`.

The About page uses HTML content. `security.allowContent` explicitly permits that
existing content format, and Goldmark's `unsafe` setting permits intentional HTML
inside Markdown. Review HTML in contributions as part of normal code review.

Customize Docsy through project files rather than editing downloaded modules:
use `assets/scss/_variables_project.scss` for theme variables and
`assets/scss/_styles_project.scss` for styles. Add template overrides only when
configuration or the supported style hooks cannot provide the required behavior.

## Update dependencies

Work on a feature branch and review each intervening
[Docsy upgrade guide](https://www.docsy.dev/tags/upgrade/) before updating.
Use versions supported together by Docsy.

1. Update Node in `.nvmrc`, and Go in `go.mod`, as needed. Keep the Dockerfile and
   Netlify tool versions aligned with them.
2. Update the pinned build tools, substituting the chosen versions:

   ```bash
   npm install --save-dev --save-exact hugo-extended@HUGO_VERSION sass-embedded@SASS_VERSION
   ```

3. Update Docsy and regenerate its npm workspace:

   ```bash
   npm run hugo -- mod get github.com/docsy/docsy/theme@DOCSY_VERSION
   npm run hugo -- mod tidy
   npm run hugo -- mod npm pack
   npm install
   ```

4. Update `module.hugoVersion.min` in `hugo.toml` if the required Hugo version
   changes. Review local template/style overrides against the new theme.
5. Run `npm test`, build a development preview, and inspect the homepage, About,
   docs, blog, and print pages at desktop and mobile widths. Check navigation,
   headings, code highlighting/copy buttons, and the light/dark menu.
6. Commit `go.mod`, `go.sum`, `package.json`, `package-lock.json`, and
   `packages/hugoautogen/`, along with any required configuration changes.

Run `npm run hugo -- mod npm pack` again after editing root npm dependencies or
overrides; Hugo checks that the generated workspace matches them.

The `adm-zip` override selects the patched 0.6.1 release for Hugo's binary
installer. Remove it once `hugo-extended` allows a patched release itself.

## Deployment

GitHub Actions runs `npm ci` and `npm test` on pull requests and pushes to `main`.
The build artifact is published to the existing `gh-pages` branch only from
`main`, followed by the existing ntfy deployment notification. In GitHub Pages
settings, keep **Deploy from a branch**, with `gh-pages` and `/ (root)` selected.
The build job has read-only repository access; only the deployment job can write.

Netlify is an optional alternative. `netlify.toml` uses the same npm build tools
and pins Node and Go; preview builds use Netlify's `DEPLOY_PRIME_URL`.

For a containerized development environment:

```bash
docker compose up --build
```

Open <http://localhost:1313/>. The container installs the same locked npm tools
and resolves the same Docsy module. Source is mounted for live reload; container
npm dependencies live in a separate volume. After dependency updates, recreate
that volume with `docker compose down --volumes`, then rebuild.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Work in a feature branch, use conventional
commits, and submit a pull request. Unfinished notes are welcome; they can be
refined over time.

## References

- [Hugo documentation](https://gohugo.io/documentation/)
- [Docsy documentation](https://www.docsy.dev/docs/)
- [Docsy module updates](https://www.docsy.dev/docs/update/hugo-module/)
