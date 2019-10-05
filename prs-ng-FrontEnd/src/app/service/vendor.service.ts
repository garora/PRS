import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendors } from '../model/vendors.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
   //Added
  url: string = 'https://localhost:44379/api/vendor';
  constructor ( private http: HttpClient
  ) {}


  list(): Observable<Vendors[]> {
    return this.http.get(this.url)as Observable<Vendors[]>;
  }


  get(id: number): Observable<Vendors> {
    return this.http.get(this.url+"/"+id)as Observable<Vendors>

  }


  create(vendor:Vendors): Observable<any> {
    return this.http.post(this.url, vendor) as Observable<any>;
  }

  //updated because error on put - must provide id as defined in vendor api controller
  edit(vendor: Vendors): Observable<any> {
  return this.http.put(this.url+"/"+vendor.id, vendor)as Observable<any>;
  }

  delete(id: number): Observable<any> {
return this.http.delete(this.url+"/" +id);
}


}

// import { Injectable } from '@angular/core';
// import {HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Vendors } from '../model/vendors.class';

// @Injectable({
//   providedIn: 'root'
// })
// export class VendorService {
//   url: string = 'https://localhost:44379/api/vendor';
//   constructor(   private http: HttpClient ) { }

//   list(): Observable<Vendors[]> {
//     return this.http.get(this.url) as Observable<Vendors[]>;
//   }

//   create(vendor:Vendors): Observable<any> {
//     return this.http.post(this.url, vendor) as Observable<any>;
//   }
// }
