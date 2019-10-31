import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../service/user.service';
import { SystemService } from '../../../service/system.service';
import { Users } from '../../../model/users.class';

@Component( {
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: [ './user-login.component.css' ]
} )

export class UserLoginComponent implements OnInit
{
  message: any;
  user: Users = new Users( 0, '', '', '', '', '', '', false, false );
  users: Users[];
  // this.systemsvc.clearLogin();

  constructor ( private userSvc: UserService,
    private systemSvc: SystemService,
    private router: Router ) { }

  ngOnInit ()
  {
    this.userSvc.list().subscribe( resp =>
    {
      this.users = resp;
    } );

  }

  login ()
  {

    this.userSvc.login( this.user.username, this.user.password ).subscribe( resp =>
    {
      var user = resp as Users;
      this.systemSvc.data.user.instance = user;
      this.systemSvc.data.user.loggedIn = true;
      this.router.navigateByUrl( '/user/list' );
    }
      ,
      err =>
      {
        this.message = 'login error - please enter a registered login and password';
      }
    );
    // this.userSvc.login( this.user.username, this.user.password )
    //   .subscribe( resp =>
    //   {
    //     this.user = resp as Users;   // taking authentication of user and applying to user and saves                
    //     this.systemSvc.setLoggedInUser( this.user );
    //     console.log( 'Logged in as ' + this.user.username )
    //     /*  this.systemSvc.data.user.instance = this.user;
    //      this.systemSvc.data.user.loggedIn = true; */
    //     this.router.navigateByUrl( '/user/list' );
    //   },
    //     err =>
    //     {
    //       this.message = 'login error - please enter a registered login and password';
    //     }
    //     );
    // }
  }
}

 // this.user.userName = 'userName';
  // this.user.password = 'password';
  // this.systemSvc.data.setLoggedInUser(this.user);