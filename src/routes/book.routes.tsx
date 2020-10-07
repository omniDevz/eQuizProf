import React from 'react';
import { Route, Router } from 'react-router-dom';

import Update from '../pages/Teacher/Book/pages/Update';
import New from '../pages/Teacher/Book/pages/New';
import Books from '../pages/Teacher/Book';

const AuthRoutes = () => (
  <>
    <Route path={`/book/update/:bookId`} component={Update} />
    <Route path={`/book/new`} component={New} />
    <Route path={`/book`} component={Books} />
  </>
);

export default AuthRoutes;
