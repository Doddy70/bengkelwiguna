#!/usr/bin/env python3

import argparse
import json
import sys
import urllib.error
import urllib.request

GRAPHQL_URL = "https://api.fontawesome.com"

parser = argparse.ArgumentParser(description="Search Font Awesome icons")
parser.add_argument("--version", required=True, help="Font Awesome version (e.g. 6.7.2)")
parser.add_argument("--query", required=True, help="Search query")
parser.add_argument("--first", type=int, default=10, help="Max results to return (default: 10)")
args = parser.parse_args()

query = """
query ($version: String!, $query: String!, $first: Int) {
  search(version: $version, query: $query, first: $first) {
    id
    label
    unicode
    familyStylesByLicense {
      free { family style }
      pro { family style }
    }
  }
}
"""

req = urllib.request.Request(
    GRAPHQL_URL,
    data=json.dumps({
        "query": query,
        "variables": {
            "version": args.version,
            "query": args.query,
            "first": args.first,
        },
    }).encode(),
    headers={
        "Content-Type": "application/json",
        "User-Agent": "fontawesome-agent-tools",
    },
)

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
except urllib.error.URLError as e:
    print(f"Error: could not reach Font Awesome API: {e}", file=sys.stderr)
    sys.exit(1)

if "errors" in data:
    print(f"Error: API returned errors: {data['errors']}", file=sys.stderr)
    sys.exit(1)

results = data["data"]["search"]

if not results:
    print(f"No icons found for '{args.query}' in version {args.version}")
else:
    for icon in results:
        styles = icon["familyStylesByLicense"]
        free = styles.get("free") or []
        pro = styles.get("pro") or []
        availability = "free" if free else "pro-only"
        print(f"{icon['id']} — {icon['label']} (unicode: {icon['unicode']}, {availability})")
