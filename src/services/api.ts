import axios from 'axios';

import config from '../config';
import { useAuth } from '../contexts/auth';
import storage from '../utils/storage';
import { UserProps } from './interface';

export const apiViaCep = axios.create({
  baseURL: config.URL_API_VIACEP,
});

export const apiCountries = axios.create({
  baseURL: config.URL_API_COUNTRIES,
});

export const apiLocations = axios.create({
  baseURL: config.URL_API_LOCATIONS,
});

const api = axios.create({
  baseURL: config.URL_BACKEND,
});

const reloadLoginByStorage = () => {
  const storageUser = storage.getUserJTW() || '';
  const storageToken = storage.getTokenJTW();
  if (!storageUser || !storageToken) {
  }

  const user: UserProps = JSON.parse(storageUser);

  const { signIn } = useAuth();
  signIn(user.username, '');
};

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
    } else {
      return Promise.reject(error);
    }
  }
);

api.interceptors.request.use(
  (config) => {
    if (storage.hasValuesJTW()) {
      const userTokenExpiration = storage.getDateExpirationJTW();
      const today = new Date();
      if (today > userTokenExpiration) {
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
