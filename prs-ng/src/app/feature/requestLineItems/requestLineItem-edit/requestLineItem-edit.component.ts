import { ProductService } from './../../../service/product.service';
import { RequestLineItems } from './../../../model/requestLineItems.class';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Requests } from '../../../model/requests.class';
import { RequestLineItemService } from '../../../service/requestLineItem.service';
import { Vendors } from '@model/vendors.class';
import { Products } from '@model/products.class';
import { RequestService } from '@svc/request.service';
import { SystemService } from '@svc/system.service';


@Component( {
  selector: 'app-request-edit',
  templateUrl: './requestLineItem-edit.component.html',
  styleUrls: [ './requestLineItem-edit.component.css' ]
} )

export class RequestLineItemEditComponent implements OnInit
{
  title: 'Edit Line Item';
  id: number;
  resp: any;
  request: RequestLineItems;
  vendor: Vendors = new Vendors();
  product: Products = new Products();
  req: Requests;
  reqline: RequestLineItems = new RequestLineItems();
  products: Products[] = [ this.product ]


  constructor ( private reqSvc: RequestService,                             //  injects property into component (then we need to forward it )
    private reqlineSvc: RequestLineItemService,
    private route: ActivatedRoute,
    private productSvc: ProductService,
    private systemSvc: SystemService,
    private router: Router ) { }

  // need to get id request from request, get the associated request record
  // ngOnInit is the first thing on page called
  // One of PARAMETER accepts id from JSON.
  //  Requests is plural due to table in db named with plural
  // because asynchronous, nesting them forces get(parms.id) to run first
  ngOnInit ()
  {
    this.route.params.subscribe( parms =>
    {
      this.reqlineSvc.get( parms.id ).subscribe( resp =>
      {
        this.reqline = resp as RequestLineItems;
        console.log( 'request edit' + this.request.id );
      } )
    } );
    this.productSvc.list().subscribe( presp =>
    {
      this.products = presp as Products[];
    } );
  }

  //   this is all we need to save request
  edit ()
  {
    this.reqline.product = null;
    // this.reqline.requestId = this.reqline.request.id;
    this.reqline.request = null;
    console.log( this.reqline );
    this.reqlineSvc.edit( this.reqline.id, this.reqline ).subscribe( resp =>
    {
      //  success
      console.log( resp );
      this.router.navigateByUrl( '/request/list' );   // needs injected into constructor
    },
      err =>
      {
        //  error
        console.log( err );
      }
    );
  }

}
