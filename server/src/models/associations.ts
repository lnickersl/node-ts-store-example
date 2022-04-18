import Cart from './Cart';
import CartItem from './CartItem';
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

  Product.hasMany(CartItem);
  CartItem.belongsTo(Product);

  Product.hasMany(PurchaseItem);
  PurchaseItem.belongsTo(Product);

  Purchase.hasMany(PurchaseItem, {as: 'items'});
  PurchaseItem.belongsTo(Purchase);

  User.hasOne(Cart, {foreignKey: 'userId'});
  Cart.belongsTo(User, {foreignKey: 'userId'});

  User.hasMany(Purchase, {as: 'purchases'});
  Purchase.belongsTo(User);

  User.hasMany(Rating, {as: 'ratings'});
  Rating.belongsTo(User);

  Cart.hasMany(CartItem, {as: 'items'});
  CartItem.belongsTo(Cart);
}
