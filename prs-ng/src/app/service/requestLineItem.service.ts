import { RequestLineItems } from '@model/requestLineItems.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '../model/requests.class';
import { Users } from '../model/users.class';


@Injectable({
  providedIn: 'root'
})

  export class RequestLineItemService {
  url = 'https://localhost:44379/api/request';
  constructor(private http: HttpClient
  ) { }

  list(): Observable<Requests[]> {
    return this.http.get(this.url) as Observable<Requests[]>;
  }

  listById(id): Observable<RequestLineItems[]> {
    return this.http.get(this.url+"/?id="+id) as Observable<RequestLineItems[]>;
  }

  get(id: number): Observable<Requests> {
    return this.http.get(this.url + '/' + id) as Observable<Requests>;
  }

  create(request: Requests): Observable<any> {
    return this.http.post(this.url, request) as Observable<any>;
  }

  edit(request: Requests): Observable<any> {
    return this.http.put(this.url + '/' + request.id, request) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }




}
