import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import HomePage from '../components/HomePage';
import HeaderContainer from '../components/HeaderContainer';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route
          path="/home"
          component={HomePage}
          exact
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
