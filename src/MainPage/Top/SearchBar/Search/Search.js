import React, { Component } from "react";
import "./Search.css";
import { debounce } from "../../../../Api/Utils/DebounceFunction";
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { term: "" };
        this.handleSubmit = debounce(this.handleSubmit.bind(this), 300);
    }
    render() {
        return (
            <div className="search">
                <form role="search" aria-label="Search at Google Books" onSubmit={(e)=> e.preventDefault()}>
                    <span className="search__prepend">
                        <i className="fas fa-search" />
                    </span>
                    <input
                        title="Type your search term"
                        className="search__input"
                        type="text"
                        spellCheck="false"
                        aria-required="false"
                        placeholder="Type your search term.."
                        value={this.state.term}
                        onChange={event => {
                            this.setState({ term: event.target.value });
                            this.handleSubmit(event);
                        }}
                    />
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        this.props.searchBooks(this.state.term);
    }
}
