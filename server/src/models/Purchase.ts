import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import {PurchaseItem} from './PurchaseItem';
import {User} from './User';

@Table
export class Purchase extends Model {
  @AllowNull(false)
  @Column(DataType.DATE)
  public time!: Date;

  @ForeignKey(() => User)
  public userId!: number;

  @HasMany(() => PurchaseItem)
  public items!: PurchaseItem[];
}
