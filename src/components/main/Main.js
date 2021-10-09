import React from "react";
import { routesForMovieDetailsPage } from "../../routes/routesForMovieDetailsPage";
import RoutesList from "../routesList/RoutesList";

const Header = ({ routes }) => {
  return (
    <>
      <RoutesList routes={routes} />
      <RoutesList routes={routesForMovieDetailsPage.generalMovieDetails} />
    </>
  );
};

export default Header;
