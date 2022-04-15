import {NextFunction, Request, RequestHandler, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {IUserRequest} from '../controllers/userController';
import {EUserRole} from '../enums/EUserRole';

export default function roleMiddleware(role: EUserRole) {
  return function (req: IUserRequest, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      return next();
    }

    try {
      const token = req?.headers?.authorization?.split(' ')[1];

      if (!token) throw 'Нет токена';

      const decoded = jwt.verify(token, process.env.SECRET_KEY!) as any;

      if (decoded.role !== role) {
        return res.status(403).json({message: 'Недостаточно прав'});
      }

      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({message: 'Пользователь не авторизован'});
    }
  };
}
