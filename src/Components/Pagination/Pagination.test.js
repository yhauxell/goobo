import React from "react";
import TestRenderer from "react-test-renderer";
import Pagination from "./Pagination";

it("should render one page pagination by default", () => {
    const testRenderer = TestRenderer.create(<Pagination />);
    const container = testRenderer.toJSON();
    expect( container.children.length).toBe(1);
});

it("should render 4 pages pagination when total is 20 and size 5", () => {
    const testRenderer = TestRenderer.create(<Pagination currentPage={1} pageSize={5} total={20} paging={false} changePage={()=>{}}/>);
    const container = testRenderer.toJSON();
    expect( container.children.length).toBe(4);
});
