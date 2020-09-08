import {Injectable} from '@angular/core';
import {ICategory} from '../icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categorys: ICategory[] = [
    {
      id: 1,
      name: 'phone'
    },
    {
      id: 2,
      name: 'laptop'
    },
    {
      id: 3,
      name: 'Other'
    },
  ];

  constructor() {
  }

  getAll(): ICategory[] {
    return this.categorys;
  }
}
