import {IBrand} from './IBrand';
import {IProduct} from './IProduct';

export interface ICategory {
  name: string;

  brands: IBrand[];

  products: IProduct[];
}
