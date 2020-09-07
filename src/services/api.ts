import axios from 'axios';

import config from '../config';

const api = axios.create({
  baseURL: config.URL_BACKEND,
});

export default api;
