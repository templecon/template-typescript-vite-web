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

## Code Style

Check out docs/rules directory for more information.