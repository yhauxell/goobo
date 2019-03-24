import React from "react";
import "./Book.css";
import Rating from "../../../../Components/Rating/Rating";
import Authors from "../../../../Components/Authors/Authors";

export default function Book(props) {
  const { id, title, authors, year, rating, thumbnail } = props;
  return (
    <div className="book">
      <span className="book__year">{year}</span>
      <img
        className="book__preview"
        src={thumbnail ? thumbnail : `${window.location.origin}/notfound.png`}
        alt={title}
        title={title}
        onClick={() => {
          props.onSelect(id);
        }}
        tabIndex="0"
      />
      <h2 className="book__title">{title}</h2>
      <div className="book__authors">
        <Authors {...{ authors }} />
      </div>
      <div className="book__rating">
        <Rating {...{ rating }} />
      </div>
      <div className="book__footer" />
    </div>
  );
}
