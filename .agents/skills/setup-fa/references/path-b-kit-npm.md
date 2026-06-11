# Path B: Kit package via npm

1. Ask the user for their Kit code.
2. Fetch Kit details to determine version and available families:
   - **`fa` CLI:** First verify auth by running `fa whoami`. If logged in (or `FA_API_TOKEN` is set), run `fa kits --kit-token <code>` to get the Kit's technology setting. If not authenticated, prompt the user to run `fa login` in a separate terminal first, or fall back below.
   - **Fallback:** Run `./scripts/fetch-kit.py --kit-id <code>` (in the `add-icon` skill directory).
3. Configure the npm registry for the `@awesome.me` scope. Add to `.npmrc` in the project root:
   ```
   @awesome.me:registry=https://npm.fontawesome.com/
   //npm.fontawesome.com/:_authToken=${FA_PACKAGE_TOKEN}
   ```
   Tell the user they need to set the `FA_PACKAGE_TOKEN` environment variable with their Font Awesome package token (found at https://fontawesome.com/account/general under "Package Manager Tokens").
4. Install the Kit package:
   - npm: `npm install @awesome.me/kit-<code>`
   - yarn: `yarn add @awesome.me/kit-<code>`
   - pnpm: `pnpm add @awesome.me/kit-<code>`
5. Add the framework-specific initialization code (see `path-f-framework-init.md`).
