import {ICartItem} from './ICartItem';

export interface ICart {
  userId: number;

  items: ICartItem[];
}
