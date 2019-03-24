import React, { Component } from "react";
import "./MainPage.css";
import Top from "./Top/Top";
import Content from "./Content/Content";
import GoogleBookService from "../Api/Services/GoogleBookService";
import MainPageContext from "./MainPageContext";
export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ids: [],
      books: {},
      size: 0,
      total: 0,
      order: "asc",
      filters: [],
      filter: null,
      term: "game of thrones",
      current: null,
      actions: {
        getBooks: term => this.getBooks(term),
        changeCurrent: id => this.changeCurrent(id),
        setLoading: () => {},
        filterBooks: year => this.filterBooks(year),
        sortBooks: order => this.sortBooks(order)
      }
    };
    this.service = new GoogleBookService();
  }

  componentDidMount() {
    this.getBooks(this.state.term);
  }
  render() {
    return (
      <div className="mainPage">
        <MainPageContext.Provider value={this.state}>
          <Top />
          <Content />
        </MainPageContext.Provider>
      </div>
    );
  }

  changeCurrent(id) {
    this.setState({ current: this.state.books[id] });
  }

  getBooks(term) {
    if (term === "") {
      term = 'electric vehicle charger';
    }
    this.setState({term});
    this.service.getBooks(term).then(result => {
      this.setState({ ...result });
      this.original = { ids: result.ids };
    });
  }

  filterBooks(value) {
    if (this.state.size > 0) {
      const ids = this.original.ids.filter(id => {
        const book = this.state.books[id];
        return book.year && (book.year === value || value === null);
      });
      this.setState({
        ids,
        size: ids.length,
        current: this.state.books[ids[0]],
        filter: value
      });
    }
  }

  sortBooks(order) {
    this.setState({ order });
    let ids = this.state.ids;
    const books = Object.values(this.state.books).filter(book =>
      ids.includes(book.id)
    );

    books.sort((a, b) => {
      if (order === "asc") {
        return a.year > b.year ? -1 : 1;
      } else {
        return a.year < b.year ? -1 : 1;
      }
    });
    ids = books.map(book => book.id);
    this.setState({ ids });
  }
}
