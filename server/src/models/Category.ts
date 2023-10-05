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
import {Brand} from './Brand';
import {CategoryBrand} from './CategoryBrand';
import {Product} from './Product';

@Table
export class Category extends Model {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  public name!: string;

  @BelongsToMany(() => Brand, () => CategoryBrand)
  public brands!: Brand[];

  @HasMany(() => Product, {onDelete: 'CASCADE'})
  public products!: Product[];
}
