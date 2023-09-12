import {ICategory} from './ICategory';
import {IProduct} from './IProduct';

export interface IBrand {
  name: string;

  categories: ICategory[];

  products: IProduct[];
}
