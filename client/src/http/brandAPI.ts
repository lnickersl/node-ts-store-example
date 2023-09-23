import {$authHost, $host} from '.';
import {IBrand} from '../types/IBrand';

export const createBrand = async (Brand: Partial<IBrand>) => {
  const {data} = await $authHost.post<IBrand>('api/brand', Brand);

  return data;
};

export const fetchBrands = async () => {
  const {data} = await $host.get<IBrand[]>('api/brand');

  return data;
};

export const fetchBrand = async (id: number) => {
  const {data} = await $host.get<IBrand>('api/brand', {params: {id}});

  return data;
};
