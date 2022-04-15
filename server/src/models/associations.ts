import Basket from './Basket';
import BasketItem from './BasketItem';
import Brand from './Brand';
import Category from './Category';
import CategoryBrand from './CategoryBrand';
import Product from './Product';
import ProductInfo from './ProductInfo';
import Purchase from './Purchase';
import PurchaseItem from './PurchaseItem';
import Rating from './Rating';
import User from './User';

export default function associate() {
  Brand.hasMany(Product, {as: 'products'});
  Product.belongsTo(Brand);

  Category.hasMany(Product, {as: 'products'});
  Product.belongsTo(Category);

  Category.belongsToMany(Brand, {through: CategoryBrand});
  Brand.belongsToMany(Category, {through: CategoryBrand});

  Product.hasMany(ProductInfo, {as: 'info'});
  ProductInfo.belongsTo(Product);

  Product.hasMany(Rating, {as: 'ratings'});
  Rating.belongsTo(Product);

  Product.hasMany(BasketItem);
  BasketItem.belongsTo(Product, {as: 'product'});

  Product.hasMany(PurchaseItem);
  PurchaseItem.belongsTo(Product, {as: 'product'});

  Purchase.hasMany(PurchaseItem, {as: 'items'});
  PurchaseItem.belongsTo(Purchase);

  User.hasOne(Basket, {foreignKey: 'userId', as: 'basket'});
  Basket.belongsTo(User, {foreignKey: 'userId', as: 'basket'});

  User.hasMany(Purchase, {as: 'purchases'});
  Purchase.belongsTo(User);

  User.hasMany(Rating, {as: 'ratings'});
  Rating.belongsTo(User);

  Basket.hasMany(BasketItem, {as: 'items'});
  BasketItem.belongsTo(Basket);
}
