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
        Year {order}
      </button>
    </div>
  );
}
