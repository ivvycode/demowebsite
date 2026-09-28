# demowebsite

A simple static website for a fictional events venue (**ACME Venue**), used by the iVvy sales team
to demo product features.

- **Live:** https://ivvycode.github.io/demowebsite/
- **Tech:** plain HTML, CSS and JavaScript. No build step, no dependencies.

## View it locally

Open `site/index.html` in any web browser (double-click it). That's it — no server or other
software is needed, and it works offline.

## How the repo works

| Branch     | Purpose                                                                 |
|------------|-------------------------------------------------------------------------|
| `main`     | Latest development version. All changes land here via pull request.    |
| `gh-pages` | What GitHub Pages serves. Generated from `main`'s `site/` folder — never edit it directly. |

Short-lived feature branches are fine for pull requests, but they are deleted after merge, so the
repo only ever has these two long-lived branches.

```
site/        the website (this folder becomes the root of gh-pages)
scripts/     check_site.py (link/portability checker) and publish.sh
.github/     CI checks, the "Publish site" workflow, PR/issue templates
AGENTS.md    instructions for AI coding agents (CLAUDE.md points to it)
```

## Making a change

See [CONTRIBUTING.md](CONTRIBUTING.md). In short: branch from `main`, edit files in `site/`,
run `python3 scripts/check_site.py`, open a pull request.

## Publishing an update

Publishing copies `site/` from `main` onto `gh-pages`; GitHub Pages then rebuilds (about a minute).

**From GitHub (recommended):** Actions → **Publish site** → **Run workflow**.

**From your machine:**

```bash
git checkout main && git pull && scripts/publish.sh
```

## Custom domain

The site uses relative links only, so it works unchanged on `ivvycode.github.io/demowebsite/` and
on a custom domain such as `demowebsite.ivvy.com`. To switch the domain on:

1. Add a DNS `CNAME` record: `demowebsite.ivvy.com` → `ivvycode.github.io`.
2. In GitHub: Settings → Pages → Custom domain → `demowebsite.ivvy.com`, then tick *Enforce HTTPS*.

GitHub writes a `CNAME` file to `gh-pages`; `publish.sh` preserves it. Once a custom domain is set,
GitHub automatically redirects the `github.io` URL to it.
