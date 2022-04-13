import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';
import sequelize from '../db';

interface RatingModel
  extends Model<
    InferAttributes<RatingModel>,
    InferCreationAttributes<RatingModel>
  > {
  id: CreationOptional<number>;

  productId: number;
  userId: number;
}

const Rating = sequelize.define<RatingModel>('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},

  productId: {type: DataTypes.INTEGER},
  userId: {type: DataTypes.INTEGER},
});

export default Rating;
