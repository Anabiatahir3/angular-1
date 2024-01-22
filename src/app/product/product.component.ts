import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../services/api/products.service';
import { Product } from '../services/api/model/product';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

products:Product[]=[];

singleProduct:Product={
  title:"My Product",
  description:"Hello WOrld",
  price:12,
  category:"any",
  image:"https://some-image.jpg"
}
constructor(private productService:ProductsService){
 
}

getProducts(){
  this.productService.getAllProducts()
.subscribe({
  next:(data:Product[])=>{
    // data.map((single)=>{
    //   this.products.push(single)
    //   console.log(single)
    // })
    this.products=data
  }
})  
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
this.createProduct()


}



 

}
