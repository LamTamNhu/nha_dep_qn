# Repository Guidelines

## Project Structure & Module Organization
- Source: prefer `src/` or `app/` for application code; shared libs in `lib/`.
- Tests: keep unit tests in `tests/` mirroring source paths (e.g., `src/utils/date.ts` → `tests/utils/date.test.ts`).
- Assets: static files in `public/` or `assets/` (images, fonts, mock data).
- Config: environment and tool configs at repo root (e.g., `.env.example`, `package.json`, `pyproject.toml`, `Makefile`).

## Build, Test, and Development Commands
- Install deps: use the project’s package manager/scripts if present.
  - Node: `npm ci` or `pnpm i`
  - Python: `uv sync` or `poetry install`
  - Rust: `cargo build`
- Run dev: `npm run dev`, `make dev`, or language-specific runner.
- Build: `npm run build`, `make build`, or `cargo build --release`.
- Test: `npm test` or `pnpm test`; Python: `pytest`; Rust: `cargo test`.
- Lint/format: `npm run lint && npm run format`, `ruff check --fix`, or `black .`.

## Coding Style & Naming Conventions
- Indentation: 2 spaces for JS/TS; 4 spaces for Python; rustfmt for Rust.
- Names: camelCase for variables/functions, PascalCase for types/classes, snake_case for Python modules and test files.
- Imports: group std/lib, third-party, then local; keep paths relative to `src/`.
- Tools: prefer ESLint + Prettier (JS/TS), ruff + black (Python), rustfmt + clippy (Rust). Fix warnings before pushing.

## Testing Guidelines
- Frameworks: Jest/Vitest (JS/TS), pytest (Python), built-in test harness (Rust).
- Structure: co-locate or mirror in `tests/`; name tests `*.test.*` or `test_*.py`.
- Coverage: target ≥80% for changed lines; include edge cases and error paths.
- Run: `npm test -- --watch`, `pytest -q`, or `cargo test` for fast feedback.

## Commit & Pull Request Guidelines
- Commits: use imperative mood; prefer Conventional Commits (`feat:`, `fix:`, `docs:`) for clarity and changelogs.
- Scope: small, focused commits; include context in the body when needed.
- PRs: include summary, motivation, linked issues (`Fixes #123`), screenshots for UI, and test notes. Ensure CI is green and lint passes.

## Security & Configuration Tips
- Secrets: never commit `.env` files; copy from `.env.example` to `.env.local`.
- Dependencies: update regularly; avoid unmaintained packages; run `npm audit`, `pip-audit`, or `cargo audit` if configured.
- Reviews: call out risky changes and migration steps in PR description.

