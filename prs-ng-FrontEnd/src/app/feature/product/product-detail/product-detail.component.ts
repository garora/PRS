import { Component, OnInit } from '@angular/core';
import { Products } from '@model/products.class';
import { ProductService } from '@svc/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Products = new Products();
  title: string = 'Product-Detail';
  // NEED TO INJECT THE SERVICE    // ADD ROUTER ?? (WE WILL PROB USE) 
  //(Framework takes care of HTTP REQUEST / TCPIP PROTOCOL)
  constructor(private productSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }  // after deleteing product, reroute back to // activatedroute uses id supplied in body of request

  // ngOnInit is the first thing on page called
  ngOnInit() {     // get the id from requiest (JSON), GET THE ASSOCIATED USER RECORD
    this.route.params.subscribe(parms => {  // One of PARAMETER accepts id from JSON.     
      this.productSvc.get(parms.id).subscribe(resp => {
        this.product = resp as Products;  //  Products is plural due to table in db named with plural
        // because asynchronous, nesting them forces get(parms.id) to run first
        console.log('product detail' + this.product.id);
      })
    });

  }

  // can call del with this.product.id
  remove() {
    this.productSvc.delete(this.product.id).subscribe(resp => {
      alert('Product ' + this.product.name + ' successfully deleted!');
      this.router.navigateByUrl('/product/list');
    },
      err => {
        console.log('error deleting product');
        console.log(err);
      });
  }
}


