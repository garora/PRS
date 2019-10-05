import { RequestLineItemService } from '../../../service/requestLineItem.service';
import { RequestLineItems } from '../../../model/requestLineItems.class';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Requests } from '../../../model/requests.class';
import { RequestService } from '../../../service/request.service';

@Component( {
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: [ './request-approve.component.css' ]
} )
export class RequestApproveComponent implements OnInit
{
  title: string = 'Request:  Approve or Reject';
  requestId: number;
  request: Requests;
  resp: any;
  rl: RequestLineItems[];
  rejectionReason: string = '';

  constructor ( private requestSvc: RequestService,
    private rliSvc: RequestLineItemService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit ()
  {
    let id = this.route.snapshot.params.id
    this.requestSvc.get( id ).subscribe( resp =>
    {
      this.request = resp as Requests;
      this.requestId = this.request.id;
      console.log( 'request detail' + this.requestId );

    } );

    this.requestSvc.get( this.requestId ).subscribe( resp =>
    {
      this.resp = resp;
    } );

  }
  approve ()
  {
    this.requestSvc.approve( this.request ).subscribe(
      resp =>
      {
        this.resp = resp;
        this.router.navigateByUrl('/request/review');
      } )
  }

  reject ()
  {
    this.requestSvc.reject( this.request ).subscribe(
      resp =>
      {
        this.resp = resp;
        this.router.navigateByUrl( '/request/review' );
      } );
  }
}
