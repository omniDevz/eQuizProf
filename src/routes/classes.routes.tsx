import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Classes from '../pages/Teacher/Classes';
import New from '../pages/Teacher/Classes/pages/New';
import Detail from '../pages/Teacher/Classes/pages/Detail';
import Update from '../pages/Teacher/Classes/pages/Update';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path={`/classes/update/:idClass`} component={Update} />
    <Route path={`/classes/new`} component={New} />
    <Route path={`/classes/:idClass`} component={Detail} />
    <Route path={`/classes`} component={Classes} />
  </Switch>
);

export default AuthRoutes;
