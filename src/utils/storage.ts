import { UserProps } from '../services/interface';

const storage = {
  removeValuesJTW() {
    localStorage.removeItem('@EQD:user');
    localStorage.removeItem('@EQD:token');
    localStorage.removeItem('@EQD:dateExpires');
  },
  setValuesJTW(user: UserProps) {
    localStorage.setItem('@EQD:user', JSON.stringify(user));
    localStorage.setItem('@EQD:token', user.token);
    localStorage.setItem('@EQD:dateExpires', user.dateExpires);
  },
  getUserJTW() {
    return localStorage.getItem('@EQD:user');
  },
  getTokenJTW() {
    return localStorage.getItem('@EQD:token');
  },
  getDateExpirationJTW() {
    return new Date(localStorage.getItem('@EQD:dateExpires') || '');
  },
  hasValuesJTW() {
    return storage.getUserJTW() && storage.getTokenJTW();
  },
};

export default storage;
