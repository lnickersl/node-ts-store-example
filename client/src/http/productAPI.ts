import {$authHost, $host} from '.';
import {IProduct} from '../types/IProduct';

export const createProduct = async (Product: Partial<IProduct>) => {
  const {data} = await $authHost.post<IProduct>('api/product', Product);

  return data;
};

export const fetchProducts = async () => {
  const {data} = await $host.get<{count: number; rows: IProduct[]}>(
    'api/product'
  );

  return data.rows;
};

export const fetchProduct = async (id: number) => {
  const {data} = await $host.get<IProduct>('api/product', {params: {id}});

  return data;
};
