import React from "react";
import Navigation from "../navigation/Navigation";
import PropTypes from "prop-types";

const Header = ({ routes }) => {
  return <Navigation routes={routes} />;
};

Header.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};

export default Header;
