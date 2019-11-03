import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://localhost:44379/api/user';

  constructor(private http: HttpClient) {}

  login(uname: string, pwd: string): Observable<Users> {
    return this.http.get(this.url + '/' + uname + '/' + pwd) as Observable<
      Users
    >;
  }
  list(): Observable<Users[]> {
    return this.http.get(this.url) as Observable<Users[]>;
  }
  get(id: number): Observable<Users> {
    return this.http.get(this.url + '/' + id) as Observable<Users>;
  }
  create(user: Users): Observable<any> {
    return this.http.post(this.url, user) as Observable<any>;
  } //  must provide id as defined in user api controller
  edit(user: Users): Observable<any> {
    return this.http.put(this.url + '/' + user.id, user) as Observable<any>;
  }
  delete(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id);
  }
}
