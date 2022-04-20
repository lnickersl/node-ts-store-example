import {NextFunction, Request, RequestHandler, Response} from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {ApiError} from '../errors/ApiError';
import {User} from '../models/User';
import {Cart} from '../models/Cart';
import {EUserRole} from '../enums/EUserRole';
export interface IUserRequest extends Request {
  user?: any;
}

function generateJwt(id: number, email: string, role: EUserRole) {
  return jwt.sign(
    {
      id,
      email,
      role,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: '24h',
    }
  );
}

class UserController {
  public async registration(
    req: IUserRequest,
    res: Response,
    next: NextFunction
  ) {
    const {email, password, role, name = ''} = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Не указаны почта и/или пароль'));
    }

    const foundUser = await User.findOne({where: {email}});

    if (foundUser) {
      return next(
        ApiError.badRequest('Пользователь с такой почтой уже существует')
      );
    }

    const hashPassword = await bcrypt.hash(password, 4);

    const newUser = await User.create({
      email,
      role,
      password: hashPassword,
      name,
    });

    const userCart = Cart.create({userId: newUser.id});

    const token = generateJwt(newUser.id, email, role);

    return res.json({token});
  }

  public login: RequestHandler = async (req, res, next) => {
    const {email, password} = req.body;

    const user = await User.findOne({where: {email}});

    if (!user) {
      return next(
        ApiError.badRequest('Пользователя с таким email не существует')
      );
    }

    const isSame = bcrypt.compareSync(password, user.password);

    if (!isSame) {
      return next(ApiError.badRequest('Неверный пароль'));
    }

    const token = generateJwt(user.id, user.email, user.role);

    return res.json({token});
  };

  public async auth(req: IUserRequest, res: Response) {
    const {id, email, role} = req.user;

    const token = generateJwt(id, email, role);

    return res.json({token});
  }
}

export default new UserController();
