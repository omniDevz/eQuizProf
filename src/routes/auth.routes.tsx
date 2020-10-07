import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Teacher/Home';
import Account from '../pages/Teacher/Account';
import Play from '../pages/Teacher/Play';

import Classes from './classes.routes';
import Live from './live.routes';
import Author from './author.routes';
import Book from './book.routes';
import Quiz from './quiz.routes';

const AuthRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path={`/`} exact component={Home} />
      <Route path={`/home`}>
        <Redirect to="/" />
      </Route>
      <Route path={`/login`}>
        <Redirect to="/" />
      </Route>

      <Route path={`/account`} component={Account} />
      <Route path={`/play`} component={Play} />

      <Classes />
      <Live />
      <Author />
      <Book />
      <Quiz />
    </Switch>
  </BrowserRouter>
);

export default AuthRoutes;
