import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Authors from "./Authors";

it("should render nothing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Authors />);
    const result = renderer.getRenderOutput();
    expect(result).toEqual(null);
});

it("should render one author", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Authors authors={['John Resig']}/>);
    const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual('John Resig');
});

it("should render one author +1", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Authors authors={['John Resig', 'Lorem Ipsum']}/>);
    const result = renderer.getRenderOutput();
    expect(result.props.children).toEqual('John Resig +1');
});