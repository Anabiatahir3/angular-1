import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Product } from './model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private baseUrl:string='https://fakestoreapi.com'
  constructor(private http:HttpClient) { 

  }


getAllProducts(limit:number=5):Observable<Product[]>{
const productsUrl:string=`${this.baseUrl}/products?limit=${limit}`
return this.http.get<Product[]>(productsUrl)
  }


  createProduct(product:Product){
const productsUrl:string=`${this.baseUrl}/products`;
return this.http.post<Product>(productsUrl,product)
  }
}
