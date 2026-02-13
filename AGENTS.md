# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

## Project Type

This is a **vanilla TypeScript web application template** (not a library) built with Vite. It uses direct DOM manipulation without any framework like React or Vue.

## Development Commands

```bash
# Start development server (auto-opens browser to index.html)
pnpm dev

# Build for production (runs TypeScript compilation, then Vite build)
pnpm build

# Preview production build locally
pnpm preview

# Format code with Biome
pnpm format

# Lint code with Biome
pnpm lint

# Run tests (Vitest with Playwright and Node environment)
pnpm test
```

## Architecture

- **Entry point**: `src/main.ts` - Initializes the application and renders to the `#app` div in `index.html`
- **ES modules** throughout (`"type": "module"` in package.json)
- **Direct DOM manipulation** using standard browser APIs
- **Static assets**: Place in `public/` directory

## Code Style

This project uses **Biome** for formatting and linting (configured in `biome.json`):
- 4-space indentation
- 80 character line width
- Double quotes for JavaScript/TypeScript
- Semicolons always
- Trailing commas (ES5 style)
- Arrow parentheses always
- LF line endings
Most of these rule will be applied on format.

## TypeScript Configuration

- **Path alias**: `@/*` maps to `src/*` (configured in `tsconfig.base.json`)
- **Project references**: Uses `tsconfig.json` with `app` and `node` references
- **Strict mode** enabled

## Styling

- **Tailwind CSS v4** with new directive-based syntax: `@import "tailwindcss"`
- Custom styles in `src/style.css` for layout and theming
- PostCSS configured in `postcss.config.mjs`

## Package Manager

This project uses **pnpm**.

## Instructions
### TypeScript

#### Write function's signature short
```ts
// Don't(No JSDoc, long function signature)
export function dont({ id, name }: { id: number; name: string }) {
  console.log(id, name);
}

// Don't(it looks bad on JSDoc, since all parameters are documented on not type itself but function's JSDoc. Also, JSDoc declares types, but TypeScript does same thing with more power.)
/**
 * Performs a bad operation.
 * @param params - The parameters for the operation.
 * @param {number} params.id - The unique identifier.
 * @param {string} params.name - The name of the entity.
 */
export function dont2({ id, name }: { id: number; name: string }) {
  console.log(id, name);
}

// Do(since all parameters are documented and accessible on IDE hover, without opening its declaration)
type Params2 = {
  /**
   * The unique identifier.
   */
  id: number;
  /**
   * The name of the entity.
   */
  name: string;
};
/**
 * Performs a good operation with the given parameters.
 * @param params - The parameters for the operation.
 */
export function doGood({ id, name }: Params2) {
  console.log(id, name);
}
```
#### No `as`
```ts
function doSomething(): OtherType {}
type SomeType = {
  value: string;
};
type OtherType = {
  value: string;
  notExist: number;
};
// Don't(It uses any type.)
const data = doSomething() as any;

// Don't(Declares type, but still uses `as`.)
const data = doSomething() as SomeType;

// Do(Uses `satisfies` to ensure type compatibility without losing type information.)
const data = doSomething() satisfies SomeType; // Will cause compile error if incompatible. Good!
```