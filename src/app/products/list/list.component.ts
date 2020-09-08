import {Component, OnInit} from '@angular/core';
import {IProduct} from '../../iproduct';
import {ProductService} from '../../product.service';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products = [];
  categorys = [];
  productFilter = [];
  constructor(private listProduct: ProductService,
              private listCategory: CategoryService) {
  }

  ngOnInit(): void {
    this.products = this.listProduct.getAll();
    this.categorys = this.listCategory.getAll();
  }

  search(event) {
    const keyword = event.target.value.toLowerCase();
    console.log(keyword);
    this.products = (keyword) ? this.filterProduct(keyword) : this.listProduct.getAll();
  }
  filterProduct(keyword) {
    return this.listProduct.getAll().filter(product => {
      return product.name.toLowerCase().indexOf(keyword) !== -1;
    });
  }
  // tslint:disable-next-line:typedef
  deleteProduct(id) {
    if (confirm('Are you sure!')) {
      this.listProduct.deleteProduct(id);
    }
  }

}
