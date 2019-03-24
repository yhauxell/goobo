import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import App from "./App";
import MainPage from "./MainPage/MainPage";

it("renders without crashing", () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();

    expect(result.type).toBe("div");
    expect(result.props.children).toEqual(<MainPage />);
});
