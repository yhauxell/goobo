import React from "react";
import TestRenderer from "react-test-renderer";
import Book from "./Book";

it("should render the full Book empty", () => {
    const testRenderer = TestRenderer.create(<Book />);
    const container = testRenderer.toJSON();
    expect(container.props.className).toEqual("book");
    const [year, preview, title, authors, rating] = container.children;
    expect(year.type).toBe("span");
    expect(year.children.length).toBe(1);
    expect(preview.type).toBe("img");
    expect(title.type).toBe("h2");
    expect(authors.type).toBe("div");
    expect(rating.type).toBe("div");
});
it("should render the full Book", () => {
    let onSelect = jest.fn();
    const testRenderer = TestRenderer.create(
        <Book
            id=""
            year="2019"
            title="Good Parts"
            authors={["John Resig"]}
            onSelect={onSelect}
            rating="4"
            thumbnail="preview.png"
        />
    );
    const container = testRenderer.toJSON();
    expect(container.props.className).toEqual("book");
    const [year, preview, title, authors, rating] = container.children;
    expect(year.children).toEqual(["2019"]);
    expect(preview.props.src).toEqual('preview.png');
    expect(preview.props.alt).toEqual('Good Parts');
    expect(title.children).toEqual(["Good Parts"]);
    expect(authors.children).toEqual(["John Resig"]);
    expect(rating.children[0].props.title).toEqual('Book rating: 4 stars');
});
