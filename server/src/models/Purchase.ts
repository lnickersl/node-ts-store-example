import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import PurchaseItem from './PurchaseItem';
import User from './User';

interface PurchaseModel
  extends Model<
    InferAttributes<PurchaseModel>,
    InferCreationAttributes<PurchaseModel>
  > {
  id: CreationOptional<number>;
  time: number;

  userId: number;
}

const Purchase = sequelize.define<PurchaseModel>('purchase', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  time: {type: DataTypes.INTEGER, allowNull: false},

  userId: {type: DataTypes.INTEGER},
});

Purchase.hasMany(PurchaseItem);

Purchase.belongsTo(User);

export default Purchase;
