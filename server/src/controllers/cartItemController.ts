import {NextFunction, RequestHandler, Response} from 'express';
import sequelize from '../db';
import {ApiError} from '../errors/ApiError';
import {Cart} from '../models/Cart';
import {CartItem} from '../models/CartItem';
import {IUserRequest} from './userController';

class CartItemController {
  public async create(req: IUserRequest, res: Response, next: NextFunction) {
    const userId = req.user.id!;
    const {productId} = req.body;

    if (isNaN(productId)) {
      return next(ApiError.badRequest('Неверный productId'));
    }

    const cart = await Cart.findOne({
      where: {userId},
    });

    if (!cart) {
      return next(ApiError.badRequest('Корзина не найдена'));
    }

    const cartItem = await CartItem.create({
      productId,
      cartId: cart.id,
    });

    return res.json(cartItem);
  }

  public async getAll(req: IUserRequest, res: Response, next: NextFunction) {
    const userId = req.user.id!;

    const cart = await Cart.findOne({
      where: {userId},
    });

    if (!cart) {
      return next(ApiError.badRequest('Корзина не найдена'));
    }

    const carts = await CartItem.findAll({
      where: {cartId: cart.id},
      group: ['productId'],
      attributes: ['productId', [sequelize.fn('COUNT', 'productId'), 'amount']],
    });

    return res.json(carts);
  }

  public async delete(req: IUserRequest, res: Response, next: NextFunction) {
    const userId = req.user.id!;
    const {productId} = req.body;

    if (isNaN(productId)) {
      return next(ApiError.badRequest('Неверный productId'));
    }

    const cart = await Cart.findOne({
      where: {userId},
    });

    if (!cart) {
      return next(ApiError.badRequest('Корзина не найдена'));
    }

    const deleted = await CartItem.destroy({
      where: {
        productId,
        cartId: cart.id,
      },
      limit: 1,
    });

    return res.json(deleted);
  }
}

export default new CartItemController();
