import React from "react";

import MainPageContext from "../../MainPageContext";
import SortBy from "./SortBy/SortBy";
import Total from "./Total/Total";
import "./BooksToolbar.css";

export default function BooksToolbar() {
  return (
    <MainPageContext.Consumer>
      {({ total, size }) => (
        <div className="books-toolbar">
          <Total {...{ total, size }} />
          <SortBy />
        </div>
      )}
    </MainPageContext.Consumer>
  );
}
