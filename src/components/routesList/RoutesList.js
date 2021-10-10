import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

const RoutesList = ({ routes, match = "" }) => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route
            path={match + path}
            exact={exact}
            component={component}
            key={path}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

RoutesList.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      exact: PropTypes.bool,
      component: PropTypes.object,
    })
  ),
  match: PropTypes.string,
};

export default RoutesList;
