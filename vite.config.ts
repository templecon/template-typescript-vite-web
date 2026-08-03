/// <reference types="vitest/config" />

import { type UserConfig, defineConfig } from "vite";
import { fileURLToPath } from "node:url";

type Config = Required<UserConfig>;
const resolve: Config["resolve"] = {
    alias: {
        "@": fileURLToPath(new URL("src", import.meta.url)),
    },
};

const testConfig: Config["test"] = {
    coverage: {
        enabled: true,
        include: ["src/**/*.ts"],
        provider: "v8",
        reportOnFailure: true,
        reporter: ["text", "json-summary", "html"],
    },
    globals: true,
    projects: [
        {
            extends: true,
            test: {
                environment: "node",
                include: ["tests/unit/**/*.test.ts"],
                name: "node",
                env: {
                    VITEST_MODE: "node",
                },
            },
        },
        {
            extends: true,
            test: {
                environment: "jsdom",
                environmentOptions: {
                    jsdom: {
                        url: "http://localhost/",
                    },
                },
                include: ["tests/browser/**/*.test.ts"],
                setupFiles: ["tests/setup.ts"],
                name: "browser",
                env: {
                    VITEST_MODE: "browser",
                },
            },
        },
    ],
};

export default defineConfig({
    base: "./",
    build: {
        outDir: "dist",
        sourcemap: true,
    },
    clearScreen: false,
    plugins: [],
    resolve,
    server: {
        open: "index.html",
    },
    test: testConfig,
});
