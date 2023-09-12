import {ICartItem} from './ICartItem';
import {IProductInfo} from './IProductInfo';
import {IPurchaseItem} from './IPurchaseItem';
import {IRating} from './IRating';

export interface IProduct {
  name: string;
  price: number;
  img: string;
  brandId: number;
  categoryId: number;
  ratings: IRating[];
  cartItems: ICartItem[];
  info: IProductInfo[];
  purchaseItems: IPurchaseItem[];
}
