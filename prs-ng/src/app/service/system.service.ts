import { Users } from './../model/users.class';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable( {
  providedIn: 'root'
} )

export class SystemService
{
  data = {
    about: 'systemService', user: { loggedIn: false, instance: null }
  }

  constructor () { }

}


// export class SystemService
// {

//   constructor ( private router: Router ) { }

//   private loggedInUser: Users | null = null;

//   setLoggedInUser ( user: Users ): void
//   {
//     this.loggedInUser = user;
//   }

//   getLoggedInUser (): Users | null
//   {
//     return this.loggedInUser;
//   }

//   isUserLoggedIn (): boolean
//   { return this.loggedInUser != null }


//   isAdmin (): boolean
//   {
//     if ( this.isUserLoggedIn() )
//       return false
//     return this.getLoggedInUser().isAdmin;
//   }

//   isReviewer (): boolean
//   {
//     if ( !this.isUserLoggedIn() )
//       return false
//     return this.getLoggedInUser().isReviewer;
//   }

//   data = {
//     about: 'System Service',
//     user: {
//       loggedIn: false,
//       instance: null
//     },
//     setLoggedInUser ( user: Users ): void
//     {
//       this.loggedInUser = user;
//     },

//     getLoggedInUser (): Users | null
//     {
//       return this.loggedInUser;
//     },

//     isUserLoggedIn (): boolean
//     { return this.loggedInUser != null },


//     isAdmin (): boolean
//     {
//       if ( this.isUserLoggedIn() )
//         return false
//       return this.getLoggedInUser().isAdmin;
//     },

//     isReviewer (): boolean
//     {
//       if ( !this.isUserLoggedIn() )
//         return false
//       return this.getLoggedInUser().isReviewer;
//     }
//   }

// }




