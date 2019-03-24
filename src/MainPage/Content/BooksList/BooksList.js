import React, { Component } from "react";
import Book from "./Book/Book";
import "./BooksList.css";
import Loader from "../../../Components/Loader/Loader";
import MainPageContext from "../../MainPageContext";
import ErrorScreen from "../../../Components/ErrorScreen/ErrorScreen";

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
                {({ error, ids, books, total, actions: { changeCurrent } }) => {
                    
                    if (error) {
                        return <ErrorScreen message={error.message}></ErrorScreen>;
                    }

                    return (
                        <section className="books-list">
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
                                <Loader message="Searching books..." />
                            )}
                        </section>
                    );
                }}
            </MainPageContext.Consumer>
        );
    }
}
