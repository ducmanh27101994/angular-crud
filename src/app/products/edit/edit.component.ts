import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  categorys = [];

  id = +this.route.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private listCategory: CategoryService,
              private listProduct: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categorys = this.listCategory.getAll();
    const product = this.listProduct.getProductById(this.id);
    this.editForm = this.fb.group({
      name: [product.name, [Validators.required]],
      price: [product.price, [Validators.required]],
      color: [product.color, [Validators.required]],
      desc: [product.desc, [Validators.required]],
      category_id: [product.category_id, [Validators.required]]
    });
  }

  // tslint:disable-next-line:typedef
  submitEdit() {
    console.log(this.editForm.value);
    this.listProduct.updateProduct(this.editForm.value, this.id);
    this.router.navigate(['']);
  }

  get name() {
    return this.editForm.get('name');
  }

  get price() {
    return this.editForm.get('price');
  }

  get color() {
    return this.editForm.get('color');
  }

  get desc() {
    return this.editForm.get('desc');
  }
}
