import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import Product from './Product';
import Purchase from './Purchase';

interface PurchaseItemModel
  extends Model<
    InferAttributes<PurchaseItemModel>,
    InferCreationAttributes<PurchaseItemModel>
  > {
  id: CreationOptional<number>;
  product_price: number;
  product_amount: number;

  productId: number;
  purchaseId: number;
}

const PurchaseItem = sequelize.define<PurchaseItemModel>('purchase_item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  product_price: {type: DataTypes.INTEGER, allowNull: false},
  product_amount: {type: DataTypes.INTEGER, allowNull: false},

  productId: {type: DataTypes.INTEGER},
  purchaseId: {type: DataTypes.INTEGER},
});

PurchaseItem.belongsTo(Product);
PurchaseItem.belongsTo(Purchase);

export default PurchaseItem;
