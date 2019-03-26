## Goobo - Book search and preview from Google Books

This project is part of an integration Demo with google books api (free access), specifically, search for volumes given a term. 

## Capabilities:

* Search while typing a term
* Ajax books search.
* Display Books results (default search term is "electric vehicle").
* Select a book and display its details.
* Order books in asc or desc order.
* Filter books by year.
* Ajax pagination.

## Demo is live at:  

[My Github Pages > Goobo](https://yhauxell.github.io/goobo)

## Entities

### Book

A book contains the following attributes:

* Year
* Title
* Subtitle
* Authors
* Rating
* Description
* Preview link to Google Books Viewer

## Design principles:

* Mobile first approach have been implemented.
* All the JS and CSS have been developed in-house to avoid extra dependencies and low performance.
* React library is used to accomplish interactions and state managment with the Context API instead of popular libraries like redux or mobx.
* Principal components are fully unit tested to ensure reliability while scale.
* Pagination feature is ajax based to GB Api.
* Google API results use to return duplicated values. This is a major drawback in visualization but better than display wrong results.


## Fractal project structure

```
src
├── Api
│   ├── Services
│   │   ├── GoogleBookService.js
│   │   └── GoogleBookService.test.js
│   └── Utils
│       └── DebounceFunction.js
├── App.css
├── App.js
├── App.test.js
├── Components
│   ├── Authors
│   │   ├── Authors.css
│   │   ├── Authors.js
│   │   └── Authors.test.js
│   ├── ErrorBoundary
│   │   └── ErrorBoundary.js
│   ├── ErrorScreen
│   │   ├── ErrorScreen.css
│   │   ├── ErrorScreen.js
│   │   └── dead-error.svg
│   ├── Loader
│   │   ├── Loader.css
│   │   ├── Loader.js
│   │   └── Loader.test.js
│   ├── Pagination
│   │   ├── Pagination.css
│   │   ├── Pagination.js
│   │   └── Pagination.test.js
│   └── Rating
│       ├── Rating.css
│       ├── Rating.js
│       └── Rating.test.js
├── MainPage
│   ├── Content
│   │   ├── BooksFooter
│   │   │   ├── BooksFooter.css
│   │   │   └── BooksFooter.js
│   │   ├── BooksList
│   │   │   ├── Book
│   │   │   │   ├── Book.css
│   │   │   │   ├── Book.js
│   │   │   │   └── Book.test.js
│   │   │   ├── BooksList.css
│   │   │   ├── BooksList.js
│   │   │   └── BooksList.test.js
│   │   ├── BooksToolbar
│   │   │   ├── BooksToolbar.css
│   │   │   ├── BooksToolbar.js
│   │   │   ├── BooksToolbar.test.js
│   │   │   ├── SortBy
│   │   │   │   ├── SortBy.css
│   │   │   │   └── SortBy.js
│   │   │   └── Total
│   │   │       ├── Total.css
│   │   │       └── Total.js
│   │   ├── Content.css
│   │   ├── Content.js
│   │   └── Sidebar
│   │       ├── BookPreview
│   │       │   ├── BookPreview.css
│   │       │   └── BookPreview.js
│   │       ├── Filters
│   │       │   ├── Filter
│   │       │   ├── Filters.css
│   │       │   ├── Filters.js
│   │       │   └── Filters.test.js
│   │       ├── Sidebar.css
│   │       ├── Sidebar.js
│   │       └── Sidebar.test.js
│   ├── MainPage.css
│   ├── MainPage.js
│   ├── MainPage.test.js
│   ├── MainPageContext.js
│   └── Top
│       ├── Logo
│       │   ├── Logo.css
│       │   └── Logo.js
│       ├── SearchBar
│       │   ├── Search
│       │   │   ├── Search.css
│       │   │   └── Search.js
│       │   ├── SearchBar.css
│       │   └── SearchBar.js
│       ├── Top.css
│       └── Top.js
├── index.css
├── index.js
└── serviceWorker.js
```

## Regarding React configuration

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To run dev mode, just:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.