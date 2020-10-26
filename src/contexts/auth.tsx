import React, { createContext, useState, useEffect, useContext } from 'react';

import { useToasts } from 'react-toast-notifications';
import * as auth from '../services/auth';
import api from '../services/api';
import storage from '../utils/storage';

import { UserProps } from '../services/interface';
import { IAuthContext } from './interface';
import configApi from '../config/api';

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    async function loadStoriedData() {
      const storiedUser = storage.getUserJTW();
      const storiedToken = storage.getTokenJTW();

      if (storiedUser && storiedToken) {
        api.defaults.headers.Authorization = `Bearer ${storiedToken}`;

        setUser(JSON.parse(storiedUser));
        api.defaults.headers.Logged = user?.teacherId;
        // api.defaults.headers.Logged = `${user?.teacherId}-${user?.levelAccess}`;
      }
      setLoading(false);
    }
    loadStoriedData();
  }, []);

  const notAuthorization = () => {
    addToast('Sua sessão foi expirada, efetue o login novamente', {
      appearance: 'success',
      autoDismiss: true,
    });

    storage.removeValuesJTW();
    window.location.href = '/login';
  };

  async function signIn(username: string, password: string) {
    const user = await auth.signIn(username, password);

    if (user.status !== 200) {
      addToast('Usuário ou senha incorreto, tente novamente', {
        appearance: 'warning',
        autoDismiss: true,
      });
    } else {
      setUser(user);
      api.defaults.headers.Authorization = `Bearer ${user.token}`;
      configApi(user, notAuthorization);
      storage.setValuesJTW(user);

      addToast('Logado com sucesso', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }

  function signOut() {
    storage.removeValuesJTW();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
