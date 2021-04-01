import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductsService } from 'src/app/services/products.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  @Input() item: any = {};
  @Input() myProduct!: any;

  constructor(
    private service: ProductsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ProductDialogComponent, {
      data: this.item
    }).afterClosed().subscribe(ret => {
      if(ret) {
        this.service.put(ret).subscribe(() => this.service.openSnackBar('Enviado...'))
      }
    })
  }

  delete() {
    if (this.item && 'id' in this.item) {
      this.dialog.open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe(ret => {
        if (ret)
          this.service.delete(this.item.id).subscribe(() => this.service.openSnackBar('Deletado'))
      })
    }
  }
}
