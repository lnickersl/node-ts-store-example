import {
  AllowNull,
  Column,
  DataType,
  Default,
  HasOne,
  IsEmail,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import {EUserRole} from '../enums/EUserRole';
import {Cart} from './Cart';

@Table
export class User extends Model {
  @IsEmail
  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  public email!: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password!: string;

  @Default(EUserRole.User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public role!: EUserRole;

  @Column(DataType.STRING)
  public name!: string;

  @HasOne(() => Cart)
  public cart!: Cart;
}
