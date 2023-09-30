import {EUserRole} from '../enums/EUserRole';
import {$authHost, $host} from './index';

export const registration = async (
  email: string,
  password: string,
  role: EUserRole
) => {
  const {data} = await $host.post('api/user/registration', {
    email,
    password,
    role,
  });

  if (!data?.token) throw Error('No token');

  return data.token;
};

export const login = async (email: string, password: string) => {
  const {data} = await $host.post('api/user/login', {
    email,
    password,
  });

  if (!data?.token) throw Error('No token');

  return data.token;
};

export const check = async () => {
  const {data} = await $authHost.get('api/user/auth');

  if (!data?.token) throw Error('No token');

  return data.token;
};
