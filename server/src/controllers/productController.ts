import {RequestHandler} from 'express';

class ProductController {
  public create: RequestHandler = async (req, res) => {};

  public getAll: RequestHandler = async (req, res) => {};

  public getOne: RequestHandler = async (req, res) => {};
}

export default new ProductController();
