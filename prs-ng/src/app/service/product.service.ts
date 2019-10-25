import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../model/products.class';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = 'https://localhost:44379/api/product';
  constructor ( private http: HttpClient
  ) {}


  list(): Observable<Products[]> {
    return this.http.get(this.url)as Observable<Products[]>;
  }


  get(id: number): Observable<Products> {
    return this.http.get(this.url+"/"+id)as Observable<Products>

  }


  create(product:Products): Observable<any> {
    console.log('product create: '+product.about());
    return this.http.post(this.url, product) as Observable<any>;
  }

  // must provide id as defined in product api controller
  edit(product: Products): Observable<any> {
  return this.http.put(this.url+"/"+product.id, product)as Observable<any>;
  }

  delete(id: number): Observable<any> {
return this.http.delete(this.url+"/"+id);
}


}
