import React from "react";
import {Route, Switch} from "react-router";
import {SignIn, Home, SignUp} from "./templates";

const Router = () => {
  return(
    <Switch>
      <Route exact path="(/)?" component={Home}/>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/SignUp" component={SignUp}/>
    </Switch>
  );
};

export default Router;
