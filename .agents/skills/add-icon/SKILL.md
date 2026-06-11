---
name: add-icon
description: Add a Font Awesome icon to the user's project, generating the correct code for their integration method
user-invokable: true
args:
  - name: icon
    description: An icon name (e.g. cart-shopping) or concept (e.g. shopping cart)
    required: true
  - name: style
    description: Override the default icon style (e.g. solid, regular, light, thin, duotone)
    required: false
  - name: location
    description: Where to insert the icon (e.g. "the checkout button in src/components/Header.tsx")
    required: false
---

Add a Font Awesome icon to the user's project. This skill handles icon name resolution, project detection, and code generation for every Font Awesome integration method.

Scripts referenced from `suggest-icon` are relative to `plugins/icons/skills/suggest-icon/`. Scripts referenced from `add-icon` are relative to `plugins/icons/skills/add-icon/`. Run them from their respective directories.

## Tool selection

At the start, run `command -v fa` to check whether the `fa` CLI is available on PATH.

- **If `fa` is found:** use it for icon lookups and kit fetching (it returns structured JSON). For kit operations (`fa kits`), check auth first: run `fa whoami` to see if the user is logged in. If logged in, `fa kits` will work directly. If not logged in but `FA_API_TOKEN` is set, `fa kits` will also work. If neither, tell the user: "You need to be logged in to the Font Awesome CLI for kit operations. Run `fa login` in a separate terminal, then come back here and try again." If they cannot log in, fall back to `fetch-kit.py`.
- **If `fa` is not found:** fall back to the Python scripts described below.
- **`latest-version.py`** is always used for version detection — the `fa` CLI has no equivalent.

## Steps

### 1. Resolve the icon name

First, determine the Font Awesome version. If the user specifies one, use that. Otherwise run `./scripts/latest-version.py` (in the `suggest-icon` skill directory) to get the latest.

Then verify the icon exists:

- **`fa` CLI:** Run `fa icons --version <version> --name <icon>`. The icon exists if `data.release.icon` is non-null. The `familyStylesByLicense` field shows the free/pro breakdown.
- **Fallback:** Run `./scripts/icon-exists.py --version <version> --icon-name <icon>`. Exit code `0` means the icon exists; exit code `1` means it does not.

If the icon does not exist, invoke the `/suggest-icon` skill internally with the user's `icon` argument as the use-case. Auto-accept the top recommendation and continue with that icon name. Do not ask the user to confirm — a working icon is better than a broken one.

### 2. Determine the integration method

Check for a `.font-awesome.md` file in the project root.

#### If `.font-awesome.md` exists

Read it and use the configuration it describes. Skip discovery and proceed to step 3. However, keep the file's contents in mind — if any later step reveals information that is missing or incomplete in the file (e.g., a new import pattern, a family not listed, a wrapper component not documented), you will update it at the end (see step 6).

#### If `.font-awesome.md` does not exist

Run a discovery process to figure out how the project uses Font Awesome. **Use a subagent** (via the Agent tool with `subagent_type: "Explore"`) to perform this discovery. The subagent should search for the following sources (in order of specificity) and return a structured summary of what it found:

1. **`package.json` / lock files** — look for Font Awesome packages:
   - `@fortawesome/react-fontawesome` → React component integration
   - `@fortawesome/vue-fontawesome` → Vue component integration
   - `@fortawesome/fontawesome-svg-core` → SVG core (used by React/Vue)
   - `@fortawesome/fontawesome-free` or `@fortawesome/fontawesome-pro` → general SVG+JS or web font
   - `@fortawesome/free-solid-svg-icons`, `@fortawesome/pro-solid-svg-icons`, etc. → individual icon packages (note the style and license)

2. **HTML files / templates** — look for:
   - Font Awesome Kit script tags: `<script src="https://kit.fontawesome.com/XXXXXX.js"...>` → Kit (SVG+JS). Extract the kit ID (the token before `.js`).
   - CDN links in `<link>` tags: `cdnjs.cloudflare.com/ajax/libs/font-awesome/` or `use.fontawesome.com` → Web Fonts+CSS via CDN
   - `<i class="fa-solid fa-...">` or `<i class="fas fa-...">` usage patterns → class-based (Web Fonts+CSS or SVG+JS)

3. **Import statements in source files** — scan for:
   - `import { FontAwesomeIcon }` → React component
   - `import { library }` from `@fortawesome/fontawesome-svg-core` → library approach
   - Individual icon imports like `import { faCoffee }` → individual import approach

4. **SVG sprite sheets** — look for `<use href="...sprites/...">` patterns or sprite SVG files.

5. **Web Components** — look for `<fa-icon>` custom elements.

