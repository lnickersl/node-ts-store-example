import {makeAutoObservable} from 'mobx';
import {IProduct} from '../types/IProduct';
import {IBrand} from '../types/IBrand';
import {ICategory} from '../types/ICategory';

export type TUser = {};

export default class ProductStore {
  public _categories: ICategory[] = [];

  public _brands: IBrand[] = [];

  public _products: IProduct[] = [];

  private _selectedCategory: ICategory | null = null;
  private _selectedBrand: IBrand | null = null;

  private _page = 1;
  private _totalCount = 0;
  private _limit = 2;

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

  public setPage(page: number) {
    this._page = page;
  }

  public setTotalCount(totalCount: number) {
    this._totalCount = totalCount;
  }

  public setLimit(limit: number) {
    this._limit = limit;
  }

  public selectCategory(category: ICategory | null) {
    this._selectedCategory = category;
  }

  public selectBrand(brand: IBrand | null) {
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

  public get page() {
    return this._page;
  }

  public get totalCount() {
    return this._totalCount;
  }

  public get limit() {
    return this._limit;
  }

  public get selectedCategory() {
    return this._selectedCategory;
  }

  public get selectedBrand() {
    return this._selectedBrand;
  }
}
