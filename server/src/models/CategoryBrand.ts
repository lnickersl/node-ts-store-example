import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import Brand from './Brand';
import Category from './Category';

interface CategoryBrandModel
  extends Model<
    InferAttributes<CategoryBrandModel>,
    InferCreationAttributes<CategoryBrandModel>
  > {
  id: CreationOptional<number>;

  brandId: number;
  categoryId: number;
}

const CategoryBrand = sequelize.define<CategoryBrandModel>('category_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

  brandId: {type: DataTypes.INTEGER},
  categoryId: {type: DataTypes.INTEGER},
});

Category.belongsToMany(Brand, {through: CategoryBrand});
Brand.belongsToMany(Category, {through: CategoryBrand});

export default CategoryBrand;
