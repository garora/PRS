import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemService {    // this allows you to store user
  data = {

    about: 'System Service',
    user: {
      loggedIn: false,
      instance: null
  }
  };
  constructor() { }
}
