import React, { Component } from "react";
import "./Search.css";
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
    }
    render() {
        return (
            <div className="search">
                <form
                    role="search"
                    aria-label="Search at Google Books"
                    onSubmit={(event) => this.handleSubmit(event)}
                >
                    <input
                        title="Type your search term"
                        className="search__input"
                        type="text"
                        spellCheck="false"
                        aria-required="false"
                        placeholder="Type your search term.."
                        value={this.state.term}
                        onChange={event =>
                            this.setState({ term: event.target.value })
                        }
                        onKeyUp={event => {
                            if (event.key === "Enter") {
                                this.handleSubmit(event);
                            }
                        }}
                    />
                    <button
                        type="submit"
                        title="Press to search for books"
                        className="search__btn"
                    >
                        <i className="fas fa-search" />
                    </button>
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        this.props.searchBooks(this.state.term);
        event.preventDefault();
    }
}
