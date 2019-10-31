import { Users } from './../../../model/users.class';
import { RequestLineItemService } from '../../../service/requestLineItem.service';
import { RequestLineItems } from '../../../model/requestLineItems.class';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Requests } from '../../../model/requests.class';
import { RequestService } from '../../../service/request.service';
import { SystemService } from '@svc/system.service';

@Component( {
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: [ './request-approve.component.css' ]
} )

export class RequestApproveComponent implements OnInit
{
  title: string = 'Approve Requests';
  id: number;
  request: Requests;
  resp: any;
  requestLineItems: RequestLineItems[];
  lineId: string = '0';
  rejectionReason: string = '';
  loggedInUser: Users;

  constructor ( private requestSvc: RequestService,
    private requestLineItemService: RequestLineItemService,
    private systemSvc: SystemService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit ()
  {
    // this.loggedInUser = this.systemSvc.data.getLoggedInUser();
    // this.loggedInUser = this.systemSvc.getLoggedInUser();
    this.loggedInUser = this.systemSvc.data.user.instance;
    console.log( "user: ", this.loggedInUser );
    this.route.params.subscribe( parms => this.id = parms[ 'id' ] );
    this.requestSvc.get( this.id ).subscribe( requests =>
    {
      this.request = requests;
    }
    );

    if ( this.lineId != '0' && this.lineId != null )
    {
      this.delete();
    }
    this.request;
    this.requestLineItemService.listById( this.id ).subscribe( resp =>
    {
      this.requestLineItems = resp;
    }
    );
  }
  delete (): void
  {
    this.requestLineItemService.delete( this.request.id ).subscribe( res =>
    {
      this.router.navigateByUrl( "/request/review/" + this.id );
    } );
  }

  renew (): void
  {
    this.requestSvc.get( this.request.id ).subscribe( resp =>
    {
      this.request = resp;
    } );


    /*
  ngOnInit ()
{
  let id = this.route.snapshot.params.id
  this.requestSvc.get( id ).subscribe( resp =>
  {
    this.request = resp as Requests;
    this.requestId = this.request.id;
    console.log( 'request detail' + this.requestId );

  }
   ); 

  this.requestSvc.get( this.requestId ).subscribe( resp =>
  {
    this.resp = resp;
  } ); */

  }
  approve ()
  {
    this.requestSvc.approve( this.request ).subscribe(
      resp =>
      {
        this.resp = resp;
        this.router.navigateByUrl( '/request/review' );
      } )
  }

  reject ()
  {
    this.requestSvc.reject( this.request.id ).subscribe(
      resp =>
      {
        this.resp = resp;
        this.router.navigateByUrl( '/request/review' );
      } );
  }
}
