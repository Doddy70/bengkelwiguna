---
name: setup-fa
description: Set up Font Awesome in a project from scratch, including Kit download and package configuration
user-invokable: true
args:
  - name: method
    description: "Preferred integration method: kit, npm, self-host, or auto (default: auto)"
    required: false
  - name: framework
    description: "Target framework if not auto-detected: react, vue, angular, ember, svelte, wordpress, html"
    required: false
---

Set up Font Awesome in a project from scratch. This skill handles everything from detecting the project type, through downloading a Kit or installing packages, to writing the initial integration code and creating `.font-awesome.md` so that `/add-icon` works immediately afterward.

Scripts referenced from `suggest-icon` are relative to `plugins/icons/skills/suggest-icon/`. Scripts referenced from `add-icon` are relative to `plugins/icons/skills/add-icon/`. Run them from their respective directories.

## Important: bare SVG markup

**Never generate Font Awesome SVG markup (raw `<svg>` elements) from your own knowledge or training data.** If a bare SVG is needed during setup (e.g., for verification), fetch it from the Font Awesome API using `fa icons --version <version> --name <icon> --svg-format html`. This requires the user to be logged in (`fa whoami`) or `FA_API_TOKEN` to be set.

## Pre-flight check

Before starting, check whether `.font-awesome.md` already exists in the project root. If it does, Font Awesome is already configured. Tell the user and ask if they want to reconfigure, update their setup, or if they had a different goal. Offer `/fa-help` if they have a question about their existing setup, or `/add-icon` if they want to start using icons.

## Tool selection

Run `command -v fa` to check whether the `fa` CLI is available on PATH.

- **If `fa` is found:** use it for Kit operations and version queries (it returns structured JSON). For kit operations (`fa kits`), check auth first: run `fa whoami` to see if the user is logged in. If logged in, `fa kits` will work directly. If not logged in but `FA_API_TOKEN` is set, `fa kits` will also work. If neither, tell the user: "You need to be logged in to the Font Awesome CLI for kit operations. Run `fa login` in a separate terminal, then come back here and try again."
- **If `fa` is not found:** fall back to the Python scripts described below where applicable.
- **`latest-version.py`** (in the `suggest-icon` skill directory) is always used for version detection.

## Steps

### 1. Detect the project type

**Use a subagent** (via the Agent tool with `subagent_type: "Explore"`) to determine:

- **Package manager** — look for `package.json` (npm/yarn/pnpm), `requirements.txt` / `pyproject.toml` (Python), `composer.json` (PHP), `Gemfile` (Ruby), or no package manager (static HTML).
- **Framework** — look for:
  - `react`, `react-dom`, `next`, `gatsby` in package.json → React
  - `vue`, `nuxt` in package.json → Vue
  - `angular.json` or `@angular/core` in package.json → Angular
  - `ember-cli` in package.json → Ember
  - `svelte` in package.json → Svelte
  - `wp-content/`, `functions.php`, `style.css` with WordPress theme headers → WordPress
  - `.html` files with no framework → static HTML
- **Existing Font Awesome traces** — check if Font Awesome is partially installed (old version, broken setup, etc.). Look for `@fortawesome` packages in `package.json`, Kit script tags in HTML, CDN links, or Font Awesome CSS/font files.
- **License clues** — `fontawesome-pro` packages, Pro CDN URLs, or Kit config indicating Pro.
- **Project structure** — where HTML templates live, where CSS/JS entry points are, where components are defined.

If the user passed a `framework` argument, use that instead of auto-detecting.

The subagent should return a structured summary of what it found.

### 2. Recommend an integration method

Based on the project type and any user preference (`method` argument), recommend one of these approaches. If the user specified a `method`, use that. Otherwise, follow this decision tree:

```
Has a Font Awesome account/Kit?
├── Yes → Kit (best experience, auto-subsetting, custom icons, easy updates)
│   ├── JS framework (React/Vue/Angular)? → Kit Package via npm (@awesome.me/kit-*)
│   ├── Static HTML / server-rendered? → Kit embed code (script tag or CSS link)
│   └── Desktop app? → Kit download (desktop)
└── No / Unknown
    └── Recommend signing up at https://fontawesome.com (free accounts available)
        then follow the Kit path above.
```

Always recommend creating a Font Awesome account and using a Kit — even for free-tier users. Kits provide the best experience (auto-subsetting, easy updates, custom icons) and a free account is all that's needed. Do not recommend third-party CDNs or other unofficial distribution methods.

Present the recommendation to the user with a brief explanation of why. **Wait for the user to confirm before proceeding** — setup involves installing packages or modifying project files.

### 3. Fetch documentation for the chosen method

Use `WebFetch` to retrieve `https://docs.fontawesome.com/llms.txt` — this is an index of all available documentation pages with URLs and descriptions. Scan the index to find the setup page(s) most relevant to the chosen integration method and framework. Look for URLs containing keywords like `setup`, `use-kit`, `packages`, `host-yourself`, `use-with/react`, `use-with/vue`, `kit-download`, etc.

Then fetch the relevant page(s) using `WebFetch`. When fetching, use a prompt like: "Return the full content of this documentation page as Markdown. Preserve all headings, code blocks, and tables."

This ensures the instructions are current and version-accurate. Do not rely on training data alone for setup instructions — the docs are authoritative.

### 4. Execute the setup

Follow the path that matches the chosen method. Each path is documented in a separate reference file under `references/` (relative to this skill's directory). Read the appropriate file for detailed instructions.

| Method | Reference file |
|--------|---------------|
| Kit embed code (script tag or CSS link) | `references/path-a-kit-embed.md` |
| Kit package via npm (`@awesome.me/kit-*`) | `references/path-b-kit-npm.md` |
| Kit download (self-host or desktop) | `references/path-c-kit-download.md` |
| npm packages without a Kit (`@fortawesome/*`) | `references/path-d-npm-packages.md` |

After completing the path-specific steps, if the method involved installing npm packages (Paths B, D), read `references/path-f-framework-init.md` for framework-specific initialization code.

### 5. Verify the setup

Add a test icon to confirm everything is working:

1. Find a visible template or component in the project.
2. Add a simple icon (e.g., `fa-check` or `fa-font-awesome`) using the appropriate syntax for the integration method.
3. Tell the user to preview the page/app to confirm the icon renders.
4. If they report issues, refer back to the `llms.txt` index to find the relevant troubleshooting page (look for URLs containing `troubleshoot`) and fetch it to guide diagnosis.

### 6. Write `.font-awesome.md`

Create `.font-awesome.md` in the project root. Read `font-awesome-md-format.md` (in the `add-icon` skill directory, `plugins/icons/skills/add-icon/`) for the template and format to use. Populate it with everything discovered and configured during setup.

Tell the user: "I've written `.font-awesome.md` with your project's Font Awesome configuration. Commit this file so the team benefits and `/add-icon` works immediately."

### 7. Next steps

After setup is complete, tell the user what they can do next:

- **Add icons:** "Run `/add-icon <icon-name>` to add any Font Awesome icon to your code."
- **Find icons:** "Run `/suggest-icon <concept>` to find the right icon for your use case."
- **Get help:** "Run `/fa-help <question>` to get answers from the official Font Awesome docs."
