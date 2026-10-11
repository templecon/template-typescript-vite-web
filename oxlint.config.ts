import createBase from "@concertypin/config/oxlint";
import createFrontendOxlintConfig from "@concertypin/config/oxlint/frontend";
import { defineConfig } from "oxlint";

const frontend = createFrontendOxlintConfig({
    tailwind: { entryPoint: "src/style.css" },
});

export default defineConfig({
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
    settings: frontend.settings,
    extends: [createBase(), frontend],
});
