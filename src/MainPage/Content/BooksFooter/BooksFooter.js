import React from "react";
import "./BooksFooter.css";
import Pagination from "../../../Components/Pagination/Pagination";
import MainPageContext from "../../MainPageContext";

export default function BooksFooter() {
    return (
        <section className="books-footer">
            <div className="books-footer__pagination">
                <MainPageContext.Consumer>
                    {({
                        pageSize,
                        currentPage,
                        total,
                        paging,
                        actions: { changePage }
                    }) => {
                        return (
                            <Pagination
                                {...{
                                    pageSize,
                                    currentPage,
                                    total,
                                    paging,
                                    changePage
                                }}
                            />
                        );
                    }}
                </MainPageContext.Consumer>
            </div>
        </section>
    );
}
