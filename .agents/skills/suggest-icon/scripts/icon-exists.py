#!/usr/bin/env python3

import argparse
import json
import sys
import urllib.error
import urllib.request

GRAPHQL_URL = "https://api.fontawesome.com"

parser = argparse.ArgumentParser(description="Check if a Font Awesome icon exists")
parser.add_argument("--version", required=True, help="Font Awesome version (e.g. 6.7.2)")
parser.add_argument("--icon-name", required=True, help="Icon name to check (e.g. coffee)")
args = parser.parse_args()

query = """
query ($version: String!, $name: String!) {
  release(version: $version) {
    icon(name: $name) {
      id
      label
      familyStylesByLicense {
        free { family style }
        pro { family style }
      }
    }
  }
}
"""

req = urllib.request.Request(
    GRAPHQL_URL,
    data=json.dumps({
        "query": query,
        "variables": {"version": args.version, "name": args.icon_name},
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

release = data["data"]["release"]
if release is None:
    print(f"Error: version '{args.version}' not found", file=sys.stderr)
    sys.exit(1)

icon = release["icon"]

if icon is None:
    print(f"Icon '{args.icon_name}' does not exist in version {args.version}")
    sys.exit(1)

print(f"Icon '{icon['id']}' (label: {icon['label']}) exists in version {args.version}")

styles = icon["familyStylesByLicense"]
free = styles.get("free") or []
pro = styles.get("pro") or []


def format_style(s):
    return "{} {}".format(s["family"], s["style"])


if free:
    print("  Free: {}".format(", ".join(format_style(s) for s in free)))
if pro:
    print("  Pro: {}".format(", ".join(format_style(s) for s in pro)))
