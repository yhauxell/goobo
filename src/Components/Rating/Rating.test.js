import React from "react";
import TestRenderer from "react-test-renderer";

import Rating from "./Rating";

it("should render default state", () => {
    const testRenderer = TestRenderer.create(<Rating />);
    const container = testRenderer.toJSON().children[0];
    expect(container.props.className).toBe('rating-wrap');
    expect(container.children.length).toBe(2);
    const startsActive = container.children[0];
    expect(startsActive.props.className).toEqual('stars-active');
    expect(startsActive.props.style.width).toEqual('0%');
    expect(startsActive.children.length).toBe(5);
});

it("should render 60% width for active stars when rating is 3", () => {
    const testRenderer = TestRenderer.create(<Rating rating="3"/>);
    const container = testRenderer.toJSON().children[0];
    const startsActive = container.children[0];
    expect(startsActive.props.style.width).toEqual('60%');
});
