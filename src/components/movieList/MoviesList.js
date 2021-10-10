import React from "react";
import { Link } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PropTypes from "prop-types";

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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};

export default MoviesList;
