# Contributing

Thanks for helping keep the demo site in shape. The golden rule: **it must keep working when
someone double-clicks `site/index.html`**, as well as on GitHub Pages and a custom domain.

## Workflow

1. Update `main`: `git checkout main && git pull`
2. Create a short-lived branch: `git checkout -b add-catering-page`
3. Edit files under `site/`. Open the pages directly in your browser to check them.
4. Run the checker:

   ```bash
   python3 scripts/check_site.py
   ```

5. Commit, push the branch and open a pull request into `main`. CI runs the same check, and the
   pull request can't be merged until it passes. (Direct pushes to `main` are blocked.)
6. After review, squash-merge. GitHub deletes the branch automatically.
7. When `main` is ready to go live, run the **Publish site** workflow (see [README](README.md#publishing-an-update)).

Only `main` and `gh-pages` are long-lived branches. Never push to `gh-pages` by hand; it's blocked
from force-pushes and deletion, and should only ever change through the publish step.

## Rules of the road

- **No build tools or dependencies** — plain HTML/CSS/JS only. No frameworks, npm, CDNs or web
  fonts; the site has to work offline on a laptop at a customer's office.
- **Relative links only** — `href="space.html"`, `src="assets/img/room.jpg"`.
  Never `href="/space.html"` (breaks on `github.io/demowebsite/` and from disk) and never
  `href="space/"` (folders don't open `index.html` from disk).
- **No `fetch()`, ES modules or service workers** — browsers block these on `file://`.
- **Header and footer are copied into every page.** If you change the navigation, update every
  page and keep `aria-current="page"` on the current page's link.
- **Keep it fictional** — no real customer names or contact details.
- Keep images small (< 300 KB), put them in `site/assets/img/`, and give them `alt` text.

## Using AI coding agents

Agent instructions live in [AGENTS.md](AGENTS.md) (Claude Code reads it via `CLAUDE.md`). Keep
shared rules there rather than in personal files. Personal, uncommitted overrides can go in
`CLAUDE.local.md` or `.claude/settings.local.json`, which are git-ignored.
