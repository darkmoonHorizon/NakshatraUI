# Technical Requirements Document (TRD)

Status: ACTIVE
Last Updated: 2026-10-03
Owner: @ekatra/next-ui Core

## Framework

- Next.js App Router (v15+)
- React (v19+)
- TypeScript

## Rendering

- RSC-first (React Server Components).
- Isolated client islands (minimal `"use client"` usage).

## Styling

- Tailwind CSS v4.
- CSS Modules where section-local styling requires them.

## Animation

- CSS-first.
- No Framer Motion.
- No GSAP unless explicitly approved.

## Data

- Serializable.
- Consumer-owned acquisition (no hidden fetching).

## Package

- `@ekatra/next-ui`

## Build

### CURRENT DEVELOPMENT BUILD (ACTIVE)

- Monorepo utilizing `tsdown` for packaging and `tailwindcss` for CSS generation.
- Consumers (like `consumer-test`) consume the package from the workspace.

### FUTURE DISTRIBUTION BUILD (OPEN)

- The future npm distribution strategy must not be treated as current implementation scope.\n
