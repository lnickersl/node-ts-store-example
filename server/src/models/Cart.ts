import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

interface CartModel
  extends Model<
    InferAttributes<CartModel>,
    InferCreationAttributes<CartModel>
  > {
  id: CreationOptional<number>;

  userId: number;
}

const Cart = sequelize.define<CartModel>('cart', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

  userId: {type: DataTypes.INTEGER},
});

export default Cart;
