import {makeAutoObservable} from 'mobx';
import {IProduct} from '../types/IProduct';
import {IBrand} from '../types/IBrand';
import {ICategory} from '../types/ICategory';

export type TUser = {};

export default class ProductStore {
  public _categories: ICategory[] = [
    {id: 0, name: 'Холодильники'},
    {id: 1, name: 'Утюги'},
    {id: 2, name: 'Канцелярские товары'},
    {id: 3, name: 'Ножи'},
    {id: 4, name: 'Телефоны'},
    {id: 5, name: 'Тяги'},
  ];

  public _brands: IBrand[] = [
    {id: 0, name: 'Samsung'},
    {id: 1, name: 'Apple'},
    {id: 2, name: 'LG'},
    {id: 3, name: 'Xiaomi'},
    {id: 4, name: 'Тюменская фабрика "Работница"'},
    {id: 5, name: 'Logitech'},
    {id: 6, name: 'Bosch'},
    {id: 7, name: 'Indesit'},
    {id: 8, name: 'BIC'},
    {id: 9, name: 'Philips'},
  ];

  public _products: IProduct[] = [
    {
      id: 0,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 1.2111,
    },
    {
      id: 1,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 1.23231,
    },
    {
      id: 2,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 5.042156,
    },
    {
      id: 3,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 3.67,
    },
    {
      id: 4,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 2,
    },
    {
      id: 5,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 2.2222,
    },
    {
      id: 6,
      name: 'Samsung X11R590',
      img: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/2f9eba33ac847b71d34c7627ce668af3/cab1ed89be567118a019bdef198ef818e21b8c583b3a55ee7584337c1ae80e65.jpg.webp',
      price: 19300,
      brandId: 0,
      categoryId: 4,
      rating: 4.9964,
    },
  ];

  private _selectedCategory: ICategory | undefined;
  private _selectedBrand: IBrand | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  public setCategories(categories: ICategory[]) {
    this._categories = categories;
  }

  public setBrands(brands: IBrand[]) {
    this._brands = brands;
  }

  public setDevices(products: IProduct[]) {
    this._products = products;
  }

  public selectCategory(category: ICategory) {
    this._selectedCategory = category;
  }

  public selectBrand(brand: IBrand) {
    this._selectedBrand = brand;
  }

  public get categories() {
    return this._categories;
  }

  public get brands() {
    return this._brands;
  }

  public get products() {
    return this._products;
  }

  public get selectedCategory() {
    return this._selectedCategory;
  }

  public get selectedBrand() {
    return this._selectedBrand;
  }
}
