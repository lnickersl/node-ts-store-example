import {ForeignKey, Model, Table} from 'sequelize-typescript';
import {Brand} from './Brand';
import {Category} from './Category';

@Table
export class CategoryBrand extends Model {
  @ForeignKey(() => Category)
  public categoryId!: number;

  @ForeignKey(() => Brand)
  public brandId!: number;
}
