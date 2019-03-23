import React from "react";
import "./Filters.css";
export default function Filters(props) {
  return (
    <ul className="sidebar__books-filters">
      {props.filters.map(filter => {
        return (
          <li key={filter} className="sidebar__books-filters__filter">
            {filter}
          </li>
        );
      })}
    </ul>
  );
}
