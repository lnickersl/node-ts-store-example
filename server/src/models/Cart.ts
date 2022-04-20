import {ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {CartItem} from './CartItem';
import {User} from './User';

@Table
export class Cart extends Model {
  @ForeignKey(() => User)
  public userId!: number;

  @HasMany(() => CartItem)
  public items!: CartItem[];
}
