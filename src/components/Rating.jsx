import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Rating = ({ value }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (i - value < 1) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return <div>{stars}</div>;
};

export default Rating;
