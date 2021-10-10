import React from "react";
import { imgURL, imgPlug } from "../../data/fetchData.json";

const MovieDetails = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <>
      <img
        src={poster_path ? imgURL + poster_path : imgPlug}
        alt={`poster of the movie ${title}`}
        width="256"
        height="384"
      />
      <h2>{title}</h2>
      <p>User score: {Math.round(vote_average * 10)}%</p>
      <p>OverView: {overview}</p>
      <p>
        Genres:{" "}
        {genres.map(({ id, name }) => (
          <span key={id}>{name} </span>
        ))}
      </p>
    </>
  );
};

export default MovieDetails;
