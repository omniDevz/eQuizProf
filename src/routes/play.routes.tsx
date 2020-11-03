import Play from '../pages/Teacher/Play';
import DetailStudent from '../pages/Teacher/Play/pages/DetailStudent';

const PlayRoutes = [
  {
    path: '/play/:movQuizId/student/:studentId',
    component: DetailStudent,
  },
  {
    path: '/play/:movQuizId',
    component: Play,
  },
];

export default PlayRoutes;
