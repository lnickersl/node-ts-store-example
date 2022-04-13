import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

interface ProductInfoModel
  extends Model<
    InferAttributes<ProductInfoModel>,
    InferCreationAttributes<ProductInfoModel>
  > {
  id: CreationOptional<number>;
  title: string;
  description: string;

  productId: number;
}

const ProductInfo = sequelize.define<ProductInfoModel>('product_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},

  productId: {type: DataTypes.INTEGER},
});

export default ProductInfo;
