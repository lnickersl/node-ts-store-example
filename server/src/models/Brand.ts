import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import {Category} from './Category';
import {CategoryBrand} from './CategoryBrand';
import {Product} from './Product';

@Table
export class Brand extends Model {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  public name!: string;

  @BelongsToMany(() => Category, () => CategoryBrand)
  public categories!: Category[];

  @HasMany(() => Product)
  public products!: Product[];
}
