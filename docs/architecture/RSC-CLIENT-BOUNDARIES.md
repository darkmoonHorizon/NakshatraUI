# RSC / Client Boundaries

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## Boundary Definition
```text
RSC
 ↓
serializable props
 ↓
Client Island
 ↓
interaction
```

## Rules
- Server by default.
- Client only when necessary (event listeners, browser APIs, state).
- No client component merely for convenience.
- No client data fetching unless explicitly required.
- No global client state unless justified.
- Minimize client props.
- Client props must be serializable.

## Concrete Example: Navbar
The `Navbar` entry point is a Server Component. It processes the data and passes only the necessary, serializable props to a nested `NavbarClient` component which handles the mobile menu toggle state and focus traps.\n