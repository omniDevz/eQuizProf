import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Quizzes from '../pages/Teacher/Quiz';
import New from '../pages/Teacher/Quiz/pages/New';
import Detail from '../pages/Teacher/Quiz/pages/Detail';
import Update from '../pages/Teacher/Quiz/pages/Update';
import QuestionNew from '../pages/Teacher/Quiz/pages/Question/New';
import QuestionUpdate from '../pages/Teacher/Quiz/pages/Question/Update';
import SlideNew from '../pages/Teacher/Quiz/pages/Slide/New';
import SlideUpdate from '../pages/Teacher/Quiz/pages/Slide/Update';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path={`/quiz/update/:quizId`} component={Update} />
    <Route path={`/quiz/new`} component={New} />
    <Route path={`/quiz/:quizId/slide/new`} component={SlideNew} />
    <Route path={`/quiz/:quizId/slide/update`} component={SlideUpdate} />
    <Route path={`/quiz/:quizId/question/new`} component={QuestionNew} />
    <Route path={`/quiz/:quizId/question/update`} component={QuestionUpdate} />
    <Route path={`/quiz/:quizId`} component={Detail} />
    <Route path={`/quiz`} component={Quizzes} />
  </Switch>
);

export default AuthRoutes;
