import {RequestHandler} from 'express';
import {ApiError} from '../errors/ApiError';
import Category from '../models/Category';

class CategoryController {
  public create: RequestHandler = async (req, res, next) => {
    const {name} = req.body;

    if (!name) {
      return next(ApiError.badRequest('Не указано имя категории'));
    }

    const category = await Category.create({name});
    return res.json(category);
  };

  public getAll: RequestHandler = async (req, res) => {
    const categories = await Category.findAll();

    return res.json(categories);
  };

  public delete: RequestHandler = async (req, res, next) => {
    const {name} = req.body;

    if (!name) {
      return next(ApiError.badRequest('Не указано имя категории'));
    }

    const result = await Category.destroy({where: {name}});

    return res.json(result);
  };
}

export default new CategoryController();
