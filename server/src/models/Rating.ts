import {ForeignKey, Model, Table} from 'sequelize-typescript';
import {Product} from './Product';
import {User} from './User';

@Table
export class Rating extends Model {
  @ForeignKey(() => Product)
  public productId!: number;

  @ForeignKey(() => User)
  public userId!: number;
}
