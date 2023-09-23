import {$authHost, $host} from '.';
import {ICategory} from '../types/ICategory';

export const createCategory = async (category: Partial<ICategory>) => {
  const {data} = await $authHost.post<ICategory>('api/category', category);

  return data;
};

export const fetchCategories = async () => {
  const {data} = await $host.get<ICategory[]>('api/category');

  return data;
};

export const fetchCategory = async (id: number) => {
  const {data} = await $host.get<ICategory>('api/category', {params: {id}});

  return data;
};
