import {NextFunction, Request, RequestHandler, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {IUserRequest} from '../controllers/userController';

export default function authMiddleware(
  req: IUserRequest,
  res: Response,
  next: NextFunction
) {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req?.headers?.authorization?.split(' ')[1];

    if (!token) throw 'Нет токена';

    const decoded = jwt.verify(token, process.env.SECRET_KEY!);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({message: 'Пользователь не авторизован'});
  }
}

authMiddleware;
