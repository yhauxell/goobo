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
        <form role="search" aria-label="Search at Google Books">
          <input
            className="search__input"
            type="search"
            spellCheck="false"
            aria-required="false"
            placeholder="Type your search term.."
            value={this.state.term}
            onChange={event => this.setState({ term: event.target.value })}
            onKeyUp={event => {
              if (event.key === "Enter") {
                getBooks(this.state.term);
              }
            }}
          />
          <button
            title="Press to search for books"
            className="search__btn"
            onClick={() => getBooks(this.state.term)}
          >
            <i className="fas fa-search" />
          </button>
        </form>
      </div>
    );
  }
}
