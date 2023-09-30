import React, {ReactNode, useState} from 'react';
import {IUser} from '../types/IUser';
import {check, login, registration} from '../http/userAPI';
import {EUserRole} from '../enums/EUserRole';
import {AuthContext} from '..';
import jwtDecode from 'jwt-decode';

export interface IAuthContext {
  user: IUser | null;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegistration: (
    email: string,
    password: string,
    role: EUserRole
  ) => Promise<void>;
  onCheck: () => Promise<void>;
  onLogout: () => void;
}

//Авторизация через state для ре-рендера страницы при logout
export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = (email: string, password: string) => {
    return handleAuth(login(email, password));
  };

  const handleRegistration = async (
    email: string,
    password: string,
    role: EUserRole
  ) => {
    return handleAuth(registration(email, password, role));
  };

  const handleCheck = async () => {
    return handleAuth(check());
  };

  const handleAuth = (authPromise: Promise<string>) => {
    return authPromise.then(token => {
      localStorage.setItem('token', token);

      const user = jwtDecode<IUser>(token);
      setUser(user);
    });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value: IAuthContext = {
    user,
    onLogin: handleLogin,
    onRegistration: handleRegistration,
    onCheck: handleCheck,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
