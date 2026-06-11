# Path D: npm packages (no Kit)

1. Determine which packages to install based on the framework and license:

   **Free:**
   ```
   npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
   ```

   **Pro** (requires `.npmrc` configuration for the `@fortawesome` scope):
   ```
   @fortawesome:registry=https://npm.fontawesome.com/
   //npm.fontawesome.com/:_authToken=${FA_PACKAGE_TOKEN}
   ```
   Then install Pro packages as needed (e.g., `@fortawesome/pro-solid-svg-icons`).

2. Install the framework-specific component package:
   - React: `npm install @fortawesome/react-fontawesome`
   - Vue: `npm install @fortawesome/vue-fontawesome`
   - Angular: follow the Angular-specific setup from the fetched docs

3. Add the framework-specific initialization code (see `path-f-framework-init.md`).
