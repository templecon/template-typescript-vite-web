import { describe, expect, it } from "vitest";

describe("example browser test", () => {
    it.concurrent("should run in browser environment", async () => {
        // localstorage is only available in browser environment,
        // not in node.
        // If this test runs successfully, it means the browser environment is set up correctly.
        expect(localStorage).not.toBeNull();
    });
});
