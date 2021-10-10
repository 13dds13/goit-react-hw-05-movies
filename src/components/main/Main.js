import React from "react";
import { routesForMovieDetailsPage } from "../../routes/routesForMovieDetailsPage";
import RoutesList from "../routesList/RoutesList";
import PropTypes from "prop-types";

const Main = ({ routes }) => {
  return (
    <>
      <RoutesList routes={routes} />
      <RoutesList routes={routesForMovieDetailsPage.generalMovieDetails} />
    </>
  );
};

Main.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Main;
