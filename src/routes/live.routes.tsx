import Live from '../pages/Teacher/Live';
import Streaming from '../pages/Teacher/Live/pages/Streaming';

const LiveRoutes = [
  {
    path: '/live/streaming/:streamingId',
    component: Streaming,
  },
  {
    path: '/live',
    component: Live,
  },
];

export default LiveRoutes;
