import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import BasketItem from './BasketItem';
import Brand from './Brand';
import Category from './Category';
import ProductInfo from './ProductInfo';
import PurchaseItem from './PurchaseItem';
import Rating from './Rating';

export interface ProductModel
  extends Model<
    InferAttributes<ProductModel>,
    InferCreationAttributes<ProductModel>
  > {
  id: CreationOptional<number>;
  name: string;
  price: number;
  rating: CreationOptional<number>;
  img: string;

  brandId: number;
  categoryId: number;
}

const Product = sequelize.define<ProductModel>('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},

  brandId: {type: DataTypes.INTEGER},
  categoryId: {type: DataTypes.INTEGER},
});

Product.hasMany(ProductInfo, {as: 'info'});
Product.hasMany(Rating);
Product.hasMany(BasketItem);
Product.hasMany(PurchaseItem);

Product.belongsTo(Brand);
Product.belongsTo(Category);

export default Product;
