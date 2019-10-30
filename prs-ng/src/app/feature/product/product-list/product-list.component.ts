import { Component, OnInit } from '@angular/core';
import { ProductService } from '@svc/product.service';
import { Products } from '@model/products.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'List of Products';
  productsList: Products[];   //product changed to products
  sortCriteria = 'name';
  sortOrder = 'asc';

  constructor(private prodSvc: ProductService) { }

  ngOnInit() {
    this.prodSvc.list().subscribe(resp => {
      this.productsList = resp as Products[];
      console.log(this.productsList);
    });
  }

  sortBy(column: string): void {
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortCriteria = column;
      this.sortOrder = 'asc';
    }
  }
}
