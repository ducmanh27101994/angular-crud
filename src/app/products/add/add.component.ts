import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../product.service';
import {CategoryService} from '../../services/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  categorys = [];
  constructor(private fb: FormBuilder,
              private listProduct: ProductService,
              private listCategory: CategoryService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.categorys = this.listCategory.getAll();

    this.addForm = this.fb.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      color: ['', [Validators.required]],
      desc: ['', [Validators.required]],
      category_id: ['', [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  submitAdd() {
    this.listProduct.addProduct(this.addForm.value);
    this.route.navigate(['']);
  }
  get name(){
    return this.addForm.get('name');
  }
  get price(){
    return this.addForm.get('price');
  }
  get color(){
    return this.addForm.get('color');
  }
  get desc(){
    return this.addForm.get('desc');
  }
}
