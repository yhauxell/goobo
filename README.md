## Goobo - Book search and preview from Google Books

This project is part of a PoC to demonstrate integration with google books api (free access), specifically, volumes given a term. The application at the moment is able to:

* Ajax books search by a desired term.
* Display Books results (by default will look for "electric vehicles" term in order to demonstrate the functionality).
* Select a book and display its details.
* Order books in asc or desc order.
* Filter books by year.
* Ajax pagination.

## Available at: 
[Yausell's Github Pages](https://yhauxell.github.io/goobo)

### Book

A book contains the following attributes:

* Year
* Title
* Subtitle
* Authors
* Rating
* Description
* Preview link to Google Books Viewer

## Fractal project structure

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
│   ├── Pagination
│   │   ├── Pagination.css
│   │   └── Pagination.js
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
│   │       │   └── Filters.js
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

### Important Notes: 

* Principal components are unit tested to ensure functionalities quality after modifications.
* Google API results use to return duplicated values, because of that issue and since max result is 40 in some pages you will find less thant 40 books.
* Preview book is only available for hight res devices (> 991) in order to prevent unconfortable navigation experience while in mobile, instead short description is displayed for each book.


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