import React from "react";
import { Link } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import PropTypes from "prop-types";

const MoviesList = ({ movies, goBack }) => {
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link
            to={{
              pathname: mainRoutes[1].path + `/${id}`,
              state: { from: goBack },
            }}
          >
            {title}
          </Link>
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
