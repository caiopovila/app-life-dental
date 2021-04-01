import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  results: any = [];

  constructor(
    private service: ProductsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.service.get().subscribe(ret => this.results = ret)
    })
  }

  openDialog() {
    this.dialog.open(ProductDialogComponent)
    .afterClosed().subscribe(ret => {
      if (ret) 
        this.service.post(ret).subscribe(() => this.service.openSnackBar('Enviado...'))
    })
  }
}
