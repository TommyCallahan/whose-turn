import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import App from '../App';
import OpeningScreen from './OpeningScreen';

const Router = () => (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={OpeningScreen} />
      <Route exact path="/whose-turn" component={App} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
