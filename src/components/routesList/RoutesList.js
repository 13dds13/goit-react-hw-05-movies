import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const RoutesList = ({ routes }) => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {routes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} component={component} key={path} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default RoutesList;
