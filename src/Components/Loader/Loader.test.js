import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Loader from "./Loader";

it('should show default message', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Loader />);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('span');
    expect(result.props.children).toEqual([<i className="fas fa-circle-notch fa-spin" />, " ", "Loading..."]);
});

it('should show "Searching..." message', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Loader message="Searching..."/>);
    const result = renderer.getRenderOutput();
    expect(result.type).toBe('span');
    expect(result.props.children).toEqual([<i className="fas fa-circle-notch fa-spin" />, " ", "Searching..."]);
});