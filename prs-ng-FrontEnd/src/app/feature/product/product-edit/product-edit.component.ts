import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../service/product.service';
import { Products } from '../../../model/products.class';
import { VendorService } from '../../../service/vendor.service';
import { Vendors } from '../../../model/vendors.class';
import { SystemService } from '@svc/system.service';
import { Users } from '@model/users.class';

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
  loggedInUser: Users;

  constructor(private prdSvc: ProductService,
              private vndrSvc: VendorService,
              private systemSvc: SystemService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.loggedInUser = this.systemSvc.data.getLoggedInUser();
    console.log('user: ', this.loggedInUser);
      if(this.loggedInUser.isAdmin == true)
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
