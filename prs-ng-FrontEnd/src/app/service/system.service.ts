import { Users } from './../model/users.class';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SystemService {
 
  constructor(private router: Router) { }
 
private loggedInUser: Users | null = null;
 
data = {
  about: 'System Service',
  user: {
    loggedIn: false,
    instance: null
},
setLoggedInUser(user: Users): void {
  this.loggedInUser = user;
},
 
getLoggedInUser(): Users | null {
  return this.loggedInUser;
},
 
isUserLoggedIn(): boolean
 { return this.loggedInUser!= null },
 
 
isAdmin(): boolean {
  if(this.isUserLoggedIn())
  return false
  return this.getLoggedInUser().isAdmin;
},
 
isReviewer(): boolean {
  if(!this.isUserLoggedIn())
  return false
  return this.getLoggedInUser().isReviewer;
  }
}
}

/* export class SystemService {    // this allows you to store user
  data = {

    about: 'System Service',
    user: {
      loggedIn: false,
      instance: null
  }
  };
  constructor() { }
} */
