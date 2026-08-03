# Project Context

- This repository is a vanilla TypeScript website template built with Vite, not a library or framework application. `src/main.ts` renders directly into `#app` with browser DOM APIs.
- The production build uses Vite `base: "./"`. Generated assets must stay relative so `.github/workflows/deploy.yml` can deploy `dist/` under any GitHub Pages repository path.
- The supported runtime is Node.js 26 or higher; package management uses pnpm and `pnpm-lock.yaml` is committed.
- `@/*` resolves to `src/*`; TypeScript uses strict project references for application and Node configuration.
- Tests are intentionally split: `tests/unit/` runs in Node and `tests/browser/` runs in jsdom. Vitest sets `import.meta.env.VITEST_MODE` to `"node"` or `"browser"` for the respective project; browser setup lives in `tests/setup.ts`.
- Tailwind CSS v4 is imported from `src/style.css`; Vite processes PostCSS configuration.

## Project Conventions MCP Server

Project conventions are available from the conventions MCP server:

- `https://conventions.aieuroka.workers.dev/mcp` for most clients
- `https://conventions.aieuroka.workers.dev/with-tool/mcp` for GitHub Copilot clients without resource retrieval
