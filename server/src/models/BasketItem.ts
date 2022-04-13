import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

interface BasketItemModel
  extends Model<
    InferAttributes<BasketItemModel>,
    InferCreationAttributes<BasketItemModel>
  > {
  id: CreationOptional<number>;
  amount: number;

  productId: number;
  basketId: number;
}

const BasketItem = sequelize.define<BasketItemModel>('basket_item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  amount: {type: DataTypes.INTEGER, defaultValue: 1},

  productId: {type: DataTypes.INTEGER},
  basketId: {type: DataTypes.INTEGER},
});

export default BasketItem;
