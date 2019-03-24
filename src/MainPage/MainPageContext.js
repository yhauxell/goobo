import React from "react";

let MainPageContext = React.createContext({
  ids: [],
  books: {},
  size: 0,
  total: 0,
  order: "asc",
  filters: [],
  filter: null,
  term: "",
  current: null,
  actions: {
    getBooks: () => {},
    changeCurrent: () => {},
    filterBooks: () => {},
    sortBooks: () => {},
  }
});

export default MainPageContext;
