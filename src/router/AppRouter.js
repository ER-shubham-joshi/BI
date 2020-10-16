import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <Route
            path="/home"
            component={HomePage}
            exact={true}
          />
          <Route component={NotFoundPage} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
