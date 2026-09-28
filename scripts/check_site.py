#!/usr/bin/env python3
"""Check the static site in site/ for anything that would break portability.

The site must work, unchanged, when:
  * opened straight from disk (file://),
  * served from a sub-path (https://ivvycode.github.io/demowebsite/),
  * served from a domain root (https://demowebsite.ivvy.com/).

So every internal reference must be a *relative* path to a file that exists.
Run:  python3 scripts/check_site.py        (exit code 1 on any error)
Uses only the Python standard library.
"""

import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

SITE = Path(__file__).resolve().parent.parent / "site"
URL_ATTRS = {"href", "src", "action", "poster", "data"}
# 404.html is served at arbitrary depths by GitHub Pages; it is self-contained.
SKIP_REF_CHECK = {"404.html"}
CSS_URL = re.compile(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)")


class RefCollector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []  # (line, attr, value)
        self.issues = []

    def handle_starttag(self, tag, attrs):
        line = self.getpos()[0]
        attrs = dict(attrs)
        for name, value in attrs.items():
            if name in URL_ATTRS and value is not None:
                self.refs.append((line, name, value.strip()))
            if name == "srcset" and value:
                for part in value.split(","):
                    if part.strip():
                        self.refs.append((line, name, part.strip().split()[0]))
        if tag == "script" and attrs.get("type") == "module":
            self.issues.append((line, 'ES modules (type="module") are blocked on file:// - use a classic script'))
        if tag == "base":
            self.issues.append((line, "<base> breaks either the sub-path or the custom-domain URL"))
        for url in CSS_URL.findall(attrs.get("style") or ""):
            self.refs.append((line, "style", url.strip()))


def check_ref(source: Path, value: str):
    """Return an error string for a bad reference, or None."""
    if not value or value.startswith(("#", "mailto:", "tel:", "data:", "javascript:")):
        return None
    parts = urlsplit(value)
    if parts.scheme in ("http", "https"):
        return None  # external; allowed (but the site should not depend on them)
    if parts.scheme:
        return f"unsupported URL scheme: {value}"
    if value.startswith("//"):
        return f"protocol-relative URL breaks on file:// - use https://: {value}"
    if value.startswith("/"):
        return f"root-absolute path breaks on the github.io sub-path and file:// - use a relative path: {value}"
    if not parts.path:
        return None  # e.g. "?foo" - same page
    if parts.path.endswith("/"):
        return f"directory link won't open index.html on file:// - link the file explicitly: {value}"
    target = (source.parent / unquote(parts.path)).resolve()
    try:
        target.relative_to(SITE)
    except ValueError:
        return f"path escapes site/: {value}"
    if not target.is_file():
        return f"missing file: {value}"
    return None


def main() -> int:
    errors = []
    for path in sorted(SITE.rglob("*")):
        if not path.is_file():
            continue
        rel = path.relative_to(SITE).as_posix()
        if path.suffix == ".html":
            parser = RefCollector()
            parser.feed(path.read_text(encoding="utf-8"))
            errors += [f"{rel}:{line}: {msg}" for line, msg in parser.issues]
            if rel in SKIP_REF_CHECK:
                continue
            for line, attr, value in parser.refs:
                err = check_ref(path, value)
                if err:
                    errors.append(f"{rel}:{line}: [{attr}] {err}")
        elif path.suffix == ".css":
            for lineno, text in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
                for value in CSS_URL.findall(text):
                    err = check_ref(path, value.strip())
                    if err:
                        errors.append(f"{rel}:{lineno}: [url()] {err}")
        elif path.suffix == ".js":
            for lineno, text in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
                if re.search(r"\b(fetch|XMLHttpRequest)\b", text):
                    errors.append(f"{rel}:{lineno}: fetch/XHR of local files is blocked on file:// - inline the data instead")

    if not (SITE / "index.html").is_file():
        errors.append("site/index.html is missing")
    if not (SITE / ".nojekyll").is_file():
        errors.append("site/.nojekyll is missing (GitHub Pages would run Jekyll)")

    if errors:
        print("Site check FAILED:\n  " + "\n  ".join(errors))
        return 1
    print("Site check passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
