
import { Requests } from '@model/requests.class';
import { Users } from '@model/users.class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../../../service/request.service';
import { SystemService } from '../../../service/system.service';
import { UserService } from '@svc/user.service';
import { ProductService } from '@svc/product.service';
import { Products } from '@model/products.class';


@Component( {
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: [ './request-create.component.css' ]
} )
export class RequestCreateComponent implements OnInit
{
  request: Requests = new Requests();
  title: 'Request-Create ';
  resp: any;
  loggedInUser: Users;
  products: Products[];
  product: Products;

  constructor ( private requestSvc: RequestService,
    private userSvc: UserService,
    private systemSvc: SystemService,
    private productSvc: ProductService,
    private router: Router )
  {    //  injects property into component (then we need to forward it )
  }
  ngOnInit ()
  {
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log( 'user: ', this.loggedInUser );
    this.request.userId = this.loggedInUser.id;

    if ( this.loggedInUser.isAdmin !== true )
    {
      console.log( 'You don’t have administrative authority.' )
    }

  }
  create ()
  {
    this.request.userId=this.loggedInUser.id;
    this.request.user=null;
    this.request.status="New"
    console.log(this.request);

    this.requestSvc.create( this.request ).subscribe( resp =>
    {
      this.request = resp
    } );
    this.router.navigate( [ 'request/list' ] );
    console.log( 'Request added' );
  }
}

  // ngOnInit() {
  //   if(this.systemSvc.data.user.loggedIn) {
  //     this.request.user = this.systemSvc.data.user.instance;
  //   } else {
  //     console.error("Please log in.");
  //   }
  //   // this.loggedInUser = this.systemSvc.data.getLoggedInUser();   
  //   console.log("user: ", this.loggedInUser);
  // };
     //   this is all we need to save request
//   create() {
//     this.requestSvc.create(this.request).subscribe( resp => {
//     this.request = resp.data;     
//       console.log(resp);           //  success
//       this.router.navigateByUrl('/request-create"/list');    // needs injected into constructor
//     },
//     err => {
//      console.log(err);            //  error
//     }
//   );
// }