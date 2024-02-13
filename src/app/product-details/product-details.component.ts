import { Component,Input, input } from '@angular/core';
import { Product } from '../services/api/model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(private router:Router){}
@Input()
product:Product;
navigateToProductDetails(productId:number){
this.router.navigate(['product',productId])
}

}
  

