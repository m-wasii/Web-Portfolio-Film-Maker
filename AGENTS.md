# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **static HTML/CSS/JS website** — the "Focus" filmmaker/photography portfolio template. There is no build system, no `package.json`, no automated tests, and no linter configured.

- Two top-level folders: `Focus-v1-3-Template/` (the deployable site, with many `index-*.html` layout variants) and `Focus-v1-3-Documentation/` (static docs).
- `.github/workflows/deploy-pages.yml` publishes `Focus-v1-3-Template/` as-is to GitHub Pages on push to `main`.

### Run (development)

Serve the template directory over HTTP (opening files via `file://` breaks some relative asset/AJAX paths):

```bash
cd Focus-v1-3-Template && python3 -m http.server 8080
```

Then open `http://localhost:8080/index.html`. The interactive gallery/lightbox and layout variants work with any static file server. The documentation site is served the same way from `Focus-v1-3-Documentation/`.

### Lint / Test / Build

None exist. There is nothing to build (files are shipped verbatim) and no test or lint tooling. Do not invent one unless asked.

### Notes / gotchas

- `contact.php` and `subscribe.php` are optional legacy PHP form handlers intended for a production PHP host. PHP is **not** installed in this environment and these are not part of the dev workflow. `contact.php` uses `eregi()`, removed in modern PHP, so it will not run on current PHP without edits. Ignore them for local development.
