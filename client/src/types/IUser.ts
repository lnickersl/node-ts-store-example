import {EUserRole} from '../enums/EUserRole';
import {ICart} from './ICart';
import {IRating} from './IRating';

export interface IUser {
  email: string;

  password: string;

  role: EUserRole;

  name: string;

  cart: ICart;

  ratings: IRating[];
}
