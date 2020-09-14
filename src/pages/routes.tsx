import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import NewRegister from './NewRegister';
import Login from './Login';
import RecoveryPassword from './RecoveryPassword';
import RecoveryPasswordCode from './RecoveryPasswordCode';
import RecoveryPasswordNew from './RecoveryPasswordNew';

import TeacherHome from './Teacher/Home';
import TeacherAccount from './Teacher/Account';
import TeacherClasses from './Teacher/Classes';
import TeacherClassesNew from './Teacher/Classes/pages/New';
import TeacherClassesDetail from './Teacher/Classes/pages/Detail';
import TeacherClassesUpdate from './Teacher/Classes/pages/Update';

import NotFound from './NotFound';

function Routes() {
  const subdomainTeacher = 'teacher';

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/newRegister" component={NewRegister} />
        <Route path="/login" component={Login} />
        <Route path="/recoveryPassword" component={RecoveryPassword} />
        <Route path="/recoveryPasswordCode" component={RecoveryPasswordCode} />
        <Route path="/recoveryPasswordNew" component={RecoveryPasswordNew} />

        <Route path={`/${subdomainTeacher}/home`} component={TeacherHome} />

        <Route
          path={`/${subdomainTeacher}/account`}
          component={TeacherAccount}
        />

        <Route
          path={`/${subdomainTeacher}/classes/new`}
          component={TeacherClassesNew}
        />
        <Route
          path={`/${subdomainTeacher}/classes/update/:idClass`}
          component={TeacherClassesUpdate}
        />
        <Route
          path={`/${subdomainTeacher}/classes/:idClass`}
          component={TeacherClassesDetail}
        />
        <Route
          path={`/${subdomainTeacher}/classes`}
          component={TeacherClasses}
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
