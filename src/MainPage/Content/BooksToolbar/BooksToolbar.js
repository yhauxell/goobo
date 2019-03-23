import React from "react";

import MainPageContext from "../../MainPageContext";
import SortBy from "./SortBy/SortBy";
import Total from "./Total/Total";
import './BooksToolbar.css';

export default function BooksToolbar() {
  return (
    <MainPageContext.Consumer>
      {({ total }) => (
        <div className="books-toolbar">
          <Total total={total} />
          <SortBy />
        </div>
      )}
    </MainPageContext.Consumer>
  );
}