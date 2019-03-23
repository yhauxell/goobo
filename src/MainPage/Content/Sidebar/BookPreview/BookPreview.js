import React from "react";
import "./BookPreview.css";

export default function BookPreview(props) {
  if (props.current) {
    const {
      year,
      thumbnail,
      title,
      subtitle,
      authorsList,
      rating
    } = props.current;

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
        <div className="book-preview__rating">{rating}</div>
        <div className="book-preview__footer">Formats(pdf, epub)</div>
      </div>
    );
  }
  return <span>No Book Selected</span>;
}
