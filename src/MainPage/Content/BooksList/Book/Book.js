import React from "react";
import "./Book.css";

export default function Book(props) {
  const { id, title, authors, year, rating, thumbnail } = props;
  const authorsList =
    authors &&
    authors.map((author, index) => {
      return (
        <div className="book__author" key={index}>
          {author}
        </div>
      );
    });
  return (
    <div className="book">
      <span className="book__year">{year}</span>
      <img
        className="book__preview"
        src={thumbnail ? thumbnail : `${window.location.origin}/notfound.png`}
        alt="preview not found"
        onClick={() => {
          props.onSelect(id);
        }}
      />
      <h2 className="book__title">{title}</h2>
      {authorsList}
      <div className="book__rating">{rating}</div>
      <div className="book__footer" />
    </div>
  );
}
