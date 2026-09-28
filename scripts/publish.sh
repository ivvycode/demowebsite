#!/usr/bin/env bash
# Publish the contents of site/ (at the current commit) to the gh-pages branch.
#
# gh-pages is a deploy-only branch: its root is exactly the site/ folder, plus
# a CNAME file if a custom domain is configured. Never edit gh-pages by hand.
#
# Usage:  scripts/publish.sh            (normally run by the "Publish site" GitHub Action)
# Env:    REMOTE (default: origin)
set -euo pipefail

REMOTE="${REMOTE:-origin}"
BRANCH="gh-pages"
ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

if [ -n "$(git status --porcelain -- site)" ]; then
  echo "error: site/ has uncommitted changes - commit them first." >&2
  exit 1
fi

current="$(git rev-parse --abbrev-ref HEAD)"
if [ "$current" != "main" ] && [ "${ALLOW_NON_MAIN:-}" != "1" ]; then
  echo "error: publish from main (currently on '$current'). Set ALLOW_NON_MAIN=1 to override." >&2
  exit 1
fi

python3 scripts/check_site.py

src_sha="$(git rev-parse --short HEAD)"
work="$(mktemp -d)"
cleanup() { git worktree remove --force "$work" >/dev/null 2>&1 || rm -rf "$work"; }
trap cleanup EXIT

if git fetch --quiet "$REMOTE" "$BRANCH" 2>/dev/null; then
  git worktree add --quiet --detach "$work" "$REMOTE/$BRANCH"
else
  echo "No $REMOTE/$BRANCH yet - creating it."
  git worktree add --quiet --detach "$work"
  git -C "$work" checkout --quiet --orphan "$BRANCH-tmp"
fi

# Replace everything except .git and a CNAME that GitHub may have written when
# a custom domain was set in Settings > Pages. A CNAME in site/ wins if present.
find "$work" -mindepth 1 -maxdepth 1 ! -name .git ! -name CNAME -exec rm -rf {} +
cp -R site/. "$work/"

cd "$work"
git add -A
if git diff --cached --quiet; then
  echo "gh-pages is already up to date with main@$src_sha - nothing to publish."
  exit 0
fi
git commit --quiet -m "Publish main@$src_sha"
git push --quiet "$REMOTE" "HEAD:refs/heads/$BRANCH"
echo "Published main@$src_sha to $BRANCH."
