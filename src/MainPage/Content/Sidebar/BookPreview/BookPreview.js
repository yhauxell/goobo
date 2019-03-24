import React from "react";
import "./BookPreview.css";
import Rating from "../../../../Components/Rating/Rating";

export default function BookPreview(props) {
  if (props.current) {
    const {
      year,
      thumbnail,
      title,
      subtitle,
      authors,
      description,
      rating,
      previewLink
    } = props.current;
    const authorsList =
      authors &&
      authors.map((author, index) => {
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
          src={thumbnail ? thumbnail : `${window.location.origin}/notfound.png`}
          alt="preview not found"
        />
        <span className="book-preview__preview-link">
          <a href={previewLink} title="Go to preview at Google Books" target="_blank" rel="noopener noreferrer"> 
          <i className="fas fa-external-link-alt"></i>
          </a>
        </span>
        <h2 className="book-preview__title">
          {title}
          <small>{subtitle}</small>
        </h2>
        {authorsList}
        <div className="book-preview__rating">
          <Rating {...{ rating }} />
        </div>
        <div className="book-preview__description">{description}</div>
      </div>
    );
  }
  return <p className="no-book-preview">No Book Selected</p>;
}
