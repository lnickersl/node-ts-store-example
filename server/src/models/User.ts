import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';
import {EUserRole} from '../enums/EUserRole';

export interface UserModel
  extends Model<
    InferAttributes<UserModel>,
    InferCreationAttributes<UserModel>
  > {
  id: CreationOptional<number>;
  name: string;
  email: string;
  password: string;
  role: EUserRole;
}

const User = sequelize.define<UserModel>('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true, validate: {isEmail: true}},
  password: {type: DataTypes.STRING},
  role: {type: DataTypes.STRING, defaultValue: EUserRole.User},
  name: {type: DataTypes.STRING},
});

export default User;
