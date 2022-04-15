import {NextFunction, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {IUserRequest} from '../controllers/userController';

export default function (req: IUserRequest, res: Response, next: NextFunction) {
  let decodedUser: any;
  try {
    const token = req?.headers?.authorization?.split(' ')[1];

    if (!token) throw 'Нет токена';

    decodedUser = jwt.verify(token, process.env.SECRET_KEY!);
  } catch (err) {
    decodedUser = null;
  }

  req.user = decodedUser;
  next();
}
