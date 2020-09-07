import axios from 'axios';

import config from '../config';

export const apiViaCep = axios.create({
  baseURL: config.URL_API_VIACEP,
});

const api = axios.create({
  baseURL: config.URL_BACKEND,
});

export default api;
