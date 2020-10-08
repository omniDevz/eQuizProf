import Update from '../pages/Teacher/Author/pages/Update';
import New from '../pages/Teacher/Author/pages/New';
import Author from '../pages/Teacher/Author';

const AuthorRoutes = [
  {
    component: Update,
    path: '/author/update/:authorId',
  },
  {
    component: New,
    path: '/author/new',
  },
  {
    component: Author,
    path: '/author',
  },
];

export default AuthorRoutes;
