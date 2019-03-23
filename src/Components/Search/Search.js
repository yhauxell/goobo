import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="search">
      <input className="search__input" type="text" placeholder="Type anything to search for..."/>
      <button className="search__btn">Search</button>
    </div>
  );
}
