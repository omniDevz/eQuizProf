import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Live from '../pages/Teacher/Live';
import Streaming from '../pages/Teacher/Live/pages/Streaming';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path={`/live/streaming/:streamingId`} component={Streaming} />
    <Route path={`/live`} component={Live} />
  </Switch>
);

export default AuthRoutes;
