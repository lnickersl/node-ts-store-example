import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import {Product} from './Product';

@Table
export class ProductInfo extends Model {
  @AllowNull(false)
  @Column(DataType.STRING)
  public key!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public value!: string;

  @ForeignKey(() => Product)
  public productId!: number;
}
