import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './Landing';
import NewRegister from './NewRegister';
import Login from './Login';
import RecoveryPassword from './RecoveryPassword';
import RecoveryPasswordCode from './RecoveryPasswordCode';
import RecoveryPasswordNew from './RecoveryPasswordNew';
import About from './About';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/newRegister" component={NewRegister} />
      <Route path="/login" component={Login} />
      <Route path="/recoveryPassword" component={RecoveryPassword} />
      <Route path="/recoveryPasswordCode" component={RecoveryPasswordCode} />
      <Route path="/recoveryPasswordNew" component={RecoveryPasswordNew} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default Routes;
