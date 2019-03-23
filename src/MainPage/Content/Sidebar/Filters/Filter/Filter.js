import React, { Component } from "react";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
  }
  render() {
    const { f, ami, filterBooks } = this.props;
    return (
      <React.Fragment>
        <li
          className={
            "sidebar__books-filters__filter" +
            (ami ? " sidebar__books-filters__filter--active" : "")
          }
        >
          <a
            title={ami ? "Click again to unselect me" : "Click to select me"}
            href="#click"
            onClick={e => {
              const active = !(this.state.active && ami);
              this.setState({ active });
              e.preventDefault();
              filterBooks(active ? f : null);
            }}
          >
            {f}
          </a>
        </li>
      </React.Fragment>
    );
  }
}
