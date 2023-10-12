import {$authHost, $host} from '.';
import {IProduct} from '../types/IProduct';

export const createProduct = async (product: FormData) => {
  const {data} = await $authHost.post<IProduct>('api/product', product);

  return data;
};

export const fetchProducts = async (
  categoryId: number | undefined,
  brandId: number | undefined,
  page: number,
  limit = 5
) => {
  const {
    data: {count, rows},
  } = await $host.get<{
    count: {count: number}[];
    rows: IProduct[];
  }>('api/product', {params: {categoryId, brandId, page, limit}});

  return {rows, count: count?.length};
};

export const fetchProduct = async (id: number) => {
  const {data} = await $host.get<IProduct>(`api/product/${id}`);

  return data;
};
