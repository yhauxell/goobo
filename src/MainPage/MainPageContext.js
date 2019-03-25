import React from "react";

let MainPageContext = React.createContext({
    ids: [],
    books: {},
    size: 0,
    order: "asc",
    filters: [],
    filter: null,
    term: "",
    current: null,
    pageSize: 40,
    currentPage: 1,
    total: 0,
    paging: false,
    actions: {
        searchBooks: () => {},
        changeCurrent: () => {},
        filterBooks: () => {},
        sortBooks: () => {},
        changePage: () => {}
    }
});

export default MainPageContext;
