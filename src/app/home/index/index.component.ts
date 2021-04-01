import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  results: Array<any> = [];
  totalResults: number = 0;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  params: any = {};

  constructor(
    private serviceItems: ProductsService,
  ) {
    this.params.offset = 0;
    this.params.limit = 10;
  }

  ngOnInit(): void {
  }

  searchProduct(q: string): void {
    if (q) {
      let param = new HttpParams({ fromObject: this.params });

      this.serviceItems.search(q, param)
      .subscribe((ret: any) => {
        this.totalResults = ret.length;
        if (ret.length > 0)
          this.results = ret;
        else {
          this.results = [];
          this.serviceItems.openSnackBar('Nada encontrado', 'Erro');
        }
      })
    } else {
        this.results = [];
    }
  }
}
