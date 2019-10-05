import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Products } from '../../../model/products.class';
import { VendorService } from '../../../service/vendor.service';
import { Vendors } from '../../../model/vendors.class';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  title = 'Product Edit';
  id: number;
  product: Products;
  vendorsList: Vendors[];

  constructor(private prdSvc: ProductService,
              private vndrSvc: VendorService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.id = params.id);
    this.prdSvc.get(this.id).subscribe(resp => {
      this.product = resp as Products;
      this.vndrSvc.list().subscribe(jresp => {
        this.vendorsList = jresp as Vendors[];
      });
    });
  }

  edit() {
    this.product.vendorId = this.product.vendor.id;
    this.product.vendor = null;  // if you don't nullify, the back end will fail
    console.log(this.product);
    this.prdSvc.edit(this.product).subscribe(resp => {
      this.product = resp as Products;
      this.router.navigate(['/product/list']);
    });
  }

  compareFn(v1: number, v2: number): boolean {    //comparing 2 numbers passed on value and type
    return v1 === v2;
  }
}
