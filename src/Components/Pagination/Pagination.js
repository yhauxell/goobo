import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
    const { currentPage, pageSize, total, paging, changePage } = props;

    const pagesCount = total > pageSize ? Math.ceil(total / pageSize) : 1;

    let pages = [];
    for (let index = 0; index < pagesCount; index++) {
        const curr = index + 1;
        const ami = parseInt(currentPage) === curr;
        pages.push(
            <li
                onClick={() => {
                    changePage(curr);
                }}
                key={curr}
                className={
                    "pagination__page" +
                    (ami
                        ? " pagination__page--active"
                        : "")
                }
            >
                {paging && ami ? <i className="fas fa-circle-notch fa-spin" /> : curr}
            </li>
        );
    }
    return <ul className="pagination">{pages}</ul>;
}
