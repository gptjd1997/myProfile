import React from "react";
import { Route, Switch } from "react-router-dom";
import Python from "../Routes/Python";
import Links from "../Routes/Links";
import JS from "../Routes/JS";

const AppRouter = ({ action }) => (
  <Switch>
    <Route path="/" component={JS} />
    <Route path="/Python" component={Python} />
    <Route path="/Links" component={Links} />
  </Switch>
);

export default AppRouter;
