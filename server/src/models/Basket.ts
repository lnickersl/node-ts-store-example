import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import BasketItem from './BasketItem';
import User from './User';

interface BasketModel
  extends Model<
    InferAttributes<BasketModel>,
    InferCreationAttributes<BasketModel>
  > {
  id: CreationOptional<number>;

  userId: number;
}

const Basket = sequelize.define<BasketModel>('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

  userId: {type: DataTypes.INTEGER},
});

Basket.hasMany(BasketItem);

Basket.belongsTo(User);

export default Basket;
