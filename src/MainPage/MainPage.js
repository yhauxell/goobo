import React, { Component } from "react";
import "./MainPage.css";
import Top from "./Top/Top";
import Content from "./Content/Content";
import GoogleBookService from "../Api/Services/GoogleBookService";
import MainPageContext from "./MainPageContext";
import ErrorBoundary from "./../Components/ErrorBoundary/ErrorBoundary";
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
                filterBooks: year => this.filterBooks(year),
                sortBooks: order => this.sortBooks(order)
            },
            error:null
        };
        this.service = new GoogleBookService();
    }

    componentDidMount() {
        this.getBooks(this.state.term);
    }
    render() {
        return (
            <main className="main-page">
                <MainPageContext.Provider value={this.state}>
                    <Top />
                    <ErrorBoundary>
                        <Content />
                    </ErrorBoundary>
                </MainPageContext.Provider>
            </main>
        );
    }

    changeCurrent(id) {
        this.setState({ current: this.state.books[id] });
    }

    getBooks(term) {
        if (!term) {
            this.setState({error: { message: "Search term can not be empty."}});
            return;
        }
        this.setState({ term });
        this.setState({ total: 0 });
        this.service
            .getBooks(term)
            .then(result => {
                this.setState({ ...result });
                this.original = { ids: result.ids };
            })
            .catch((error)=>{
                this.setState({error});
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
