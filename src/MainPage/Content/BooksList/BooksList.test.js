import React from "react";
import TestRenderer from "react-test-renderer";
import BooksList from "./BooksList";

const mockContext = jest.fn();
jest.mock("./../../MainPageContext.js", () => ({
    Consumer: ({ children }) => children(mockContext())
}));

describe("BooksList component", () => {
    beforeEach(() => {
        mockContext.mockReset();
    });

    it("should not render books list but loader", () => {
        mockContext.mockReturnValue({
            ids: [],
            books: {},
            total: 0,
            actions: { changeCurrent: () => {} }
        });
        const testRenderer = TestRenderer.create(<BooksList />);
        const container = testRenderer.toJSON();
        expect(container.type).toEqual("section");
        expect(container.children[0].type).toEqual("span");
    });

    it("should render 2 books", () => {
        mockContext.mockReturnValue({
            ids: [1, 2],
            books: {},
            total: 2,
            actions: { changeCurrent: () => {} }
        });
        const testRenderer = TestRenderer.create(<BooksList />);
        const container = testRenderer.toJSON();
        expect(container.children.length).toEqual(2);
    });
});
