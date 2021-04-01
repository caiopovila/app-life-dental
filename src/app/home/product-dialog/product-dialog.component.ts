import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.css']
})
export class ProductDialogComponent implements OnInit {

  product: any = {};
  categories: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public productData: any,
    private service: CategoriesService
  ) { }

  ngOnInit(): void {
    if (this.productData)
      this.product = this.productData;

    setTimeout(() => {
      this.getCategories();
    })
  }

  getCategories() {
    this.service.get().subscribe(ret => {
      this.categories = ret;
    })
  }
}
