---
name: fa-help
description: Answer Font Awesome questions using the official documentation
user-invokable: true
args:
  - name: question
    description: A question about Font Awesome (setup, styling, troubleshooting, APIs, upgrading, etc.)
    required: true
---

Answer Font Awesome questions by fetching and citing the official documentation. This skill grounds answers in authoritative, version-accurate content rather than relying on training data that may be stale.

## Documentation source

Font Awesome publishes LLM-friendly docs at `https://docs.fontawesome.com`. The index at `/llms.txt` lists every available page. Each page is a self-contained Markdown file with headings, tables, and code examples.

## Steps

1. **Fetch the documentation index.** Use `WebFetch` to retrieve `https://docs.fontawesome.com/llms.txt`. This file lists every available documentation page with its URL and a short description. Use a prompt like: "Return the complete content of this file exactly as-is. I need to see every URL and its description."

2. **Identify the relevant page(s).** Read the user's question and scan the `llms.txt` index to find the most relevant documentation URL(s). The URLs end in `.md` and the path structure is descriptive (e.g., `/web/setup/use-kit.md`, `/web/style/animate.md`, `/web/use-with/react/troubleshoot.md`). Most questions map to one or two pages. If a question spans topics, pick the most specific page first.

3. **Fetch the documentation page(s).** Use `WebFetch` to retrieve the relevant Markdown page(s) identified in the previous step. Fetch the most specific page first. If the answer requires context from a second page, fetch that too — but limit yourself to three pages maximum per question.

   When fetching, use a prompt like: "Return the full content of this documentation page as Markdown. Preserve all headings, code blocks, and tables."

4. **Synthesize the answer.** Using the fetched documentation as your primary source:
   - Answer the user's question directly and concisely.
   - Include relevant code examples from the docs, adapted to the user's context if possible.
   - If the user has a `.font-awesome.md` file in their project, tailor the answer to their specific integration method, version, and license.
   - If the docs describe multiple approaches, recommend the one that best fits the user's project.

5. **Cite the source.** At the end of your answer, include a link to the documentation page(s) you referenced so the user can read more. Convert the `.md` URL to a web URL by removing the `.md` extension. For example:

   > Source: [Use a Kit](https://docs.fontawesome.com/web/setup/use-kit)

6. **Offer related skills.** If the answer naturally leads to an action the user could take, offer the relevant skill:
   - If they're asking how to add an icon → offer `/add-icon`
   - If they're asking about setting up Font Awesome → offer `/setup-fa`
   - If they're looking for the right icon → offer `/suggest-icon`

## Guidelines

- **Never provide bare SVG markup.** If the user asks for raw `<svg>` output of a Font Awesome icon, do not generate it from your own knowledge or training data. Direct them to use `/add-icon` which can fetch authoritative SVG markup from the Font Awesome API.
- **Always fetch the docs.** Do not answer from memory alone — the docs are the authoritative source and may contain v7-specific information that differs from your training data.
- **Stay within scope.** This skill answers questions about Font Awesome. If the question is about general CSS, JavaScript, or a framework unrelated to Font Awesome, say so and answer briefly without fetching docs.
- **Be honest about gaps.** If the docs don't cover the user's question, say so. Don't fabricate an answer.
- **Respect the user's integration method.** If `.font-awesome.md` exists, tailor examples to their setup rather than showing generic code.
