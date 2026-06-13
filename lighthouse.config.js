{
  "ci": {
    "collect": {
      "url": [
        "http://localhost:3000"
      ],
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop",
        "formFactor": "desktop",
        "throttling": {
          "rttMs": 40,
          "throughputKbps": 10240,
          "cpuSlowdownMultiplier": 1
        },
        "onlyCategories": ["performance", "accessibility", "best-practices", "seo"]
      }
    },
    "assert": {
      "performance": [">=0.85"],
      "accessibility": [">=0.90"],
      "best-practices": [">=0.90"],
      "seo": [">=0.90"],
      "categories": {
        "performance": ["warn", ">=0.70"],
        "accessibility": ["error", ">=0.90"],
        "best-practices": ["error", ">=0.90"],
        "seo": ["error", ">=0.90"]
      },
      "assertions": {
        "categories:performance": ["warn", ">=0.70"],
        "categories:accessibility": ["error", ">=0.90"],
        "categories:best-practices": ["error", ">=0.90"],
        "categories:seo": ["error", ">=0.90"],
        "first-contentful-paint": ["warn", "<=1800"],
        "largest-contentful-paint": ["error", "<=2500"],
        "total-blocking-time": ["warn", "<=200"],
        "cumulative-layout-shift": ["error", "<=0.1"],
        "speed-index": ["warn", "<=3000"],
        "interactive": ["warn", "<=3800"]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  },
  "server": {
    "port": 9001
  }
}
