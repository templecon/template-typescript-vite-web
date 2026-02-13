import { describe, expect, expectTypeOf, it } from "vitest";

describe("example test", () => {
    it.concurrent("should pass", () => {
        // Example test
        expect(1 + 1).toBe(2);
        // Type check example
        expectTypeOf<"asdf">().toBeString();
    });
    it.concurrent("should run in node environment", () => {
        // process is only available in node environment,
        // not in browser.
        // If this test runs successfully, it means the node environment is set up correctly.
        expect(globalThis.localStorage).not.toBeDefined();
    });
});
