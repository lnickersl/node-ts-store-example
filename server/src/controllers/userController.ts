import {RequestHandler} from 'express';

class UserController {
  public registration: RequestHandler = async (req, res) => {};

  public login: RequestHandler = async (req, res) => {};

  public auth: RequestHandler = async (req, res) => {
    const query = req.query;
    res.json(query);
  };
}

export default new UserController();
