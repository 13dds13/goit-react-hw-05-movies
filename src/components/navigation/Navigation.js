import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ({ routes }) => {
  return (
    <ul>
      {routes.map(({ name, path, exact }) => (
        <li key={path}>
          <NavLink to={path} exact={exact}>
            {name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
