import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import {Brand} from './Brand';
import {CartItem} from './CartItem';
import {Category} from './Category';
import {ProductInfo} from './ProductInfo';
import {PurchaseItem} from './PurchaseItem';
import {Rating} from './Rating';

@Table
export class Product extends Model {
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  public name!: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  public price!: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  public img!: string;

  @ForeignKey(() => Brand)
  public brandId!: number;

  @BelongsTo(() => Brand)
  public brand!: Brand;

  @ForeignKey(() => Category)
  public categoryId!: number;

  @BelongsTo(() => Category)
  public category!: Category;

  @HasMany(() => Rating, {onDelete: 'CASCADE'})
  public ratingz!: Rating[];

  @HasMany(() => CartItem, {onDelete: 'CASCADE'})
  public cartItems!: CartItem[];

  @HasMany(() => ProductInfo, {onDelete: 'CASCADE'})
  public info!: ProductInfo[];

  @HasMany(() => PurchaseItem)
  public purchaseItems!: PurchaseItem[];
}
