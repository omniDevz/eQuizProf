import React from 'react';
import { Route } from 'react-router-dom';

import Update from '../pages/Teacher/Author/pages/Update';
import New from '../pages/Teacher/Author/pages/New';
import Authors from '../pages/Teacher/Author';

const AuthRoutes: React.FC = () => (
  <div>
    <Route path={`/author/update/:authorId`} component={Update} />
    <Route path={`/author/new`} component={New} />
    <Route path={`/author`} component={Authors} />
  </div>
);

export default AuthRoutes;
