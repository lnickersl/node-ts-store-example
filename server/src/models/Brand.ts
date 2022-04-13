import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

export interface BrandModel
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

export default Brand;
