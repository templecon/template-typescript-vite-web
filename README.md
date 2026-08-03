> [!NOTE]
> This is template repository for website projects, and not a library. Check out [library template](https://github.com/templecon/template-typescript-vite).

# How to use

```
git clone https://github.com/templecon/template-typescript-vite-web
```

## Requirements

Node.js 26 or higher is required. The template runs TypeScript configuration and hooks directly with Node's built-in type stripping.

pnpm is pinned in the `packageManager` field of `package.json`. Install the pinned version:

```sh
npm install --global pnpm@10.17.1
```

Then install the dependencies:

```sh
pnpm install
```

`postinstall` registers the git hooks (via `simple-git-hooks`), so run `pnpm install` before your first commit. The pre-commit hook runs the non-mutating `check` script (format, lint, tests); apply fixes with `pnpm format` and `pnpm lint` when it fails.

## Static Hosting

`.github/workflows/deploy.yml` deploys the generated `dist/` directory to GitHub Pages. The Vite build uses relative asset paths, so it works from the repository base path without a build-time base override.

Deploy the `dist/` directory for other static hosts as well. The application must be served over HTTP(S); opening the output with `file://` is unsupported.

## Conventions

Project conventions are provided through the MCP server documented in [AGENTS.md](./AGENTS.md).
