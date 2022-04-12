import {RequestHandler} from 'express';
import * as uuid from 'uuid';
import {ApiError} from '../errors/ApiError';
import {Product, ProductInfo} from '../models/models';
import * as fs from 'fs';
import resolveStatic from '../helpers/resolveStatic';
import {stringify} from 'querystring';
import {nextTick} from 'process';
import {Model} from 'sequelize/types';

class ProductController {
  public create: RequestHandler = async (req, res, next) => {
    const {name, price, brandId, categoryId, info} = req.body;
    let img = req?.files?.img;

    img = Array.isArray(img) ? img[0] : img;

    if (!name || !price || !brandId || !categoryId) {
      return next(ApiError.badRequest('Указаны не все параметры'));
    }

    if (!img) {
      return next(ApiError.badRequest('Нет изображения'));
    }

    const fileName = uuid.v4() + '.jpg';

    const filePath = resolveStatic('img', 'products', fileName);

    img?.mv(filePath);

    let product: Model;

    try {
      product = await Product.create({
        name,
        price,
        brandId,
        categoryId,
        img: fileName,
      });
    } catch (error) {
      fs.unlink(filePath, () => {});
      throw error;
    }

    if (info) {
      const infoArray: {description: string; title: string}[] =
        JSON.parse(info);
      infoArray.forEach(info => {
        ProductInfo.create({
          title: info.title,
          description: info.description,
          productId: product.get().id,
        });
      });
    }

    return res.json(product);
  };

  public getAll: RequestHandler = async (req, res) => {
    const {brandId, categoryId, limit, page} = req.query;

    const limitNumber = Number(limit) || 10;
    const pageNumber = Number(page) || 1;

    const offset = (pageNumber - 1) * limitNumber;

    const where: {brandId?: string; categoryId?: string} = {};

    if (brandId) where.brandId = brandId.toString();
    if (categoryId) where.categoryId = categoryId.toString();

    const products = await Product.findAndCountAll({
      where,
      limit: limitNumber,
      offset,
    });

    res.json(products);
  };

  public getOne: RequestHandler = async (req, res, next) => {
    const {id} = req.params;

    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }

    const product = await Product.findOne({
      where: {id},
      include: [{model: ProductInfo, as: 'info'}],
    });

    res.json(product);
  };

  public delete: RequestHandler = async (req, res, next) => {
    const {id} = req.body;

    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }

    const product = await Product.findOne({where: {id}});

    if (product) {
      const imgPath = resolveStatic('img', 'products', product.get().img);

      fs.unlink(imgPath, () => {});
    }

    const result = await Product.destroy({where: {id}});

    return res.json(result);
  };
}

export default new ProductController();
