import {makeAutoObservable} from 'mobx';
import {IUser} from '../types/IUser';
import {EUserRole} from '../enums/EUserRole';

export default class UserStore {
  public _isAuth = true;
  public _user: IUser | null = {
    email: 'world@email.com',

    password: 'BEM',

    role: EUserRole.Admin,

    name: 'MEM',

    cart: {userId: 1, items: []},
    ratings: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  public setIsAuth(isAuth: boolean) {
    this._isAuth = isAuth;
  }

  public setUser(user: IUser) {
    this._user = user;
  }

  public get isAuth() {
    return this._isAuth;
  }

  public get user() {
    return this._user;
  }
}
