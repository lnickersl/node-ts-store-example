import {RequestHandler} from 'express';
import {ApiError} from '../errors/ApiError';
import {Brand} from '../models/Brand';
import {Category} from '../models/Category';

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

  public getOne: RequestHandler = async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }

    const category = await Category.findOne({where: {id}, include: Brand});

    res.json(category);
  };

  public delete: RequestHandler = async (req, res, next) => {
    const {id} = req.body;

    if (id === undefined) {
      return next(ApiError.badRequest('Не указан ID категории'));
    }

    const result = await Category.destroy({where: {id}});

    return res.json(result);
  };
}

export default new CategoryController();
