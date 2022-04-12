import {RequestHandler} from 'express';
import {ApiError} from '../errors/ApiError';
import {Brand} from '../models/models';

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

  public delete: RequestHandler = async (req, res, next) => {
    const {name} = req.body;

    if (!name) {
      return next(ApiError.badRequest('Не указано имя брэнда'));
    }

    const result = await Brand.destroy({where: {name}});

    return res.json(result);
  };
}

export default new BrandController();
