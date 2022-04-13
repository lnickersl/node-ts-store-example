import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import Product from './Product';

interface BrandModel
  extends Model<
    InferAttributes<BrandModel>,
    InferCreationAttributes<BrandModel>
  > {
  id: CreationOptional<number>;
  name: string;
}

const Brand = sequelize.define<BrandModel>('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

Brand.hasMany(Product);

export default Brand;
