import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

interface CartItemModel
  extends Model<
    InferAttributes<CartItemModel>,
    InferCreationAttributes<CartItemModel>
  > {
  id: CreationOptional<number>;
  amount: number;

  productId: number;
  cartId: number;
}

const CartItem = sequelize.define<CartItemModel>('cart_item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  amount: {type: DataTypes.INTEGER, defaultValue: 1},

  productId: {type: DataTypes.INTEGER},
  cartId: {type: DataTypes.INTEGER},
});

export default CartItem;
