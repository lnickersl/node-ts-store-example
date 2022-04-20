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
  @Default(1)
  @Column(DataType.INTEGER)
  public amount!: number;

  @ForeignKey(() => Product)
  public productId!: number;

  @ForeignKey(() => Cart)
  public cartId!: number;
}
