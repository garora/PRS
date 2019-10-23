import { Requests } from './../../../model/requests.class';
import { RequestLineItems } from '@model/requestLineItems.class';
import { Products } from '@model/products.class';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../../../service/request.service';
import { SystemService } from '../../../service/system.service';
import { ProductService } from '@svc/product.service';
import { RequestLineItemService } from '@svc/requestLineItem.service';


@Component( {
  selector: 'app-request-create',
  templateUrl: './requestLineItem-create.component.html',
  styleUrls: [ './requestLineItem-create.component.css' ]
} )
export class RequestLineItemCreateComponent implements OnInit
{
  reqLineItem: RequestLineItems = new RequestLineItems();
  title: 'Create Request Line Item';
  productid: Products[ "id" ];
  product: Products;
  products: Products[];
  requestId: number;
  request: Requests;
  resp: any;

  constructor ( private requestSvc: RequestService,
    private reqLineItemSvc: RequestLineItemService,
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private systemSvc: SystemService,
    private router: Router )
  {    //  injects property into component (then we need to forward it )
  }

  ngOnInit ()
  {
    this.route.params.subscribe( parms =>
    {
      this.requestId = parms[ "id" ];
      this.requestSvc.get( this.requestId ).subscribe( requests =>
      {
        this.request = Request.length > 0 ? requests[ 0 ] : null;
      } );
    } );
    this.productSvc.list().subscribe( products =>
    {
      this.products = products;
    }
    );
  }

  compareFn ( { u1, u2 }: { u1: Products; u2: Products; } )
  {
    return u1 && u2 ? u1.id == u2.id : u1 == u2;
  }

  create ()
  {
    this.reqLineItem.requestId = this.requestId;
    this.reqLineItem.requestId = this.product.id;
    this.reqLineItemSvc.create( this.reqLineItem ).subscribe( resp =>
    {
      console.log( 'Request Line Item Added' );
      this.resp = resp;
      this.router.navigateByUrl( '/requests/list' );
    } );
  }
}

// ngOnInit() {
  //     if(this.systemSvc.data.user.loggedIn) {
  //       this.request.user = this.systemSvc.data.user.instance;
  //     } else {
  //       console.error("Please log in.");
  //     }

  // }
  // create() {                                      //   this is all we need to save request
  //   this.requestSvc.create(this.request).subscribe( resp => {
  //     //  success
  //     console.log(resp);
  //     // console.log('1');
  //     this.router.navigateByUrl('/request-create"/list');   // needs injected into constructor

  //   },
  //   err => {
  //     //  error
  //     console.log(err);
  //      // console.log('2');
  //   }
  //   );
  // }
// }