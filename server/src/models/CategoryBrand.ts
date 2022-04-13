import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

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

export default CategoryBrand;
