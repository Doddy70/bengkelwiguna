#!/usr/bin/env python3

import json
import sys
import urllib.error
import urllib.request

GRAPHQL_URL = "https://api.fontawesome.com"

query = """
{
  releases {
    version
    isLatest
  }
}
"""

req = urllib.request.Request(
    GRAPHQL_URL,
    data=json.dumps({"query": query}).encode(),
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

for release in data["data"]["releases"]:
    if release["isLatest"]:
        print(release["version"])
        break
