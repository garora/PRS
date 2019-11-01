import { RequestLineItems } from '@model/requestLineItems.class';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from '../model/requests.class';
import { Users } from '../model/users.class';


@Injectable( {
  providedIn: 'root'
} )

export class RequestLineItemService
{
  url = 'https://localhost:44379/api/RequestLine';
  constructor ( private http: HttpClient
  ) { }

  list (): Observable<RequestLineItems[]>
  {
    return this.http.get( this.url ) as Observable<RequestLineItems[]>;
  }

  listById ( id ): Observable<RequestLineItems[]>
  {
    return this.http.get( this.url + "/?id=" + id ) as Observable<RequestLineItems[]>;
  }

  get ( id: number ): Observable<RequestLineItems>
  {
    return this.http.get( this.url + '/' + id ) as Observable<RequestLineItems>;
  }

  create ( request: RequestLineItems ): Observable<any>
  {
    return this.http.post( this.url, request ) as Observable<any>;
  }

  edit ( id: number, request: RequestLineItems ): Observable<any>
  {
    return this.http.put( this.url + '/' + id, request ) as Observable<any>;
  }

  delete ( id: number ): Observable<any>
  {
    return this.http.delete( this.url + '/' + id ) as Observable<any>;
  }
  RlbyRiD ( id: number ): Observable<any>
  {
    return this.http.get( this.url + `/byRiD/${ id }` ) as Observable<any>;
  }




}
