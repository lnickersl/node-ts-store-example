import {NextFunction, Response} from 'express';
import {IUserRequest} from '../controllers/userController';
import {EUserRole} from '../enums/EUserRole';

export default function authMiddleware(role?: EUserRole) {
  return function (req: IUserRequest, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      return next();
    }

    if (!req.user) {
      let message = 'Пользователь не авторизован';

      if (req.jwtError) message = req.jwtError;

      return res.status(401).json({message});
    }

    if (role && req.user.role !== role) {
      return res.status(403).json({message: 'Недостаточно прав'});
    }

    next();
  };
}
