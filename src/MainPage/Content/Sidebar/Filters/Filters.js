import React from "react";
import "./Filters.css";
import Filter from "./Filter/Filter";
export default function Filters(props) {
  const { filter, filters, filterBooks } = props;
  return (
    <div className="sidebar__books-filters-container">
      <h4><i className="fas fa-filter"></i> Show only</h4>
      <ul className="sidebar__books-filters">
        {filters.map(f => {
          return <Filter key={f} {...{ f, ami: filter === f, filterBooks }} />;
        })}
      </ul>
    </div>
  );
}
