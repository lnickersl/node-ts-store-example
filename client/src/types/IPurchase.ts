import {IPurchaseItem} from './IPurchaseItem';

export interface IPurchase {
  time: Date;

  userId: number;

  items: IPurchaseItem[];
}
