import React from "react";
import "./Book.css";
import Rating from "../../../../Components/Rating/Rating";
import Authors from "../../../../Components/Authors/Authors";

export default function Book(props) {
    const {
        id,
        title,
        authors,
        description,
        year,
        rating,
        thumbnail,
        previewLink
    } = props;
    const lowResDevice = window.matchMedia && window.matchMedia("(max-width: 991px)").matches;
    return (
        <div className="book" tabIndex="0">
            <span className="book__year">{year ? year : "----"}</span>
            <img
                className="book__preview"
                src={
                    thumbnail
                        ? thumbnail
                        : `${window.location.href}/notfound.png`
                }
                alt={title}
                onClick={() => {
                    props.onSelect(id);
                }}
            />
            {lowResDevice ? (
                <span className="preview__preview-link">
                    <a
                        href={previewLink}
                        title="Go to preview at Google Books"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fas fa-external-link-alt" />
                    </a>
                </span>
            ) : null}
            <h2 className="book__title">{title}</h2>
            <div className="book__authors">
                <Authors {...{ authors }} />
            </div>
            <div className="book__rating">
                <Rating {...{ rating }} />
            </div>
            {lowResDevice ? (
                <div className="book__description">{description}</div>
            ) : null}
        </div>
    );
}
