import {IProductInfo} from './IProductInfo';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  brandId: number;
  categoryId: number;
  info: IProductInfo[];
  rating: number;
}
