import React from "react";
import TestRenderer from "react-test-renderer";
import Sidebar from "./Sidebar";

const mockContext = jest.fn();
jest.mock("./../../MainPageContext.js", () => ({
    Consumer: ({ children }) => children(mockContext())
}));

describe("Sidebar component", () => {
    beforeEach(() => {
        mockContext.mockReset();
    });

    it("should return filters and preview", () => {
        mockContext.mockReturnValue({
            filter: 2019,
            filters: [2010, 2019],
            actions: { filterBooks: () => {} },
            current: null
        });
        const testRenderer = TestRenderer.create(<Sidebar />);
        const container = testRenderer.toJSON();
        expect(container.type).toEqual("aside");
        expect(container.children.length).toBe(2);
        expect(container.children[0].props.className).toEqual(
            "sidebar__books-filters-list"
        );
        expect(container.children[1].props.className).toEqual(
            "sidebar__book-preview"
        );
    });

    it("should build filters but no preview", () => {
        mockContext.mockReturnValue({
            filter: 2019,
            filters: [2010, 2019],
            actions: { filterBooks: () => {} },
            current: null
        });

        window.matchMedia = query => {
            return {matches: true};
        };

        const testRenderer = TestRenderer.create(<Sidebar />);
        const container = testRenderer.toJSON();
        expect(container.type).toEqual("aside");
        expect(container.children.length).toBe(1);
        expect(container.children[0].props.className).toEqual(
            "sidebar__books-filters-list"
        );
        
    });
});
