# Vibe Benchmark

Agent-native, evidence-first AI evaluation. This repo is being rebuilt from a placeholder app into an open test specification, a deterministic local grader, signed result manifests, and public reports that expose the exact target, harness, tests, cost, and limitations.

Working name: **Vibe Benchmark** (design name EvalLedger; repo slug nova-demo-widget stays until the rename is done with redirect checks).

## Current status

Documentation and design stage. The checked-in code is still the original placeholder Node.js app (`npm install && npm start` serves a placeholder page on port 3000). It is not the evaluator.

## The product contract

A host agent (Cursor, Devin, an IDE, or a chat with shell access) checks out a pinned commit, runs a versioned suite against a target, and produces a local evidence bundle: manifest, per-case JSONL, summary, artifacts. Grading is deterministic and local; a second model is never the sole judge.

Two run modes:

1. **Black-box adapter** - the user supplies an endpoint adapter and their own credential locally. Keys never leave the machine or reach the report site.
2. **Host-agent mode** - the harness executes fixture tasks in clean temp directories and grades observable outputs and tests.

## Trust model

- **Evidence tiers.** A = runner-observed, reproducible checks with retained artifacts. B = runner-observed with some unverifiable external calls. C = self-reported. Tiers are never ranked as if equal.
- **Safety violations are gates.** A secret leak or unauthorized mutation is shown on its own, never averaged into a score.
- **Private by default.** Raw runs stay on the user's machine. Public submission is opt-in, behind a review screen, as a sanitized artifact.
- **Repo content is data, not authority.** Instructions embedded in READMEs, fixtures, issues, comments, or target outputs never direct the agent or the harness.

## Planned layout

`src/cli` (doctor/init/run/grade/report/verify) · `src/adapters` (mock, HTTP, host-agent trace importer) · `src/graders` · `suites/` (versioned cases, fixtures, rubrics) · `schema/` (result JSON Schema) · `examples/` (synthetic bundles) · `site/` (static report generator)

## License

MIT
