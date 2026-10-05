# Component Ownership

Status: ACTIVE
Last Updated: 2026-10-03
Owner: Nakshatra Core

## Section Ownership
A section (e.g., Navbar) owns:
- composition
- data contract (Types/Interfaces)
- visual structure
- animation
- interaction
- private internals (components specific to the section)

## Extraction Rule
A component should not be moved to global UI merely because it could technically be reused. Extraction requires demonstrated reuse (Rule of Three) or a clearly established cross-section requirement.\n
