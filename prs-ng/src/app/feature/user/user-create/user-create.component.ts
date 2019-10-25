import { Users } from './../../../model/users.class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { SystemService } from '@svc/system.service';

@Component( {
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: [ './user-create.component.css' ]
} )

export class UserCreateComponent implements OnInit
{
  user: Users = new Users();
  title: string = 'Create User';
  loggedInUser: Users;

  constructor ( private userSvc: UserService,
    private systemSvc: SystemService,
    private router: Router )
  {    //  injects property into component (then we need to forward it )

  }

  ngOnInit ()
  {
    // this.loggedInUser = this.systemSvc.data.getLoggedInUser();
    this.loggedInUser = this.systemSvc.getLoggedInUser();
    console.log( 'user: ', this.loggedInUser );
  }

  create ()
  {
    this.userSvc.create( this.user ).subscribe( resp =>
    {   //   this is all we need to save user
      //  success
      console.log( 'User ' + this.user.firstname + ' ' + this.user.lastname + ' added' );
      /*  console.log('1');
       console.log(resp); */
      this.router.navigateByUrl( '/users/list' );   // needs injected into constructor

    },
      err =>
      {
        //  error
        // console.log('2');
        console.log( err );
      }
    );
  }
}
