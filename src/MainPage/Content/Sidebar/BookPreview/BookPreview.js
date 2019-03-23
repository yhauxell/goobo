import React from "react";
import "./BookPreview.css";

export default function BookPreview(props) {
  if (props.current) {
    const {
      year,
      thumbnail,
      title,
      subtitle,
      authors,
      description,
      rating
    } = props.current;
    const authorsList = authors.map((author, index) => {
      return (
        <div className="book-preview__author" key={index}>
          {author}
        </div>
      );
    });
    return (
      <div className="book-preview">
        <span className="book-preview__year">{year}</span>
        <img
          className="book-preview__preview"
          src={thumbnail}
          alt="preview not found"
        />
        <h2 className="book-preview__title">
          {title}
          <small>{subtitle}</small>
        </h2>
        {authorsList}
        {rating && rating > 0 ? (
          <div className="book-preview__rating">{rating}</div>
        ) : null}
        <div className="book-preview__description">{description}</div>
      </div>
    );
  }
  return <span>No Book Selected</span>;
}
