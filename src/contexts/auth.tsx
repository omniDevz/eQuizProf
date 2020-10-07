import React, { createContext, useState, useEffect, useContext } from 'react';

import { useToasts } from 'react-toast-notifications';
import * as auth from '../services/auth';
import api from '../services/api';

import { UserProps } from '../services/interface';

interface IAuthContext {
  signed: boolean;
  user: UserProps | null;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
  loading: boolean;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    async function loadStoriedData() {
      const storiedUser = localStorage.getItem('@EQuiz:user');
      const storiedToken = localStorage.getItem('@EQuiz:token');

      if (storiedUser && storiedToken) {
        api.defaults.headers.Authorization = `Bearer ${storiedToken}`;

        setUser(JSON.parse(storiedUser));
      }
      setLoading(false);
    }
    loadStoriedData();
  }, []);

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

      localStorage.setItem('@EQuiz:user', JSON.stringify(user));
      localStorage.setItem('@EQuiz:token', user.token);
      addToast('Logado com sucesso', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  }

  function signOut() {
    localStorage.removeItem('@EQuiz:user');
    localStorage.removeItem('@EQuiz:token');
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
