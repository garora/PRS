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
  listReview(request: Users): Observable<Requests> {
    return this.http.post(this.url + '/' + 'listReview/', request) as Observable<Requests>;
  }
  get(id: number): Observable<Requests> {
    return this.http.get(this.url + '/' + id) as Observable<Requests>;
  }
  
  //list-review

  // id as defined in request api controller
  edit(request: Requests): Observable<any> {
    return this.http.put(this.url +  + '/' + request.id, request) as Observable<any>;
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }


  
  submitreview(request: Requests): Observable<Requests> {
    return this.http.post(this.url + '/' + 'SubmitForReview/', request) as Observable<Requests>;
  }
  approve(request: Requests): Observable<Requests> {
    return this.http.post(this.url + '/' + 'approveRequest/',  request) as Observable<Requests>;
  }
  reject(request: Requests): Observable<Requests> {
    return this.http.post(this.url + '/' + 'rejectRequest/',  request) as Observable<Requests>;
  }

}
