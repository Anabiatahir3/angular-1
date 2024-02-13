import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/api/model/product';
import {Observable} from 'rxjs'
import { ProductsService } from '../../services/api/products.service';
import { faStar,faArrowLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
  
})
export class SingleProductComponent {
  faStar=faStar
  faArrowLeft=faArrowLeft
  products$:Observable<Product>;
  constructor(private route:ActivatedRoute,private productService:ProductsService){

  }
  ngOnInit(){
    let id=this.route.snapshot.params['id']
    this.products$=this.productService.getProductById(id)
  }


}
