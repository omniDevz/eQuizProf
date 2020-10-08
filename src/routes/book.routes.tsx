import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Update from '../pages/Teacher/Book/pages/Update';
import New from '../pages/Teacher/Book/pages/New';
import Books from '../pages/Teacher/Book';

const AuthRoutes = () => (
  <Switch>
    <Route path={`/book/update/:bookId`} component={Update} />
    <Route path={`/book/new`} component={New} />
    <Route path={`/book`} component={Books} />
  </Switch>
);

export default AuthRoutes;
