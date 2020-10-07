import React from 'react';
import { Route } from 'react-router-dom';

import Live from '../pages/Teacher/Live';
import Streaming from '../pages/Teacher/Live/pages/Streaming';

const AuthRoutes: React.FC = () => (
  <div>
    <Route path={`/live/streaming/:streamingId`} component={Streaming} />
    <Route path={`/live`} component={Live} />
  </div>
);

export default AuthRoutes;
