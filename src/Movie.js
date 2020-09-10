import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ image, title, summary, year, rating, genres }) {
  return (
    <div>
      <img className="image" src={image} alt={title}></img>
      <h2 className="title">{title}</h2>
      <ul className="genres">
        {genres.map((genre) => {
          return <li class="genre">{genre}</li>;
        })}
      </ul>
      <p className="year">{year}</p>
      <p className="rating">{rating}/10.0</p>
      <p className="summary">{summary}</p>
    </div>
  );
}

Movie.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default Movie;
