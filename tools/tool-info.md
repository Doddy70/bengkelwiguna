Tool Conventions

- Naming: `verb_noun.js` (e.g., `run_test.js`)
- Description template: What → When → When Not → Returns
- Error format: { status: 'error', code, message }

Example tool: `greet_user.js`
- What: Prints a greeting or returns JSON greeting
- When: Use for basic connectivity checks
- When Not: Do not use for I/O-heavy tasks
- Returns: { status: 'ok', greeting, timestamp }
