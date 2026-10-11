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
    options: {
        denyWarnings: true,
        typeAware: true,
        typeCheck: true,
        reportUnusedDisableDirectives: "error",
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
