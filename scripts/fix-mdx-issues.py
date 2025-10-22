#!/usr/bin/env python3
"""
Conservative, idempotent fixer for MDX issues coming from Hugo-hydrated markdown.

Usage:
  - Dry-run (default): python3 scripts/fix-mdx-issues.py --dry-run
  - Apply changes: python3 scripts/fix-mdx-issues.py --apply

What it does (conservative):
  - Skip files inside .git or node_modules
  - Ignore content inside fenced code blocks
  - Escape angle-bracket tokens like <HOME_DIR> -> &lt;HOME_DIR&gt;
  - Self-close simple <br> tags to <br />
  - Wrap contiguous XML/HTML-like lines (starting with '<' and not code) into ```xml fenced blocks
  - Replace occurrences of unescaped `{` or `}` outside code blocks that look like placeholders (e.g. \{something\}) by wrapping the line in a ```text``` block when ambiguous

This is intentionally conservative to avoid changing semantic content.
"""

import argparse
import os
import re
import difflib
from pathlib import Path
from typing import List, Tuple


DOCS_DIR = Path("docs")
EXCLUDE_DIRS = {".git", "node_modules", "venv", "env"}


def find_markdown_files(root: Path) -> List[Path]:
    files = []
    for p in root.rglob("*.md"):
        if any(part in EXCLUDE_DIRS for part in p.parts):
            continue
        files.append(p)
    return files


def process_file(path: Path) -> Tuple[bool, List[str]]:
    """Return (changed, new_lines)"""
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()

    in_fence = False
    fence_lang = ""
    changed = False
    out_lines: List[str] = []

    xml_block_open = False
    xml_acc: List[str] = []

    angle_re = re.compile(r"<(HOME_DIR|HOME|HOME_PATH|HOME_DIRS|HOME_DIR_PLACEHOLDER|[^\s>]+)>")
    simple_br_re = re.compile(r"^(\s*)<br>(\s*)$")
    # heuristic: lines that look like xml/html tags or contain '<' and '>'
    xml_like_re = re.compile(r"^\s*<[^>]+>.*$|.*<[^>]+>.*")
    placeholder_re = re.compile(r"\{[^}]+\}")
    # inline HTML tags to convert to markdown equivalents when safe
    inline_tag_patterns = [
        (re.compile(r"<i>([^<]+)</i>"), r"*\1*"),
        (re.compile(r"<em>([^<]+)</em>"), r"*\1*"),
        (re.compile(r"<b>([^<]+)</b>"), r"**\1**"),
        (re.compile(r"<strong>([^<]+)</strong>"), r"**\1**"),
        (re.compile(r"<code>([^<]+)</code>"), r"`\1`"),
    ]

    def flush_xml_block():
        nonlocal xml_block_open, xml_acc, changed, out_lines
        if xml_block_open and xml_acc:
            out_lines.append("```xml")
            out_lines.extend(xml_acc)
            out_lines.append("```")
            xml_acc = []
            xml_block_open = False
            changed = True

    for i, line in enumerate(lines):
        # detect code fence start/end
        m = re.match(r"^(```+)(.*)$", line)
        if m:
            if not in_fence:
                in_fence = True
                fence_lang = m.group(2).strip()
            else:
                in_fence = False
                fence_lang = ""
            # if we were collecting an xml block, flush it before fence
            flush_xml_block()
            out_lines.append(line)
            continue

        if in_fence:
            out_lines.append(line)
            continue

        # escape simple <HOME_DIR> like tokens
        new_line = angle_re.sub(lambda m: "&lt;" + m.group(1) + "&gt;", line)
        if new_line != line:
            line = new_line
            changed = True

        # convert safe inline HTML tags to markdown equivalents
        for patt, repl in inline_tag_patterns:
            if patt.search(line):
                line2 = patt.sub(repl, line)
                if line2 != line:
                    line = line2
                    changed = True

        # self-close <br>
        mbr = simple_br_re.match(line)
        if mbr:
            newline = mbr.group(1) + "<br />" + mbr.group(2)
            out_lines.append(newline)
            changed = True
            continue

        # detect xml-like contiguous lines and gather them
        if xml_like_re.match(line):
            # escape backslashes in xml-like lines to avoid mdx-jsx attribute parse errors
            safe_line = line.replace('\\', '&#92;')
            xml_acc.append(safe_line)
            xml_block_open = True
            continue
        else:
            if xml_block_open:
                flush_xml_block()

        # placeholders / curly braces heuristics
        if placeholder_re.search(line):
            # if line already contains backticks or code fence, skip
            if not re.search(r"`.+`", line):
                # wrap the line in a text code fence to avoid MDX interpreting braces
                out_lines.append("```text")
                out_lines.append(line)
                out_lines.append("```")
                changed = True
                continue

        out_lines.append(line)

    # flush at EOF
    flush_xml_block()

    if changed:
        return True, out_lines
    return False, lines


def run(dry_run: bool):
    md_files = find_markdown_files(DOCS_DIR)
    changed_files = []
    for p in md_files:
        changed, new_lines = process_file(p)
        if changed:
            changed_files.append(p)
            if not dry_run:
                p.write_text("\n".join(new_lines) + "\n", encoding="utf-8")

    print(f"Scanned {len(md_files)} markdown files; would change/changed: {len(changed_files)}")
    for p in changed_files[:200]:
        print(p)

    if dry_run and changed_files:
        print("Dry-run: no files were modified. Rerun with --apply to write changes.")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--apply", action="store_true", help="Write changes to files")
    args = parser.parse_args()
    run(dry_run=not args.apply)


if __name__ == "__main__":
    main()
