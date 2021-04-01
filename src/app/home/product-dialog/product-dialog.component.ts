import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  product: FormGroup;
  categories: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public productData: any,
    private service: CategoriesService
  ) {

    this.product = new FormGroup({
      name: new FormControl(this.productData ? this.productData.name : '', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      id_categories: new FormControl(this.productData ? this.productData.name : '', Validators.required),
      price: new FormControl(this.productData ? this.productData.price : '', [
        Validators.required, 
        Validators.min(0.01)
      ]),
      amount: new FormControl(this.productData ? this.productData.amount : '', [
        Validators.required, 
        Validators.min(1)
      ]),
    });

   }

  ngOnInit(): void {
    setTimeout(() => {
      this.getCategories();
    })
  }

  get name() { return this.product.get('name'); }

  get id_categories() { return this.product.get('id_categories'); }

  get price() { return this.product.get('price'); }

  get amount() { return this.product.get('amount'); }

  getCategories() {
    this.service.get().subscribe(ret => {
      this.categories = ret;
    })
  }
}
