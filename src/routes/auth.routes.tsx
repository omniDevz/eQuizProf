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

const AuthRoutes: React.FC = () => {
  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/account',
      component: Account,
    },
    {
      path: '/play',
      component: Play,
    },
  ].concat(Author, Classes, Book, Quiz, Live);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={`/home`}>
          <Redirect to="/" />
        </Route>
        <Route path={`/login`}>
          <Redirect to="/" />
        </Route>

        {routes.map((entry) => (
          <Route key={entry.path} exact {...entry} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default AuthRoutes;
