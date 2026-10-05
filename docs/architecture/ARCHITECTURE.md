# Architecture

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## System Overview

```text
Consumer Application
        ↓
@nakshatra/ui
        ↓
Sections
        ↓
Section-owned internals
        ↓
Shared primitives only where proven
```

## Boundaries

- **Package Boundary:** Everything within `packages/ui`. Only specific files/components are exported publicly via `src/index.ts`.
- **Section Boundary:** Each section (e.g., Navbar, Hero) is self-contained in `src/sections/<name>`.
- **Component Boundary:** Components are isolated. State does not leak.
- **Public API Boundary:** Strict, explicit exports. No deep importing by consumers.
- **Consumer Boundary:** The consumer application is strictly responsible for routing, auth, and data fetching.
- **Server/Client Boundary:** Components are Server Components by default. Client Components are used exclusively for interactivity at the leaves of the tree (Client Islands).
- **Styling Boundary:** Tailwind for utility, CSS Modules for complex/scoped section-specific animations and styles.
- **Data Boundary:** Data is passed as serializable props. No internal data fetching.\n