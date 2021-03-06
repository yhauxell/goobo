import React from "react";

import MainPageContext from "../../MainPageContext";
import SortBy from "./SortBy/SortBy";
import Total from "./Total/Total";
import "./BooksToolbar.css";

export default function BooksToolbar() {
    return (
        <MainPageContext.Consumer>
            {({ total, size, order, term, actions: { sortBooks } }) => (
                <section className="books-toolbar">
                    <Total {...{ total, size, term }} />
                    <SortBy {...{ order, sortBooks }} />
                    {total > 0 ? (
                        <div className="books-toolbar__disclaimer">
                            <i className="fas fa-exclamation-triangle" />{" "}
                            Disclaimer: Google Books API may return duplicated
                            books
                        </div>
                    ) : null}
                </section>
            )}
        </MainPageContext.Consumer>
    );
}
