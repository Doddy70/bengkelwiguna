#!/usr/bin/env python3

import argparse
import json
import sys
import urllib.error
import urllib.request

KIT_BASE_URL = "https://kit.fontawesome.com"
GRAPHQL_URL = "https://api.fontawesome.com"

# Families included in the free tier (used to filter when license is "free")
FREE_FAMILIES = {"classic"}

# Families included in the standard Pro tier (not "plus")
PRO_FAMILIES = {"classic", "duotone", "sharp", "sharp-duotone"}

parser = argparse.ArgumentParser(description="Fetch Font Awesome Kit configuration")
parser.add_argument("--kit-id", required=True, help="Kit token (e.g. e8aa7b71da)")
args = parser.parse_args()

# --- Step 1: Fetch the kit JS to extract config ---

url = f"{KIT_BASE_URL}/{args.kit_id}.js"

req = urllib.request.Request(
    url,
    headers={
        "Origin": "http://fa.local",
        "User-Agent": "fontawesome-agent-tools",
    },
)

try:
    with urllib.request.urlopen(req) as resp:
        first_line = resp.readline().decode("utf-8")
except urllib.error.HTTPError as e:
    if e.code == 403:
        print(f"Error: kit '{args.kit_id}' not found or access denied (HTTP 403)", file=sys.stderr)
    elif e.code == 404:
        print(f"Error: kit '{args.kit_id}' not found (HTTP 404)", file=sys.stderr)
    else:
        print(f"Error: HTTP {e.code} fetching kit '{args.kit_id}'", file=sys.stderr)
    sys.exit(1)
except urllib.error.URLError as e:
    print(f"Error: could not reach kit server: {e}", file=sys.stderr)
    sys.exit(1)

# Parse window.FontAwesomeKitConfig = {...}; from the first line
try:
    json_start = first_line.index("= ") + 2
    json_end = first_line.rindex(";")
    config = json.loads(first_line[json_start:json_end])
except (ValueError, json.JSONDecodeError) as e:
    print(f"Error: could not parse kit config from response: {e}", file=sys.stderr)
    sys.exit(1)

version = config.get("version", "unknown")
license_type = config.get("license", "unknown")
method = config.get("method", "unknown")
token = config.get("token", args.kit_id)
startup = config.get("startupFilename", "")

# --- Step 2: Query the GraphQL API for available families in this version ---

query = """
query ($version: String!) {
  release(version: $version) {
    familyStyles { family style }
  }
}
"""

req = urllib.request.Request(
    GRAPHQL_URL,
    data=json.dumps({
        "query": query,
        "variables": {"version": version},
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
    print(f"Error: version '{version}' not found in API", file=sys.stderr)
    sys.exit(1)

# Collect all families available in this release
all_families = sorted({fs["family"] for fs in release["familyStyles"]})

# Filter families based on kit license and tier
is_plus = "plus" in startup
if license_type == "free":
    families = [f for f in all_families if f in FREE_FAMILIES]
elif is_plus:
    families = all_families
else:
    families = [f for f in all_families if f in PRO_FAMILIES]

# Build a family → styles mapping for the available families
family_styles = {}
for fs in release["familyStyles"]:
    if fs["family"] in families:
        family_styles.setdefault(fs["family"], []).append(fs["style"])

print(f"Kit ID: {token}")
print(f"Version: {version}")
print(f"License: {license_type}")
print(f"Method: {method}")
print(f"Startup file: {startup}")
print(f"Families: {', '.join(families)}")
print()
for family in families:
    styles = sorted(family_styles.get(family, []))
    print(f"  {family}: {', '.join(styles)}")
