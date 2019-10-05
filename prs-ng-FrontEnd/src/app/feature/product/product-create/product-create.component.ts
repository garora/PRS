import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../../../model/products.class';
import { ProductService } from '../../../service/product.service';
import { Vendors } from '../../../model/vendors.class';
import { VendorService } from '../../../service/vendor.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  title = 'Product Create';
  vendor: Vendors = new Vendors(0, '', 'Loading...', '', '', '', '', '',);
  product: Products = new Products(0, '', '', 0, '', '', 0, this.vendor);
  vendorsList: Vendors[] = [this.vendor];

  constructor(private prodSvc: ProductService, private vndrSvc: VendorService, private router: Router) { }

  ngOnInit() {
    this.vndrSvc.list().subscribe(resp => {
      this.vendorsList = resp as Vendors[];
    });
  }

  create() {
    this.product.vendorId = this.product.vendor.id;
    this.product.vendor = null;
    this.prodSvc.create(this.product).subscribe(resp => {
      this.product = resp as Products;
      this.router.navigate(['/product/list']);
    });
  }
}
