import { Component,Input, input } from '@angular/core';
import { Product } from '../services/api/model/product';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

@Input()
product:Product;

}
  

