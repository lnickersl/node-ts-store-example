import {NextFunction, Response} from 'express-serve-static-core';
import {ApiError} from '../errors/ApiError';
import {Rating} from '../models/Rating';
import {IUserRequest} from './userController';

class RatingController {
  public async create(req: IUserRequest, res: Response, next: NextFunction) {
    const userId = req.user!.id;
    const {productId, rating} = req.body;

    if (isNaN(rating) || rating < 1 || rating > 5) {
      return next(ApiError.badRequest('Неверная оценка'));
    }

    if (isNaN(productId)) {
      return next(ApiError.badRequest('Неверный productId'));
    }

    let ratingObj = await Rating.findOne({where: {userId, productId}});

    if (ratingObj) {
      return next(ApiError.badRequest('Оценка уже существует'));
    }

    ratingObj = await Rating.create({userId, productId, rating});

    return res.json(ratingObj);
  }
}

export default new RatingController();