6. **Other frameworks** — look for Angular (`angular.json`, `FontAwesomeModule`), Svelte, etc.

The subagent should return: which Font Awesome packages are installed (with versions), any kit IDs found, CDN URLs, the framework integration method, import patterns observed in source files, the license (free vs pro), and any project conventions (wrapper components, default sizing, etc.).

After the subagent returns, if a kit ID was found, fetch the kit details:

- **`fa` CLI:** Run `fa kits --kit-token <id>`. Returns JSON with the kit's version, license, technology, and available families. Requires the user to be logged in (`fa whoami` returns success) or `FA_API_TOKEN` to be set. If neither, prompt the user to run `fa login` in a separate terminal first.
- **Fallback:** Run `./scripts/fetch-kit.py --kit-id <id>` (in the `add-icon` skill directory) to get the kit's version, license, method, and available families.

After discovery, determine:

- **Integration method** — the primary way icons are rendered
- **Kit ID / CDN URL** — if using a kit or CDN
- **License** — `free` or `pro`. Detect from: kit config (via `fetch-kit.py`), npm package names (`fontawesome-free` vs `fontawesome-pro`, `free-*-svg-icons` vs `pro-*-svg-icons`), or CDN URL patterns.
- **Default style** — the most commonly used style in the project (solid, regular, light, thin, duotone). If unclear, default to `solid`.
- **Default family** — the most commonly used family (classic, duotone, sharp, sharp-duotone, chisel, etch, graphite, jelly, jelly-duo, jelly-fill, notdog, notdog-duo, slab, slab-press, thumbprint, utility, utility-duo, utility-fill, whiteboard). If unclear, default to `classic`.
- **Available families** — the set of families the project has access to. For kits, use the output of `fetch-kit.py`. For npm, infer from installed packages. For free users, only `classic` is available.
- **Import pattern** — for JS frameworks: individual imports per-file vs. library registration
- **Version** — the Font Awesome version in use
- **Project conventions** — any wrapper components, standard sizing, or patterns observed

