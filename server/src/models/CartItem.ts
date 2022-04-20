import {
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import {Cart} from './Cart';
import {Product} from './Product';

@Table
export class CartItem extends Model {
  @ForeignKey(() => Product)
  public productId!: number;

  @ForeignKey(() => Cart)
  public cartId!: number;
}
