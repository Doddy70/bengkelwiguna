# Workflow

## Methodology
Context-Driven Development (CDD) using Conductor artifacts.

## Git Conventions
- **Commit format**: `type(scope): message`
- **Standard**: Follow `GEMINI.md` and `CLAUDE.md` mandates.

## Quality Gates
| Gate | Requirement |
|---|---|
| Hydration | Zero hydration mismatches |
| Dynamic Data | No hardcoded fallbacks in production |
| Types | Strict TS (No `any`) |
