# Agent Workflow — Bengkel Wiguna

## Overview

This directory contains the agent workflow structure for the Bengkel Wiguna headless CMS project.

## Structure

```
agent-workflow/
├── prompts/              # System prompts (versioned)
│   └── bengkel-agent-v1.md   # Main agent prompt
├── config/              # Environment configuration
│   └── environment.yaml     # API endpoints, TTL, etc.
├── tests/               # Golden test cases
│   └── golden-tests.md     # Validation criteria
└── logs/                # Runtime logs (gitignored)
```

## Quick Start

1. **Read context** — Always start by reading `.maestro.md`
2. **Check decisions** — Review `.maestro/decisions.jsonl`
3. **Verify build** — Run `npm run build` before completing tasks
4. **Log actions** — Structured JSON logging for audit trail

## Agent Types

### Frontend Agent
- Scope: `bexon/` or `bengkel-wiguna-nextjs/`
- Tools: `read`, `write`, `edit`, `bash`

### Backend Agent
- Scope: `bw-headless-cms/`
- Tools: PHP editing, REST API development

## Conventions

See `CONVENTIONS.md` for:
- Prompt format standards
- Tool naming conventions
- Logging format
- Output schema standards

## Pending Tasks (from .maestro.md)

- [ ] Deploy plugin v1.7.0 via FTP/SFTP
- [ ] Flush transients post-deploy
- [ ] Add FAQ content in WP Admin
- [ ] Test FAQ display at `/layanan-spesialis/[slug]/`
- [ ] Dynamic related layanan sidebar

## Quality Gates

1. `npm run build` — zero errors
2. All golden URL routes — 200 OK
3. No `dynamicParams` usage
4. JSDoc on all `wordpress.js` functions
5. Zero unauthorized visual changes (Zero Initiative Rule)