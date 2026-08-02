Structure:

tests/

- tests/browser/ : Contains integration tests that run in a browser-like environment using Vitest with jsdom and `@testing-library/dom`. Test observable browser-facing behavior through accessible queries and user-like events; reset shared DOM or storage state between tests.
- tests/unit/ : Contains unit tests that run in a Node.js environment using Vitest. These tests focus on individual functions and modules without DOM dependencies. Should be fast and isolated.

Each subdirectory should follow same structure as src/ for easy mapping between source files and tests.
