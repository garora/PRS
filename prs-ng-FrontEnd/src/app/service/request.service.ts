import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '../model/requests.class';
import { Users } from '../model/users.class';


@Injectable({
  providedIn: 'root'
})
  export class RequestService {
  url = 'https://localhost:44379/api/request';
  constructor(private http: HttpClient
  ) { }

  list(): Observable<Requests[]> {
    return this.http.get(this.url) as Observable<Requests[]>;
  }
  create(request: Requests): Observable<any> {
    return this.http.post(this.url, request) as Observable<any>;
  }
 
  // id as defined in request api controller
  listReview(id): Observable<Requests[]> {
    return this.http.get(this.url + 'ListReview?id=' + id)as Observable<Requests[]>;
  }

 
  get(id: number): Observable<Requests> {
    return this.http.get(this.url + '/' + id) as Observable<Requests>;
  }
    
  edit(request: Requests): Observable<any> {
    return this.http.put(this.url +  + '/' + request.id, request) as Observable<any>;
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);  /* as observable<any> */
  }


  submitReview(request: Requests): Observable< any> {
    return this.http.put(this.url + '/Review/'+request.id, Requests) as Observable<any>;
 }

 
 approve(request: Requests): Observable<Requests> {
  return this.http.post(this.url + '/Approved/' + request.id,  request) as Observable<any>;
}

reject(id: number): Observable<any> {
  return this.http.post(this.url + '/Rejected/' + id, Requests) as Observable<any>;
}


}
