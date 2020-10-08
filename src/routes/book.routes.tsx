import Update from '../pages/Teacher/Book/pages/Update';
import New from '../pages/Teacher/Book/pages/New';
import Book from '../pages/Teacher/Book';

const BookRoutes = [
  {
    path: '/book/update/:bookId',
    component: Update,
  },
  {
    path: '/book/new',
    component: New,
  },
  {
    path: '/book',
    component: Book,
  },
];

export default BookRoutes;
