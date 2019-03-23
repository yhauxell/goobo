import React, { Component } from "react";
import "./Search.css";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    const { getBooks } = this.props;
    return (
      <div className="search">
        <input
          className="search__input"
          type="text"
          placeholder="Type anything to search for..."
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
          onKeyUp={event => {
            if (event.key === "Enter") {
              getBooks(this.state.term);
            }
          }}
        />
        <button
          className="search__btn"
          onClick={() => getBooks(this.state.term)}
        >
          Search
        </button>
      </div>
    );
  }
}
