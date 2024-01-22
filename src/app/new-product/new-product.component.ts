import { Component, ViewChild } from '@angular/core';
import { Product } from '../services/api/model/product';
import { ProductsService } from '../services/api/products.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  
  constructor(private productService:ProductsService,
    private router:Router){
  }

product:Product={}

saveProduct(myForm:NgForm){
  if(JSON.stringify(this.product)!==JSON.stringify({})){
    this.productService.createProduct(this.product)
    console.log(this.product)
    this.router.navigate(['products'])
    
  }
  
  console.log(myForm)

}
}
