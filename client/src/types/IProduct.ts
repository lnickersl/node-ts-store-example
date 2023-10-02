import {IBrand} from './IBrand';
import {ICategory} from './ICategory';
import {IProductInfo} from './IProductInfo';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;

  brandId: number;
  brand: IBrand;

  categoryId: number;
  category: ICategory;

  info: IProductInfo[];
  rating: number;
}
