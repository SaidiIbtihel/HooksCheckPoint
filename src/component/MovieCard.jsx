import React from "react";
import Rate from "./Rate";

const MovieCard = ({ movie }) => {
  const { title, description, image, rating } = movie;
  return (
    <div>
      <div
        className="card"
        style={{ width: "18rem", padding: " 15px ", margin: "15px" }}
      >
        <img src={image} alt="" className="card-img-top" />

        <Rate rating={rating} />

        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href="#!" className="btn btn-primary" style={{ color: "pink" }}>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;