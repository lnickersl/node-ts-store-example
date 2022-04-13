import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import {EUserRole} from '../enums/EUserRole';
import Basket from './Basket';
import Purchase from './Purchase';
import Rating from './Rating';

interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: CreationOptional<number>;
  name: string;
  email: string;
  password: string;
  role: string;
}

const User = sequelize.define<UserModel>('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, validate: {isEmail: true}},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: EUserRole.USER},
  name: {type: DataTypes.STRING},
});

User.hasOne(Basket);
User.hasMany(Purchase);
User.hasMany(Rating);

export default User;
