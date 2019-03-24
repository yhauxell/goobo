import React, { Component } from "react";
import Book from "./Book/Book";
import "./BooksList.css";
import Loader from "../../../Components/Loader/Loader";
import MainPageContext from "../../MainPageContext";

export default class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  render() {
    return (
      <MainPageContext.Consumer>
        {({ ids, books, total, actions: { changeCurrent } }) => (
          <section className="books-list" >
            {total > 0 ? (
              ids.map(id => {
                return (
                  <Book
                    key={id}
                    {...books[id]}
                    onSelect={id => changeCurrent(id)}
                  />
                );
              })
            ) : (
              <Loader message="Searching books..."/>
            )}
          </section>
        )}
      </MainPageContext.Consumer>
    );
  }
}
