import {RequestHandler} from 'express';
import {ApiError} from '../errors/ApiError';
import {CategoryBrand} from '../models/CategoryBrand';

class CategoryBrandController {
  public create: RequestHandler = async (req, res, next) => {
    const {categoryId, brandId} = req.body;

    if (categoryId === undefined || brandId === undefined) {
      return next(ApiError.badRequest('Не указан categoryId или brandId'));
    }

    const categoryBrand = await CategoryBrand.create({categoryId, brandId});

    res.json(categoryBrand);
  };
}

export default new CategoryBrandController();
