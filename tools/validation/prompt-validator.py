#!/usr/bin/env python3
"""
UK Legal Prompt Validator
Run:  python tools/validation/prompt-validator.py <file.md>
"""

import sys, re, yaml
from pathlib import Path

# --- repo-wide allowed values -----------------------------------------------
VALID_JURISDICTIONS = {
    "england-wales", "scotland", "northern-ireland", "uk-wide"
}
VALID_TASKS = {"drafting", "reviewing", "summarising", "analysis"}

REQUIRED_FIELDS = [
    "prompt_id", "title", "practice_area", "task_type",
    "jurisdiction", "complexity", "risk_level", "author"
]

# ---------------------------------------------------------------------------

def extract_yaml(text: str):
    m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not m:
        raise ValueError("Missing or malformed YAML front-matter")
    return yaml.safe_load(m.group(1))

def validate(meta: dict):
    missing = [f for f in REQUIRED_FIELDS if f not in meta]
    if missing:
        return False, f"Missing field(s): {', '.join(missing)}"

    if meta["jurisdiction"] not in VALID_JURISDICTIONS:
        return False, f"Invalid jurisdiction: {meta['jurisdiction']}"

    if meta["task_type"] not in VALID_TASKS:
        return False, f"Invalid task_type: {meta['task_type']}"

    return True, "✓ Metadata valid"

# ---------------------------------------------------------------------------

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: validator <prompt-file>")
        sys.exit(1)

    file = Path(sys.argv[1])
    if not file.exists():
        print(f"File not found: {file}")
        sys.exit(1)

    content = file.read_text(encoding="utf-8")
    try:
        meta = extract_yaml(content)
    except ValueError as e:
        print(f"✗ {e}")
        sys.exit(1)

    ok, msg = validate(meta)
    print(msg)
    sys.exit(0 if ok else 1)
