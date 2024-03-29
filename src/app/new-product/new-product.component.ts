import { Component, ViewChild } from '@angular/core';
import { Product } from '../services/api/model/product';
import { ProductsService } from '../services/api/products.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  
  constructor(private productService:ProductsService,private snackbarService:SnackbarService,
    private router:Router){
  }

product:Product={}

async saveProduct(myForm:NgForm){
  if(JSON.stringify(this.product)!==JSON.stringify({})){
    this.productService.createProduct(this.product).subscribe({
      next:()=>{
        this.snackbarService.success("New product created sucessfully")
        myForm.reset()
  },
      error:(error:HttpErrorResponse)=>{
        this.snackbarService.error("Unauthorized person")
      }
    })
    
  }
  
}
}
