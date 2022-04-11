import {DataTypes} from 'sequelize';
import sequelize from '../db';
import {EUserRole} from './EUserRole';

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: EUserRole.USER},
  name: {type: DataTypes.STRING},
});

const Basket = sequelize.define('basket', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const BasketItem = sequelize.define('basket_item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Product = sequelize.define('product', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  price: {type: DataTypes.INTEGER, allowNull: false},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
  img: {type: DataTypes.STRING, allowNull: false},
});

const ProductInfo = sequelize.define('product_info', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, allowNull: false},
});

const Category = sequelize.define('category', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const Brand = sequelize.define('brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
});

const CategoryBrand = sequelize.define('category_brand', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataTypes.INTEGER, allowNull: false},
});

const Purchase = sequelize.define('purchase', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  time: {type: DataTypes.INTEGER, allowNull: false},
});

const PurchaseItem = sequelize.define('purchase_item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  product_price: {type: DataTypes.INTEGER, allowNull: false},
  product_amount: {type: DataTypes.INTEGER, allowNull: false},
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Purchase);
Purchase.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);

Product.hasMany(ProductInfo);
ProductInfo.belongsTo(Product);

Product.hasMany(Rating);
Rating.belongsTo(Product);

BasketItem.hasMany(Product);
Product.belongsTo(BasketItem);

Category.hasMany(Product);
Product.belongsTo(Category);

Brand.hasMany(Product);
Product.belongsTo(Brand);

Category.belongsToMany(Brand, {through: CategoryBrand});
Brand.belongsToMany(Category, {through: CategoryBrand});

Purchase.hasMany(PurchaseItem);
PurchaseItem.belongsTo(Purchase);

PurchaseItem.hasOne(Product);
Product.belongsTo(PurchaseItem);

export {
  User,
  Basket,
  BasketItem,
  Product,
  ProductInfo,
  Category,
  Brand,
  CategoryBrand,
  Rating,
  Purchase,
  PurchaseItem,
};
