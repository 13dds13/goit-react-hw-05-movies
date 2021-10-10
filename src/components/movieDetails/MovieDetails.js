import React from "react";
import { imgURL, imgPlug } from "../../data/fetchData.json";
import PropTypes from "prop-types";
import { container, img } from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <div className={container}>
      <img
        className={img}
        src={poster_path ? imgURL + poster_path : imgPlug}
        alt={`poster of the movie ${title}`}
        width="256"
        height="384"
      />
      <div>
        <h2>{title}</h2>
        <p>User score: {Math.round(vote_average * 10)}%</p>
        <p>OverView: {overview}</p>
        <p>
          Genres:{" "}
          {genres.map(({ id, name }) => (
            <span key={id}>{name} </span>
          ))}
        </p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }),
};

export default MovieDetails;
