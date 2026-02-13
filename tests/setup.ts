// Keep it light for test setups,
// since all tests will slow down if this file is heavy.

import { beforeEach, vi } from "vitest";

// IIFE not for running actual code, just to show example structure.
// If you want to make something available globally, un-IIFE it.
() => {
    beforeEach(() => {
        const superDuperMockingLibrary = vi.fn(() => {
            throw new Error("Do cool stuff!");
        });
        superDuperMockingLibrary.mockClear();
    });
};
