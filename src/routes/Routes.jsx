import React from "react";

import { Route, Switch } from "react-router-dom";

import Homepage from "../pages/Homepage";
// import Product from "../pages/Product";
// import Menu from "../pages/Menu";
// import Events from "../pages/Events";
// import Blog from "../pages/Blog";
// import Contact from "../pages/Contact";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  );
};

export default Routes;
