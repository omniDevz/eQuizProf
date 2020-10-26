import Quiz from '../pages/Teacher/Quiz';
import New from '../pages/Teacher/Quiz/pages/New';
import Detail from '../pages/Teacher/Quiz/pages/Detail';
import Update from '../pages/Teacher/Quiz/pages/Update';
import QuestionNew from '../pages/Teacher/Quiz/pages/Question/New';
import QuestionUpdate from '../pages/Teacher/Quiz/pages/Question/Update';
import SlideNew from '../pages/Teacher/Quiz/pages/Slide/New';
import SlideUpdate from '../pages/Teacher/Quiz/pages/Slide/Update';

const QuizRoutes = [
  {
    path: '/quiz/:quizId/slide/new',
    component: SlideNew,
  },
  {
    path: '/quiz/:quizId/slide/update/:slideId',
    component: SlideUpdate,
  },
  {
    path: '/quiz/:quizId/question/new',
    component: QuestionNew,
  },
  {
    path: '/quiz/:quizId/question/update/:questionId',
    component: QuestionUpdate,
  },
  {
    path: '/quiz/:quizId/update',
    component: Update,
  },
  {
    path: '/quiz/new',
    component: New,
  },
  {
    path: '/quiz/:quizId',
    component: Detail,
  },
  {
    path: '/quiz',
    component: Quiz,
  },
];

export default QuizRoutes;
