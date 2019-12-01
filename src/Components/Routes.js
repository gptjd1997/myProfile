import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Routes/Home/Home";

const AppRouter = () => (
  <Switch>
    <Route path="/" component={Home} />
  </Switch>
);

export default AppRouter;
