import React from "react";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title }, ind) => (
        <li key={ind}>{title}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
