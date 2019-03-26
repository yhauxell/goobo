import React from "react";
import TestRenderer from "react-test-renderer";
import BooksToolbar from "./BooksToolbar";

const mockContext = jest.fn();
jest.mock("./../../MainPageContext.js", () => ({
    Consumer: ({ children }) => children(mockContext())
}));

describe("BooBooksToolbar component", () => {
    beforeEach(() => {
        mockContext.mockReset();
    });

    it("should not render books list but loader", () => {
        mockContext.mockReturnValue({
            total: 0,
            size: 0,
            order: "asc",
            term: "js",
            actions: { sortBooks: () => {} }
        });
        const testRenderer = TestRenderer.create(<BooksToolbar />);
        const container = testRenderer.toJSON();
        expect(container.type).toEqual("section");
        expect(container.children[0].type).toEqual("span");
        expect(container.children[0].children.includes("0")).toBe(true);
        expect(container.children[1].type).toEqual("div");
    });

    it("should display totals", () => {
        mockContext.mockReturnValue({
            total: 20,
            size: 10,
            order: "asc",
            term: "js",
            actions: { sortBooks: () => {} }
        });
        const testRenderer = TestRenderer.create(<BooksToolbar />);
        const container = testRenderer.toJSON();
        expect(container.children.length).toEqual(3);
        const [
            displayText,
            size,
            ofText,
            total,
            booksForText,
            termContainer
        ] = container.children[0].children;

        expect(displayText.trim()).toBe("Displaying");
        expect(size).toBe("10");
        expect(ofText.trim()).toBe("of");
        expect(total).toBe("20");
        expect(booksForText.trim()).toBe("books for");
        expect(termContainer.type).toBe("strong");
        expect(termContainer.children).toEqual(['"', "js", '"']);
    });
});
