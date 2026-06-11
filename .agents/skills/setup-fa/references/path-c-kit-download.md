# Path C: Kit download

This downloads a Kit's assets directly into the project — useful for self-hosting or desktop use.

1. Ask the user for their Kit code.
2. Verify the user is authenticated for Kit download. Run `fa whoami` to check login status.
   - If logged in → proceed.
   - If not logged in, check if `FA_API_TOKEN` is set → if yes, proceed.
   - If neither, tell the user:
     > You need to be logged in to the Font Awesome CLI to download your Kit. Run `fa login` in a separate terminal, then come back here and try again. Alternatively, set the `FA_API_TOKEN` environment variable with your API token from https://fontawesome.com/account/general.
3. Determine the download type:
   - **Web project:** `fa kits --kit-token <code> --download web --unzip --output <dir>`
   - **Desktop project:** `fa kits --kit-token <code> --download desktop --unzip --output <dir>`
   Choose the output directory based on the project structure — e.g., `vendor/fontawesome`, `public/fontawesome`, `assets/fontawesome`, or ask the user.
4. Run the download command and verify the files were extracted.
5. For web projects, add the appropriate `<link>` or `<script>` tag pointing to the local files (follow the self-hosting docs fetched earlier).
