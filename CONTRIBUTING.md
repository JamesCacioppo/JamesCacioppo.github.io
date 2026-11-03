# Contributing

Contributions to Modern Engineer are welcome, including corrections, new
technical notes, and improvements to the site. Work in progress is fine; do not
let perfect be the enemy of good enough.

1. Fork the repository and create a feature branch from `main`.
2. Make your changes using the setup in [README.md](README.md).
3. Run `npm test`, and preview affected pages with `npm run serve`. For theme or
   layout changes, check desktop and mobile views, dark mode, and print pages.
4. Use conventional commits, such as `docs(git): clarify branching examples` or
   `fix(site): correct a navigation link`.
5. Submit a pull request describing the change and how you checked it.

Preserve existing page URLs. When intentionally moving a page, add an appropriate
Hugo alias so old links continue to work. Keep images with their page bundles,
and keep theme dependencies external rather than copying theme source here.

Report problems or request documentation through
[GitHub issues](https://github.com/JamesCacioppo/JamesCacioppo.github.io/issues).
