import baseConfig from "@concertypin/config/oxlint";
import { defineConfig } from "oxlint";

export default defineConfig({
    plugins: ["typescript", "unicorn", "import", "vitest", "promise"],
    env: {
        builtin: true,
    },
    ignorePatterns: [
        "**/node_modules/**",
        "**/dist/**",
        "**/dist-ts/**",
        "**/coverage/**",
        "**/.cache/**",
        "**/.vscode/**",
        "**/.git/**",
    ],
    rules: {
        "no-console": "warn",
    },
    extends: [baseConfig],
});
