import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { Users } from '../../../model/users.class';
import { SystemService } from '../../../service/system.service';

@Component( {
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: [ './user-list.component.css' ]
} )

export class UserListComponent implements OnInit
{
  users: Users[];  // property used in component typescript file to store list of users once the service method is called
  sortCriteria = 'username'; // default sort criteria
  sortOrder = 'asc';
  title = 'List of Users';      // adds [List of Users] to white space between NAV & menu bar
  loggedInUser: Users;

  constructor ( private userSvc: UserService,
    private systemSvc: SystemService ) { }  // inject service

  // Finish updating this and user-list.html later with bootstrap stuff  ex:thead-dark-->

  ngOnInit ()
  {
    this.userSvc.list().subscribe( resp =>
    {
      this.users = resp;
      console.log( this.users );
    }
    );
  }


  sortBy ( column: string ): void
  {    // sort by added to nav bar in future
    if ( this.sortCriteria === column )
    {

      this.sortOrder = ( this.sortOrder === 'asc' ? 'desc' : 'asc' );
    } else
    {
      this.sortCriteria = column;   // can change the column that you want to sort by or the order
      this.sortOrder = 'asc';

    }
  }
}

  // ngOnInit() {    // populate list of users
  //   // check systemservice for logged in user
  //   this.loggedInUser = this.systemSvc.user.instance;
  //   console.log('loggedInUser = "+this.loggedInUser.email');
  //   this.userSvc.list().subscribe (
  //     resp => {
  //       this.users = resp;
  //       console.log(this.users);
  // }
  //     );
  //   }
