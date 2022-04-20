import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import {Product} from './Product';
import {Purchase} from './Purchase';

@Table
export class PurchaseItem extends Model {
  @AllowNull(false)
  @Column(DataType.INTEGER)
  public product_price!: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  public product_amount!: number;

  @ForeignKey(() => Product)
  public productId!: number;

  @ForeignKey(() => Purchase)
  public purchaseId!: number;
}
