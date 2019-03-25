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
            order: "asc",
            filters: [],
            filter: null,
            term: "electric vehicles",
            current: null,
            pageSize: 40,
            currentPage: 1,
            total: 0,
            paging: false,
            actions: {
                searchBooks: term => this.searchBooks(term),
                changeCurrent: id => this.changeCurrent(id),
                filterBooks: year => this.filterBooks(year),
                sortBooks: order => this.sortBooks(order),
                changePage: page => this.changePage(page)
            },
            error: null
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

    searchBooks(term) {
        this.setState({ currentPage: 1 });
        this.getBooks(term);
    }

    async getBooks(term, from = 0, size = 40) {
        if (!term) {
            this.setState({
                size: 0,
                error: { message: "Search term can not be empty." }
            });
            return;
        }
        this.setState({ term, error: null });
        try {
            const result = await this.service.getBooks(term, from, size);
            this.setState({ ...result });
            this.original = { ids: result.ids };
            return true;
        } catch (error) {
            this.setState({ size: 0, total: 0, error });
            return false;
        }
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

    changePage(currentPage) {
        const { term, pageSize } = this.state;
        this.setState({ currentPage, paging: true });
        const offset = (currentPage - 1) * pageSize;
        const from = offset === 0 ? 0 : 1 + offset;
        this.getBooks(term, from, pageSize).then(r => {
            this.setState({ paging: false });
        });
    }
}
