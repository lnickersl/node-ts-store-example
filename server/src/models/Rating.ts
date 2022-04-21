import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  Is,
  IsDecimal,
  Model,
  Table,
} from 'sequelize-typescript';
import {Product} from './Product';
import {User} from './User';

@Table
export class Rating extends Model {
  @AllowNull(false)
  @IsDecimal
  @Is('rating', (value: number) => (value < 1 || value > 5 ? false : true))
  @Column(DataType.INTEGER)
  public rating!: number;

  @ForeignKey(() => Product)
  public productId!: number;

  @ForeignKey(() => User)
  public userId!: number;
}
