import React from "react";
import RoutesList from "../routesList/RoutesList";

const Header = ({ routes }) => {
  return <RoutesList routes={routes} />;
};

export default Header;
