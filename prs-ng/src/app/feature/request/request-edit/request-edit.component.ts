import { Users } from '@model/users.class';
import { Component, OnInit } from '@angular/core';
import { RequestService } from '@svc/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Requests } from '@model/requests.class';
import { SystemService } from '@svc/system.service';
import { UserService } from '@svc/user.service';

@Component( {
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: [ './request-edit.component.css' ]
} )

export class RequestEditComponent implements OnInit
{
  title: 'Edit Request';
  id: number;
  request: Requests;
  user: Users[];
  resp: any;
  loggedInUserId: Users[ "id" ];
  loggedInUser: Users;

  constructor ( private requestSvc: RequestService,
    private systemSvc: SystemService,
    private router: Router,
    private userSvc: UserService,
    private route: ActivatedRoute ) { }

  ngOnInit ()
  {                                 // ngOnInit is the first thing on page called
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log( "user: ", this.loggedInUser );
    this.route.params.subscribe( params => this.id = params.id );
    this.requestSvc.get( this.id ).subscribe( resp =>
    {  //need to get id request from request, get the associated request record
      this.request = resp as Requests;
      this.userSvc.list().subscribe( jresp =>
      {    // One of PARAMETER accepts id from JSON.
        this.user = jresp as Users[];   //because asynchronous, nesting them forces get(parms.id) to run first
      } );
    } );
  }

  edit ()
  {                                        //   this is all we need to save request
    this.requestSvc.edit( this.request ).subscribe( resp =>
    {
      this.request = resp as Requests;
      this.router.navigate( [ '/request/list' ] );   // needs injected into constructor
    } );
  }
  compareFn ( v1: number, v2: number ): boolean
  {
    return v1 === v2;
  }
}


// ngOnInit() {
//   if(this.systemSvc.data.user.loggedIn) {
//     this.request.user = this.systemSvc.data.user.instance;
//   }
//   this.loggedInUser = this.systemSvc.data.getLoggedInUser();
//   console.log("user: ", this.loggedInUser); 
//   this.route.params.subscribe(parms => {
//     this.requestSvc.get(parms.id).subscribe(resp => {
//       this.request = resp as Requests;
//       console.log('request edit' + this.request.id);
//     })
//   });
// }
// edit() {
//   this.requestSvc.edit(this.request).subscribe( resp => {   
//     //  success
//     // console.log(resp);
//     this.router.navigateByUrl('/request/list');  
//   },
// err => {
//   //  error
//   console.log(err);
// };
