## Goobo - Book search and preview from Google Books

This project is part of a PoC to demonstrate integration with google books api (free access), specifically, volumes given a term. The application at the moment is able to:

* Display Books results (by default will look for "Game of Thrones" term).
* Select a book and display its details.
* Order books in asc or desc order.
* Filter books by year

### Book

A book contains the following attributes:

* Year
* Title
* Subtitle
* Authors
* Rating
* Description
* Preview link to Google Books Viewer

## Project structure

```
src
├── Api
│   └── Services
│       ├── GoogleBookService.js
│       └── GoogleBookService.test.js
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
│   │   │   ├── BooksList.css
│   │   │   ├── BooksList.js
│   │   │   └── BooksList.test.js
│   │   ├── BooksToolbar
│   │   │   ├── BooksToolbar.css
│   │   │   ├── BooksToolbar.js
│   │   │   ├── BooksToolbar.test.js
│   │   │   ├── SortBy
│   │   │   └── Total
│   │   ├── Content.css
│   │   ├── Content.js
│   │   └── Sidebar
│   │       ├── BookPreview
│   │       ├── Filters
│   │       ├── Sidebar.css
│   │       └── Sidebar.js
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
│       │   ├── SearchBar.css
│       │   └── SearchBar.js
│       ├── Top.css
│       └── Top.js
├── index.css
├── index.js
└── serviceWorker.js
```

### Test Notes: 

* Principal components are unit tested.


## Regarding React boilerplace

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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