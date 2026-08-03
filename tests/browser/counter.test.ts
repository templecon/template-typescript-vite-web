import { fireEvent, getByRole } from "@testing-library/dom";
import { setupCounter } from "@/counter";
import { beforeEach, describe, expect, it } from "vitest";

describe("setupCounter", () => {
    let button: HTMLButtonElement;
    beforeEach(() => {
        button = document.createElement("button");
        document.body.replaceChildren(button);
    });

    it("shows the initial count", () => {
        expect(getByRole(document.body, "button")).toBe(button);

        setupCounter(button);

        expect(button.textContent).toBe("count is 0");
    });

    it("increments the count when a user clicks the button", () => {
        expect(getByRole(document.body, "button")).toBe(button);
        setupCounter(button);

        fireEvent.click(button);

        expect(button.textContent).toBe("count is 1");
    });

    it("keeps counters isolated between buttons", () => {
        const firstButton = document.createElement("button");
        firstButton.textContent = "First";
        const secondButton = document.createElement("button");
        secondButton.textContent = "Second";
        document.body.replaceChildren(firstButton, secondButton);

        expect(getByRole(document.body, "button", { name: "First" })).toBe(
            firstButton
        );
        expect(getByRole(document.body, "button", { name: "Second" })).toBe(
            secondButton
        );

        setupCounter(firstButton);
        setupCounter(secondButton);
        fireEvent.click(firstButton);
        fireEvent.click(firstButton);
        fireEvent.click(secondButton);

        expect(firstButton.textContent).toBe("count is 2");
        expect(secondButton.textContent).toBe("count is 1");
    });
});
