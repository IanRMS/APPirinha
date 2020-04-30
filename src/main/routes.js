import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../pages/home";
import Categories from "../pages/categories";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="categories" component={Categories} />
    <Redirect from="*" to="/" />
  </Switch>
);
