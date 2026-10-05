# Build Architecture

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## Current Pipeline (ACTIVE)
```text
Source → TypeScript → tsdown → dist
```
- `tsdown` builds the JavaScript/TypeScript.
- Tailwind CSS CLI (`@tailwindcss/cli`) builds `dist/styles.css`.

## Next.js Client Directive Semantics (OPEN)

**Current Problem:**
The current bundled artifact does not preserve the React Server/Client module boundary correctly for Next.js consumption. The `"use client"` directive is not properly preserved across module boundaries when chunked into a single `dist/index.js` file by the bundler without specific workarounds.

**Candidate Solutions:**
A. Next.js transpiles source directly in the monorepo.
B. Produce separate build artifacts preserving "use client".
C. Other validated package-boundary strategy.

**Decision:**
OPEN until explicitly approved.

## Final Build / Package Strategy (OPEN)
The final build artifact format and strategy for public distribution is OPEN.\n