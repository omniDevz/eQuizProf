import { UserProps } from '../services/interface';

const storage = {
  removeValuesJTW() {
    localStorage.removeItem('@EQuiz:user');
    localStorage.removeItem('@EQuiz:token');
    localStorage.removeItem('@EQuiz:dateExpires');
  },
  setValuesJTW(user: UserProps) {
    localStorage.setItem('@EQuiz:user', JSON.stringify(user));
    localStorage.setItem('@EQuiz:token', user.token);
    localStorage.setItem('@EQuiz:dateExpires', user.dateExpires);
  },
  getUserJTW() {
    return localStorage.getItem('@EQuiz:user');
  },
  getTokenJTW() {
    return localStorage.getItem('@EQuiz:token');
  },
  getDateExpirationJTW() {
    return new Date(localStorage.getItem('@EQuiz:dateExpires') || '');
  },
  hasValuesJTW() {
    return storage.getUserJTW() && storage.getTokenJTW();
  },
};

export default storage;
