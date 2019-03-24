import React from "react";
import "./Rating.css";

export default function Rating(props) {
  const { rating } = props;
  let ratingWidth = rating ? rating * 20 : 0;
  return (
    <div className="rating" title={'Book rating: ' + (rating ? rating : '0 ') + ' stars'}>
      <div className="rating-wrap">
        <span className="stars-active" style={{ width: `${ratingWidth}%` }}>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
        <span className="stars-inactive">
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
}
