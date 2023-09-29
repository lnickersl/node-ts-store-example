import {EUserRole} from '../enums/EUserRole';
import {IUser} from '../types/IUser';
import {$authHost, $host} from './index';
import jwtDecode from 'jwt-decode';

export const registration = async (email: string, password: string) => {
  const {data} = await $host.post('api/user/registration', {
    email,
    password,
    role: EUserRole.Admin,
  });

  if (!data.token) throw Error('No token');

  localStorage.setItem('token', data.token);
  return jwtDecode<IUser>(data.token);
};

export const login = async (email: string, password: string) => {
  const {data} = await $host.post('api/user/login', {
    email,
    password,
  });

  if (!data.token) throw Error('No token');

  localStorage.setItem('token', data.token);
  return jwtDecode<IUser>(data.token);
};

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth');

  if (!data?.token) throw Error('No token');

  return jwtDecode<IUser>(data.token);
};
