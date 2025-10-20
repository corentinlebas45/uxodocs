#!/usr/bin/env python3
"""
CI cleanup: make hydrated Hugo markdown safer for MDX parsing.

This script is intended to run in CI after hydrate.sh and before `docusaurus build`.
It performs conservative, non-destructive transformations:
 - remove lines that are exactly `[shortcode]`
 - remove image placeholders like `![image]([shortcode])`
 - wrap Hugo shortcodes (`{{< ... >}}`, `{{% ... %}}`, `{% ... %}`) into HTML comments
 - escape lone `{` and `}` outside code fences

The script only edits files under `docs/` and writes files back only if changed.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

SHORTCODE_LINE_RE = re.compile(r"^\s*\[shortcode\]\s*$")
IMAGE_SHORTCODE_RE = re.compile(r"!\[[^\]]*\]\(\s*\[shortcode\]\s*\)")

def process_file(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    out_lines = []
    changed = False
    in_code = False
    fence_re = re.compile(r"^\s*```")

    for line in lines:
        if fence_re.match(line):
            in_code = not in_code
            out_lines.append(line)
            continue

        if not in_code:
            # remove pure [shortcode] lines
            if SHORTCODE_LINE_RE.match(line):
                changed = True
                continue

            # remove image placeholders
            new_line = IMAGE_SHORTCODE_RE.sub("", line)
            if new_line != line:
                line = new_line
                changed = True

            # wrap known Hugo shortcodes into HTML comments to avoid MDX parsing
            # {{< ... >}} and {{% ... %}} and {% ... %}
            line2 = re.sub(r"\{\{<", "<!-- HUGO_SHORTCODE_START ", line)
            line2 = re.sub(r"\>\}\}", " HUGO_SHORTCODE_END -->", line2)
            line2 = re.sub(r"\{\{%", "<!-- HUGO_SHORTCODE_START ", line2)
            line2 = re.sub(r"%\}\}", " HUGO_SHORTCODE_END -->", line2)
            line2 = re.sub(r"\{%", "<!-- HUGO_SHORTCODE_START ", line2)
            line2 = re.sub(r"%\}", " HUGO_SHORTCODE_END -->", line2)

            if line2 != line:
                line = line2
                changed = True

            # escape lone braces not part of double-brace tokens
            # avoid touching '{{' or '}}' (we already handled some), so only replace single braces
            line3 = re.sub(r"(?<!\{)\{(?!\{)", r"\\{", line)
            line3 = re.sub(r"(?<!\})\}(?!\})", r"\\}", line3)
            if line3 != line:
                line = line3
                changed = True

        out_lines.append(line)

    new_text = "\n".join(out_lines) + ("\n" if text.endswith("\n") else "")
    if changed:
        path.write_text(new_text, encoding="utf-8")
    return changed

def main():
    md_files = list(DOCS.rglob("*.md"))
    edited = 0
    for p in md_files:
        try:
            if process_file(p):
                edited += 1
        except Exception as e:
            print(f"ERROR processing {p}: {e}")
    print(f"CI cleanup: scanned {len(md_files)} files, edited {edited} files")

if __name__ == "__main__":
    main()
