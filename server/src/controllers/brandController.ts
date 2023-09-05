import {RequestHandler} from 'express';
import {ApiError} from '../errors/ApiError';
import {Brand} from '../models/Brand';
import {Category} from '../models/Category';

class BrandController {
  public create: RequestHandler = async (req, res, next) => {
    const {name} = req.body;

    if (!name) {
      return next(ApiError.badRequest('Не указано имя брэнда'));
    }

    const brand = await Brand.create({name});

    return res.json(brand);
  };

  public getAll: RequestHandler = async (req, res) => {
    const brands = await Brand.findAll();

    return res.json(brands);
  };

  public getOne: RequestHandler = async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }

    const brand = await Brand.findOne({where: {id}, include: Category});

    return res.json(brand);
  };

  public delete: RequestHandler = async (req, res, next) => {
    const {id} = req.body;

    if (id === undefined) {
      return next(ApiError.badRequest('Не указан ID брэнда'));
    }

    const result = await Brand.destroy({where: {id}});

    return res.json(result);
  };
}

export default new BrandController();
