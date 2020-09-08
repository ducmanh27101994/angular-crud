import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [
    {
      id: 0,
      name: 'Iphone',
      price: 200,
      color: 'Red',
      desc: 'Secondhand',
      category_id: 1
    },
    {
      id: 1,
      name: 'Samsung',
      price: 150,
      color: 'Blue',
      desc: 'Secondhand',
      category_id: 2
    },
    {
      id: 2,
      name: 'Oppo',
      price: 100,
      color: 'Green',
      desc: 'New Product',
      category_id: 3
    },
    {
      id: 3,
      name: 'Iphone X',
      price: 300,
      color: 'Black',
      desc: 'Secondhand',
      category_id: 2
    },
    {
      id: 4,
      name: 'V Smart',
      price: 400,
      color: 'Yellow',
      desc: 'New Product',
      category_id: 3
    },
    {
      id: 5,
      name: 'Iphone',
      price: 200,
      color: 'Red',
      desc: 'Secondhand',
      category_id: 1
    },
    {
      id: 6,
      name: 'Samsung Galaxy Note 10',
      price: 600,
      color: 'White',
      desc: 'New Product',
      category_id: 2
    }
  ];

  constructor() {
  }

  getAll(): IProduct[] {
    return this.products;
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id) {
    const index = this.products.findIndex(products => products.id === id);
    this.products.splice(index, 1);
  }

  // tslint:disable-next-line:typedef
  addProduct(product: IProduct) {
    this.products.push(product);
  }

  getProductById(id: number): IProduct {
    const index = this.products.findIndex(products => products.id === id);
    return this.products[index];
  }

  updateProduct(product, id){
    const index = this.products.findIndex(products => products.id === id);
    this.products.splice(index, 1, product);
  }


}
