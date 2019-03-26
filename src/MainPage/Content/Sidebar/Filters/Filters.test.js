import React from "react";
import TestRenderer from "react-test-renderer";
import Filters from "./Filters";

it("should render filters container with loader component", () => {
    const testRenderer = TestRenderer.create(<Filters />);
    const container = testRenderer.toJSON();
    expect(container.props.className).toEqual(
        "sidebar__books-filters-container"
    );
    expect(container.children[1].children[0].type).toEqual("span");
});

it("should render filters container with filters", () => {
    const testRenderer = TestRenderer.create(
        <Filters filters={["2010", "2015"]} filterBooks={() => {}} />
    );
    const container = testRenderer.toJSON();
    expect(container.props.className).toEqual(
        "sidebar__books-filters-container"
    );
    expect(container.children[1].children.length).toBe(2);
});

it("should render filters container with filters and one active filter", () => {
    const testRenderer = TestRenderer.create(
        <Filters
            filter={"2010"}
            filters={["2010", "2015"]}
            filterBooks={() => {}}
        />
    );
    const container = testRenderer.toJSON();
    expect(container.props.className).toEqual(
        "sidebar__books-filters-container"
    );
    expect(container.children[1].children.length).toBe(2);
    expect(container.children[1].children[0].props.className).toEqual(
        "sidebar__books-filters__filter sidebar__books-filters__filter--active"
    );
});
