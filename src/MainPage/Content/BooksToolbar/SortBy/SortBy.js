import React from "react";
import "./SortBy.css";
export default function SortBy(props) {
  const { order, sortBooks } = props;
  return (
    <div className="sort-by">
      <button
        className={"sort-by__btn sort-by__btn--" + order}
        onClick={() => sortBooks(order === "asc" ? "desc" : "asc")}
      >
        <i className="fas fa-calendar-alt"></i> {order === 'asc' ? <i className="fas fa-sort-amount-down"></i> : <i className="fas fa-sort-amount-up"></i>}
      </button>
    </div>
  );
}
