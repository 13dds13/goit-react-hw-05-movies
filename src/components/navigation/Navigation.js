import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { container, list, item, activeItem } from "./Navigation.module.css";

const Navigation = ({ routes, match = "", goBack }) => {
  return (
    <nav className={container}>
      <ul className={list}>
        {routes.map(({ name, path, exact }) => (
          <li key={path}>
            <NavLink
              to={{ pathname: match + path, state: { from: goBack } }}
              exact={exact}
              className={item}
              activeClassName={activeItem}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
      exact: PropTypes.bool,
    })
  ),
  match: PropTypes.string,
};

export default Navigation;
