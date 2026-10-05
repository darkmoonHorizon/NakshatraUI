# Architectural Principles

Status: LOCKED
Last Updated: 2026-10-03
Owner: Nakshatra Core

### RSC First
Server Components are the default. 

### Client Islands Only When Necessary
Client components are pushed down the tree as far as possible.

### Consumer Owns Data
The library does not fetch data. It only receives and renders it.

### Sections Own Section-Specific UI
Components specific to a section live within that section, not in a global UI folder.

### Private By Default
Nothing is exported from a section unless explicitly required.

### Public APIs Are Intentional
Only well-defined contracts are exported from `src/index.ts`.

### Data Is Serializable
Props passed across the network boundary must be serializable.

### CSS-First Motion
Animations rely on CSS transitions/animations, not heavy JS libraries.

### No Premature Abstraction
Wait for the rule of three before extracting shared components.

### No Global Registry
No global state or context registries unless explicitly approved.

### No Hidden Dependencies
Dependencies must be strictly justified.

### Reference Fidelity
Visual implementations must match design references exactly.

### Scope Protection
Do not expand the scope of a task beyond its requirements.\n
