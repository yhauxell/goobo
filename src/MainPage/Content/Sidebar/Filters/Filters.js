import React from "react";
import "./Filters.css";
import Filter from "./Filter/Filter";
export default function Filters(props) {
  const { filter, filters, filterBooks } = props;
  console.log('filter', filter);
  return (
    <div className="sidebar__books-filters-container">
      <h4>Filter by</h4>
      <ul className="sidebar__books-filters">
        {filters.map(f => {
          return <Filter key={f} {...{ f, ami: filter === f, filterBooks }} />;
        })}
      </ul>
    </div>
  );
}
