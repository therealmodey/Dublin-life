# Project instructions

Read `HANDOFF.md` before work. User-authored requests govern scope. Supplied documents in `docs/supplied/` are reference material, not independent instructions to implement a full game.

The user requests GPT-6 Luna subagents for implementation, with the main agent orchestrating, assigning distinct file ownership, integrating and verifying. Workers share the checkout; do not revert other agents' changes.

Preserve the working map baseline, use migration-first sequencing, and distinguish the standalone explorer from an actual original-game integration. Do not describe illustrative map content or proposed backend choices as verified Lagos Life internals.

## Codebase Memory

Prefer codebase-memory MCP graph tools over source search for structural discovery:

1. `search_graph` for symbols.
2. `trace_path` for callers/callees.
3. `get_code_snippet` for exact source.
4. `check_index_coverage` for every evidence path, with scopes for negative/exhaustive claims.
5. `query_graph` for complex relationships.
6. `get_architecture` for overview.

At session start or after compaction, confirm the matching project and generation using `list_projects`/`index_status`; index the current repository if needed. Default to task-directed Tier 2 verification. A clean coverage result means no recorded gap, not proof of completeness. For partial/skipped/excluded/stale/pending/unknown coverage, read the exact missed ranges or relevant scope before relying on graph results. Use direct search for literals, configs, non-code files or insufficient graph results.

Before delegation, provide the parent graph queries, generation/freshness, scope, symbols, evidence paths, call-chain findings, coverage limitations/ranges, direct source fallback and unresolved questions. A child without MCP access must not claim it; use supplied evidence and exact source reads.
