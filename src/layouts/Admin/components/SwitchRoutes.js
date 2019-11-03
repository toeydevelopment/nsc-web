import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types'

const switchRoutes = ({ routes }) => (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
    <Redirect from="/admin" to="/admin/dashboard" />
  </Switch>
);


switchRoutes.protoTypes = {
    routes: PropTypes.array
}
export default switchRoutes;
