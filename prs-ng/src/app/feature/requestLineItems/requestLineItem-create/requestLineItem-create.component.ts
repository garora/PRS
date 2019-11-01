import { Vendors } from './../../../model/vendors.class';
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
  selector: 'app-requestLineItem-create',
  templateUrl: './requestLineItem-create.component.html',
  styleUrls: [ './requestLineItem-create.component.css' ]
} )

export class RequestLineItemCreateComponent implements OnInit
{
  title: 'Create Line Item';
  reqId: number;
  vendor: Vendors = new Vendors();

  product: Products = new Products();
  // product: Products = new Products( 0, '', 'Loading...', 0, '', '', 0, null );
  req: Requests;
  products: Products[] = [ this.product ];
  reqline: RequestLineItems = new RequestLineItems();
  // reqline: RequestLineItems = new RequestLineItems( 0, 0, 0, 1, this.product, null );
  pID: number = 0;
  // productId: Products[ "id" ];
  // product: Products;
  // request: Requests;
  // resp: any;




  constructor ( private reqSvc: RequestService,                             //  injects property into component (then we need to forward it )
    private reqlineSvc: RequestLineItemService,
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private systemSvc: SystemService,
    private router: Router ) { }

  ngOnInit ()
  {
    this.route.params.subscribe( params => this.reqId = params.id );
    this.reqSvc.get( this.reqId ).subscribe( rresp =>
    {
      this.req = rresp as Requests;
    } );
    this.productSvc.list().subscribe( presp =>
    {
      this.products = presp as Products[];
    } );
  }

  create ()
  {
    console.log( this.products )
    console.log( this.req );
    console.log( this.reqline );
    // for ( let i: number = 0; i < this.products.length; i++ )
    // {
    //   if ( this.products[ i ].id == this.pID )
    //   {
    //     this.product = this.products[ i ];
    //   }
    // }
    this.reqline.requestId = this.req.id;
    this.reqline.productId = this.reqline.product.id;

    this.reqline.product = null;
    // this.reqline.requestId = this.reqline.request.id;
    this.reqline.request = null;
    this.reqlineSvc.create( this.reqline ).subscribe( resp =>
    {
      this.reqline = resp as RequestLineItems;
      this.router.navigate( [ '/request/list/' + this.reqId ] );
      // this.router.navigate( [ '/requestline/list/' + this.reqId ] );
    },
      err =>
      {
        console.log( err );
      } );
  }
}





  // ngOnInit ()
  // {
  //   this.route.params.subscribe( parms =>
  //   {
  //     this.reqId = parms[ "Id" ];
  //     this.requestSvc.get( this.reqId ).subscribe( requests =>
  //     {
  //       this.request = Requests.length > 0 ? requests[ 0 ] : null;
  //     } );
  //   } );
  //   this.productSvc.list().subscribe( products =>
  //   {
  //     this.products = products;
  //   }
  //   );
  // }

  // compareFn ( { u1, u2 }: { u1: Products; u2: Products; } )
  // {
  //   return u1 && u2 ? u1.id == u2.id : u1 == u2;
  // }






  // create ()
  // {
  //   this.reqlineItem.requestId = this.reqId;
  //   this.reqlineItem.productId = this.product.id;
  //   this.reqLineItemSvc.create(this.reqlineItem).subscribe(resp =>
  //   {
  //     console.log( 'Request Line Item Added' );
  //     this.resp = resp;
  //     this.router.navigateByUrl( '/request/list' );
  //   } );
  // }
// }



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