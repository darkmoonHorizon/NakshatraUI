# Package Architecture

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## Current Monorepo Development (ACTIVE)
- **Package Identity:** `@nakshatra/ui`
- **Workspace:** pnpm workspace linking `packages/ui` to `apps/*`.
- **Source Structure:** `packages/ui/src`
- **Public Entry Point:** `packages/ui/src/index.ts`
- **Internal Modules:** Handled inside `src/`, not exposed.
- **Peer Dependencies:** `next`, `react`, `react-dom`.

## NPM Publishing Strategy (OPEN)
The project is currently being developed as a monorepo/internal UI library. No final public NPM distribution architecture is locked.
Do not introduce NPM-specific build constraints unless explicitly requested.\n