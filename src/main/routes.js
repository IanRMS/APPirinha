import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../pages/home";
import Categories from "../pages/categories";
import CategoryItens from "../pages/categoryItems";
import Drink from "../pages/drink";
import Search from "../pages/search";

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/categories" exact component={Categories} />
    <Route path="/categories/filter-category" exact component={CategoryItens} />
    <Route path="/:drink" component={Drink} />
    <Route path="/search" component={Search} />
    <Redirect from="*" to="/" />
  </Switch>
);
