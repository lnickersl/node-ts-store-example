import {Sequelize} from 'sequelize-typescript';
import {Brand} from './models/Brand';
import {Cart} from './models/Cart';
import {CartItem} from './models/CartItem';
import {Category} from './models/Category';
import {CategoryBrand} from './models/CategoryBrand';
import {Product} from './models/Product';
import {ProductInfo} from './models/ProductInfo';
import {Purchase} from './models/Purchase';
import {PurchaseItem} from './models/PurchaseItem';
import {Rating} from './models/Rating';
import {User} from './models/User';

const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST!,
    port: +process.env.DB_PORT!,
    models: [
      User,
      Brand,
      Category,
      CategoryBrand,
      Cart,
      CartItem,
      Product,
      Rating,
      ProductInfo,
      Purchase,
      PurchaseItem,
    ],
  }
);

export default sequelize;
