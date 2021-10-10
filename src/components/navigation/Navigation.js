import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes, match = "" }) => {
  return (
    <nav>
      <ul>
        {routes.map(({ name, path, exact }) => (
          <li key={path}>
            <NavLink to={match + path} exact={exact}>
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
