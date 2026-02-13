/// <reference types="vitest/config" />

import { fileURLToPath } from "node:url";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig, type UserConfig } from "vite";

type Config = Required<UserConfig>;
const resolve: Config["resolve"] = {
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
};

const browserInclude = ["**/tests/browser/**/*.test.ts"];
const browserTestConfig = {
    enabled: true,
    provider: playwright(),
    headless: true,
    instances: [
        {
            browser: "chromium",
            include: browserInclude,
            expect: {
                poll: {
                    timeout: 5000,
                },
            },
        },
    ],
} satisfies Config["test"]["browser"];
const testConfig: Config["test"] = {
    globals: true,
    typecheck: {
        enabled: true,
    },
    environment: "node",
    setupFiles: "./tests/setup.ts",
    include: ["tests/**/*.test.ts"],
    exclude: ["**/node_modules/**", "**/dist/**"],
    coverage: {
        provider: "v8",
        reporter: ["text", "json", "html"],
        include: ["src/**/*.ts"],
        enabled: true,
        reportOnFailure: true,
    },
    projects: [
        {
            extends: true,
            test: {
                name: "browser",
                browser: browserTestConfig,
            },
        },
        {
            extends: true,
            test: {
                name: "node",
                browser: {
                    enabled: false,
                },
                exclude: browserInclude,
            },
        },
    ],
};
export default defineConfig({
    plugins: [],
    server: {
        open: "index.html",
    },
    test: testConfig,
    build: {
        outDir: "dist",
        sourcemap: true,
    },
    clearScreen: false,
    resolve,
});
