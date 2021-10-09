import React from "react";
import { Link } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={mainRoutes[1].path + `/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
