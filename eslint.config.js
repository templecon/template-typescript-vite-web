// @ts-check
import { defineConfig } from "eslint/config";

// If the project needs ESLint, set this to true.
// If the project never uses ESLint,
// it's better to remove ESLint from scripts from package.json,
// since eslint is slow even if there's no rules (about 1 second).
const useEslint = false;

/**
 * @type {ReturnType<typeof defineConfig>|undefined}
 */
let config;
if (useEslint) {
    const js = await import("@eslint/js");
    const eslintConfigPrettier = await import("eslint-config-prettier");
    const { default: oxlint } = await import("eslint-plugin-oxlint");
    const tseslint = await import("typescript-eslint");
    config = defineConfig(
        // Global ignores
        {
            ignores: [
                "**/node_modules/**",
                "**/dist/**",
                "**/dist-ts/**",
                "**/coverage/**",
                "**/.cache/**",
                "**/.vscode/**",
                "**/.git/**",
            ],
        },
        // Base JavaScript config
        js.configs.recommended,
        // TypeScript config with type checking
        tseslint.configs.recommendedTypeChecked,
        {
            languageOptions: {
                parserOptions: {
                    projectService: true,
                },
            },
        },
        // Override for .d.ts files
        {
            files: ["**/*.d.ts"],
            rules: {
                "@typescript-eslint/no-unused-vars": "off",
            },
        },

        eslintConfigPrettier,
        ...oxlint.buildFromOxlintConfigFile(".oxlintrc.json")
    );
} else {
    config = defineConfig(
        // Base config to disable all rules
        {
            ignores: [
                "**/node_modules/**",
                "**/dist/**",
                "**/dist-ts/**",
                "**/coverage/**",
                "**/.cache/**",
                "**/.vscode/**",
                "**/.git/**",
            ],
        },
        {
            rules: {},
        }
    );
}
/**
 * @satisfies {ReturnType<typeof defineConfig>}
 */
// oxlint-disable-next-line no-unused-expressions: It is type guard that ensures all branches assign to config
config;

export default config;
