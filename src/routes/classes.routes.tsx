import Classes from '../pages/Teacher/Classes';
import New from '../pages/Teacher/Classes/pages/New';
import Detail from '../pages/Teacher/Classes/pages/Detail';
import Update from '../pages/Teacher/Classes/pages/Update';

const ClassRouter = [
  {
    path: '/classes/update/:idClass',
    component: Update,
  },
  {
    path: '/classes/new',
    component: New,
  },
  {
    path: '/classes/:idClass',
    component: Detail,
  },
  {
    path: '/classes',
    component: Classes,
  },
];

export default ClassRouter;
