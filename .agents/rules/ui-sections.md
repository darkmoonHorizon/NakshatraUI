# UI Section Architecture Rules

When creating new complex UI sections (like navbar, footer, hero, etc.) in the `ui` package (`packages/ui/src/sections/`), you MUST strictly follow this decoupled, scalable folder structure and code style:

## 1. Folder Structure
Every section must have a dedicated folder containing its index, types, client orchestration, and modular CSS. Granular components belong in a nested `components/` directory.

Example structure:
```
sections/[section-name]/
├── index.tsx                  # Server Component entry point (data fetching/passing)
├── [section-name]-client.tsx  # Client Component ('use client') orchestrating UI state
├── types.ts                   # Strict interfaces and Runtime Type Guards
├── [section-name].css         # Main stylesheet importing component styles
└── components/                # Highly decoupled atomic pieces
    ├── [component-a]/
    │   ├── [component-a].tsx
    │   └── [component-a].css
    └── [component-b]/
        ├── [component-b].tsx
        └── [component-b].css
```

## 2. Server/Client Separation
- `index.tsx` MUST be a React Server Component. It acts as the entry point and passes serialized data/props.
- `[section-name]-client.tsx` MUST be a Client Component (start with `'use client';`). It manages React state (`useState`, `useRef`, etc.) and handles interactive orchestration of sub-components.

## 3. Type Safety
- **Strict Interfaces**: Use `readonly` properties in `types.ts` to prevent data mutation.
- **Runtime Type Guards**: Always implement runtime type guards (e.g., `isSectionProps(obj: any): obj is SectionProps`) to validate external data before rendering.

## 4. Modular CSS
- Avoid monolithic CSS files.
- The root `[section-name].css` should primarily use `@import` to pull in styles from the `components/` directory, and define high-level grid/layout rules.
- Sub-components must maintain their own namespaced CSS files alongside their `.tsx` files.

## 5. Scalability & Variant Support
- Make the section data-driven via props.
- Architecture must support visual variants easily. Define `variant` or `theme` props in `types.ts` as needed.
- Pass variant props to the root HTML elements as `data-*` attributes (e.g., `data-theme={theme}`) to allow for clean CSS targeting without massive conditional class strings.
