import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

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

export default Purchase;
