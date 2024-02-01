import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { Product } from './model/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private baseUrl:string='http://localhost:3000/products'
  constructor(private http:HttpClient) { 

  }



  getProducts(){
    return this.http.get<Product[]>(this.baseUrl)
  }


  createProduct(product:Product){
return this.http.post<Product>(this.baseUrl,product)
  }
}
