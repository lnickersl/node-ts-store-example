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

Brand.hasMany(Product);
Product.belongsTo(Brand);

Category.hasMany(Product);
Product.belongsTo(Category);

Category.belongsToMany(Brand, {through: CategoryBrand});
Brand.belongsToMany(Category, {through: CategoryBrand});

Product.hasMany(ProductInfo, {as: 'info'});
ProductInfo.belongsTo(Product);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketItem);
BasketItem.belongsTo(Product);

Product.hasMany(PurchaseItem);
PurchaseItem.belongsTo(Product);

Purchase.hasMany(PurchaseItem);
PurchaseItem.belongsTo(Purchase);

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Purchase);
Purchase.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketItem);
BasketItem.belongsTo(Basket);
