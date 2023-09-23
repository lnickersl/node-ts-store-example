import {NextFunction, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {IUserData, IUserRequest} from '../controllers/userController';
import {ApiError} from '../errors/ApiError';

export default function (req: IUserRequest, res: Response, next: NextFunction) {
  try {
    const token = req?.headers?.authorization?.split(' ')[1];

    if (!token) throw Error('Нет токена');

    req.user = jwt.verify(token, process.env.SECRET_KEY!) as IUserData;
  } catch (err) {
    let error = 'Ошибка токена';

    if (err instanceof Error) error = err.message;

    req.jwtError = error;
  }

  next();
}
