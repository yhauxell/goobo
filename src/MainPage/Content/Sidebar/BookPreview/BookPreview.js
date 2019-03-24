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
            <div className="book-preview" tabIndex="0">
                <span className="book-preview__year">{year}</span>
                <img
                    className="book-preview__preview"
                    src={
                        thumbnail
                            ? thumbnail
                            : `${window.location.origin}/notfound.png`
                    }
                    alt={title}
                />
                <span className="book-preview__preview-link">
                    <a
                        href={previewLink}
                        title="Go to preview at Google Books"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-external-link-alt" />
                    </a>
                </span>
                <h1 className="book-preview__title" aria-label="Book Title">
                    {title}
                    <small arial-level="2">{subtitle}</small>
                </h1>
                <div className="book-preview__authors">{authorsList}</div>
                <div className="book-preview__rating">
                    <Rating {...{ rating }} />
                </div>
                <div className="book-preview__description">{description}</div>
            </div>
        );
    }
    return <p className="no-book-preview">No Book Selected</p>;
}
