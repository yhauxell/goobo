import React, { Component } from "react";
import Search from "../../../Components/Search/Search";
import './SearchBar.css';
export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <Search />
      </div>
    );
  }
}
