import React from "react";
import "./Book.css";

export default function Book(props) {
  const {
    id,
    volumeInfo: {
      title,
      authors,
      publishedDate,
      averageRating: rating,
      imageLinks: { smallThumbnail: thumbnail }
    }
  } = props;
  const year = publishedDate.split("-")[0]; //FIXME with moment.js
  const authorsList = authors.map((author, index) => {
    return (
      <div className="book__author" key={index}>
        {author}
      </div>
    );
  });
  return (
    <div className="book">
      <span className="book__year">{year}</span>
      <img className="book__preview" src={thumbnail} alt="preview not found" onClick={()=>{
        props.onSelect(id);
      }}/>
      <h2 className="book__title">{title}</h2>
      {authorsList}
      <div className="book__rating">{rating}</div>
      <div className="book__footer">Formats(pdf, epub)</div>
    </div>
  );
}
