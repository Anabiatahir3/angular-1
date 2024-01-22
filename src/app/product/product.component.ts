import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../services/api/products.service';
import { Product } from '../services/api/model/product';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

products$:Observable<Product[]>;

singleProduct:Product={
  title:"My Product",
  description:"Hello World",
  price:12,
  category:"any",
  image:"https://some-image.jpg"
}
constructor(private productService:ProductsService){
 
}

getProducts(){
//   this.productService.getAllProducts()
// .subscribe({
//   next:(data:Product[])=>{
//     this.products=data
//   }
// })  
this.products$=this.productService.getAllProducts()
}

createProduct(){
  this.productService.createProduct(this.singleProduct)
  .subscribe({
      next:data=>{
        console.log(data)
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
})
}
ngOnInit() {
this.getProducts();
//this.createProduct()


}



 

}
