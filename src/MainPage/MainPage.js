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
      total: 0,
      filters: [],
      term: "",
      current: null,
      actions: {
        getBooks: term => this.getBooks(term),
        changeCurrent: id => this.changeCurrent(id),
        setLoading: () => {}
      }
    };
    this.service = new GoogleBookService();
  }

  componentDidMount() {
    this.getBooks("javascript");
  }
  render() {
    console.log(this.state);
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
    this.service.getBooks(term).then(result => {
      this.setState({ ...this.buildBooksState(result) });
    });
  }

  buildBooksState(result) {
    let books = {};
    let ids = [];
    for (let index = 0; index < result.books.length; index++) {
      const book = result.books[index];
      const id = book.id;
      ids.push(id);
      books[id] = book;
    }
    console.log(ids);
    return {
      ids,
      books,
      total: ids.length
    };
  }
}
