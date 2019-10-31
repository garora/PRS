import { RequestLineItems } from './../../../model/requestLineItems.class';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Requests } from '../../../model/requests.class';
import { RequestLineItemService } from '../../../service/requestLineItem.service';


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

  constructor ( private requestLineItemEditSvc: RequestLineItemService,
    private router: Router,
    private route: ActivatedRoute ) { }

  // need to get id request from request, get the associated request record
  // ngOnInit is the first thing on page called
  // One of PARAMETER accepts id from JSON.
  //  Requests is plural due to table in db named with plural
  // because asynchronous, nesting them forces get(parms.id) to run first
  ngOnInit ()
  {
    this.route.params.subscribe( parms =>
    {
      this.requestLineItemEditSvc.get( parms.id ).subscribe( resp =>
      {
        this.request = resp as RequestLineItems;
        console.log( 'request edit' + this.request.id );
      } )
    } );
  }

  //   this is all we need to save request
  edit ()
  {
    this.requestLineItemEditSvc.edit( this.request ).subscribe( resp =>
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
