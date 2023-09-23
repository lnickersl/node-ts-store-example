import {makeAutoObservable} from 'mobx';
import {IProduct} from '../types/IProduct';
import {IBrand} from '../types/IBrand';
import {ICategory} from '../types/ICategory';

export type TUser = {};

export default class ProductStore {
  public _categories: ICategory[] = [];

  public _brands: IBrand[] = [];

  public _products: IProduct[] = [];

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

  public setProducts(products: IProduct[]) {
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
