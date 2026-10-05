# Navbar Section

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## Status
Current implementation is active.

## Scope
Navbar only.

## Ownership
**Navbar owns:**
- visual structure
- navigation presentation
- responsive behavior
- animation
- interaction

**Consumer owns:**
- data acquisition
- CMS
- authentication
- application routing/data resolution

## Public API
Exported via `src/index.ts`:
- `Navbar`
- `NavbarProps`
- `NavbarLink`
- `NavbarColumn`
- `NavbarFeaturedProject`

## Data Contract
- `NavbarProps`
- `NavbarLink`
- `NavbarColumn`
- `NavbarFeaturedProject`

## RSC Boundary
```text
Navbar (Server Component)
 ↓
NavbarClient (Client Component)
```

## Client Responsibilities
Only:
- menu state
- Escape key handling
- focus trap
- focus restoration
- scroll lock

CSS handles hover reveals.

## Styling
CSS Modules (`navbar.css`, `navbar-header.css`, etc.).

## Animation
CSS-first.

## Accessibility
Complete keyboard behavior required.\n
