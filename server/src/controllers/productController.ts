import {RequestHandler} from 'express';
import * as uuid from 'uuid';
import {ApiError} from '../errors/ApiError';
import * as fs from 'fs';
import resolveStatic from '../helpers/resolveStatic';
import {ProductInfo} from '../models/ProductInfo';
import {Product} from '../models/Product';
import {Rating} from '../models/Rating';
import sequelize from '../db';
import {Category} from '../models/Category';
import {Brand} from '../models/Brand';

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

    let product: Product;

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
      const infoArray: ProductInfo[] = JSON.parse(info);

      infoArray.forEach(info => {
        ProductInfo.create({
          key: info.key,
          value: info.value,
          productId: product.id,
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

    let product;
    try {
      product = await Product.findOne({
        where: {id},
        include: [
          {model: Rating, attributes: []},
          Category,
          Brand,
          ProductInfo,
        ],
        attributes: {
          include: [
            [sequelize.fn('AVG', sequelize.col('ratings.rating')), 'rating'],
          ],
        },
        group: ['Product.id', 'category.id', 'brand.id', 'info.id'],
      }).catch(console.error);
    } catch (err) {
      console.log(err);
    }

    res.json(product);
  };

  public delete: RequestHandler = async (req, res, next) => {
    const {id} = req.body;

    if (!id) {
      return next(ApiError.badRequest('Не указан ID'));
    }

    const product = await Product.findOne({where: {id}});

    if (product) {
      const imgPath = resolveStatic('img', 'products', product.img);

      fs.unlink(imgPath, () => {});
    }

    const result = await Product.destroy({where: {id}});

    return res.json(result);
  };
}

export default new ProductController();