Write the results to `.font-awesome.md` in the project root. Read `font-awesome-md-format.md` (in this skill's directory, `plugins/icons/skills/add-icon/`) for the template and format to use.

Tell the user: "I've written `.font-awesome.md` with your project's Font Awesome configuration. You should commit this file so the team benefits and future icon additions are faster."

**Do not proceed to the next step until `.font-awesome.md` has been written.** The remaining steps depend on this file. If discovery fails to produce enough information to write a meaningful `.font-awesome.md`, stop and ask the user to clarify their Font Awesome setup before continuing.

### 3. Determine the icon style and family

**Style** — use this precedence:

1. If the user passed a `style` argument, use that.
2. Otherwise, use the default style from `.font-awesome.md`.
3. If neither, default to `solid`.

**Family** — use this precedence:

1. If the user explicitly requested a family, use that.
2. Otherwise, use the default family from `.font-awesome.md`.
3. If neither, default to `classic`.

Verify the icon is available in the chosen style and family by checking the output from `icon-exists.py` (it prints available families and styles). If the icon is not available in the requested style or family, tell the user and suggest available alternatives. Also check that the chosen family is in the project's available families list — if not, warn the user.

### 4. Generate the code

Based on the integration method from `.font-awesome.md`, generate the correct code. Below are the patterns for each method. Match the conventions observed in the project — don't introduce a new pattern if the project already has an established one.

#### React (`@fortawesome/react-fontawesome`)

**Individual imports (preferred when project uses this pattern):**

```jsx
import { faCartShopping } from '@fortawesome/pro-solid-svg-icons'
// or @fortawesome/free-solid-svg-icons for free icons

<FontAwesomeIcon icon={faCartShopping} />
```

The import name is the icon name in camelCase prefixed with `fa`. For example: `cart-shopping` → `faCartShopping`.

The package name follows the pattern: `@fortawesome/{free|pro}-{style}-svg-icons`. For example:
- `@fortawesome/free-solid-svg-icons`
- `@fortawesome/pro-regular-svg-icons`
- `@fortawesome/pro-duotone-svg-icons`
- `@fortawesome/sharp-solid-svg-icons`
- `@fortawesome/sharp-duotone-solid-svg-icons`

**Library approach (when project registers icons globally):**

```jsx
// In the library setup file:
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping } from '@fortawesome/pro-solid-svg-icons'
library.add(faCartShopping)

// In components — use string reference:
<FontAwesomeIcon icon="cart-shopping" />
// or with explicit prefix for non-solid styles:
<FontAwesomeIcon icon={['far', 'cart-shopping']} />
```

Style prefixes: `fas` (solid), `far` (regular), `fal` (light), `fat` (thin), `fad` (duotone), `fass` (sharp solid), `fasr` (sharp regular), `fasl` (sharp light), `fast` (sharp thin), `fasd` (sharp duotone).

#### Vue (`@fortawesome/vue-fontawesome`)

Similar to React but with Vue component syntax:

```vue
<font-awesome-icon :icon="['fas', 'cart-shopping']" />
```

Imports follow the same package/naming conventions as React.

#### SVG+JS Kit (`<script src="https://kit.fontawesome.com/...">`)

```html
<i class="fa-solid fa-cart-shopping"></i>
```

Class pattern depends on the family:

- **classic** (default, no family prefix needed): `fa-{style} fa-{icon-name}`
  - `<i class="fa-solid fa-cart-shopping"></i>`
- **sharp**: `fa-sharp fa-{style} fa-{icon-name}`
  - `<i class="fa-sharp fa-regular fa-cart-shopping"></i>`
- **sharp-duotone**: `fa-sharp-duotone fa-{style} fa-{icon-name}`
  - `<i class="fa-sharp-duotone fa-solid fa-cart-shopping"></i>`
- **duotone**: `fa-duotone fa-{style} fa-{icon-name}`
  - `<i class="fa-duotone fa-solid fa-cart-shopping"></i>`
- **Other FA7 families** (chisel, etch, graphite, jelly, jelly-duo, jelly-fill, notdog, notdog-duo, slab, slab-press, thumbprint, utility, utility-duo, utility-fill, whiteboard): `fa-{family} fa-{style} fa-{icon-name}`
  - `<i class="fa-slab fa-solid fa-cart-shopping"></i>`
  - `<i class="fa-jelly fa-regular fa-cart-shopping"></i>`

No imports needed — the kit handles loading.

#### Web Fonts+CSS (CDN or npm)

Same class syntax as SVG+JS Kit:

```html
<i class="fa-solid fa-cart-shopping"></i>
```

Family prefixes work the same way (e.g., `fa-sharp fa-solid fa-cart-shopping`). Ensure the appropriate CSS file is loaded (all.css or individual style sheets).

#### SVG Sprites

```html
<svg class="icon">
  <use href="/path/to/sprites/solid.svg#cart-shopping"></use>
</svg>
```

Match the sprite path used elsewhere in the project.

#### Angular

```html
<fa-icon [icon]="faCartShopping"></fa-icon>
```

With the corresponding import in the component's TypeScript file.

#### Web Components (`<fa-icon>`)

```html
<fa-icon class="fa-solid fa-cart-shopping"></fa-icon>
```

### Important: bare SVG markup

**Never generate Font Awesome SVG markup (raw `<svg>` elements) from your own knowledge or training data.** If a user needs bare SVG output — for instance, to inline an icon as an `<svg>` element — you must fetch it from the Font Awesome API using the `fa` CLI:

```
fa icons --version <version> --name <icon> --svg-format html
```

The `--svg-format` flag accepts `html`, `data`, or `icon-definition`. This requires the user to be logged in (`fa whoami`) or `FA_API_TOKEN` to be set. If neither, prompt the user to run `fa login` in a separate terminal first.

Do not approximate, reconstruct, or guess SVG path data. The authoritative source is always the Font Awesome API.

### 5. Insert or display

**If the user provided a `location` argument:**

Find the specified location in the code. Insert the icon code there, including any necessary import statements at the top of the file. Follow the project's existing patterns for formatting and placement.

**If no location was provided:**

Present the code snippet in a fenced code block with the appropriate language tag. If imports are needed, show them separately so the user knows what goes where.

Example output:

> Add this import (if not already present):
> ```jsx
> import { faCartShopping } from '@fortawesome/pro-solid-svg-icons'
> ```
>
> Then use the component:
> ```jsx
> <FontAwesomeIcon icon={faCartShopping} />
> ```

### 6. Pro icon notice

If the icon is Pro-only and the project is using the free tier (based on `.font-awesome.md` license field or discovered packages), warn the user:

> Note: `cart-shopping` requires a Font Awesome Pro [subscription](https://fontawesome.com/plans). Your project appears to be using Font Awesome Free.

### 7. Update `.font-awesome.md` if needed

Review whether any information discovered during this run is missing from `.font-awesome.md`. Examples of things that might be incomplete:

- A new import pattern was used that isn't documented under **Import Pattern**
- A family or style was encountered that isn't listed under **Families**
- A wrapper component or project convention was observed that isn't in **Conventions**
- The version, license, or integration method has changed

If anything is missing or outdated, update `.font-awesome.md` with the new information — keep the same format, just fill in the gaps. Do not rewrite sections that are already accurate. Let the user know what was updated so they can commit the change.
