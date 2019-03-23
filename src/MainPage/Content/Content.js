import React from "react";
import "./Content.css";
import Sidebar from "./Sidebar/Sidebar";
import BooksList from "./BooksList/BooksList";
import BooksToolbar from "./BooksToolbar/BooksToolbar";
export default function Content() {
  return (
    <div className="content">
      <aside className="aside">
        <Sidebar />
      </aside>
      <article className="article">
        <BooksToolbar/>
        <BooksList />
      </article>
    </div>
  );
}
