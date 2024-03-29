import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../services/api/products.service';
import { Product } from '../services/api/model/product';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable, filter,map} from 'rxjs'
import { CartService } from '../services/cart.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
products$:Observable<Product[]>;
constructor(private productService:ProductsService, private cartService:CartService, private snackbarService:SnackbarService){}
search:string=''
onSearchText(value: string) {
  this.search = value;
  this.products$ = this.products$.pipe(
    map(products =>
      products.filter(product =>
        product.name.toLowerCase()==this.search.toLowerCase() || 
        product.description.toLowerCase().includes(this.search.toLowerCase())
      )
    )
  );
}
getProducts(){
this.products$=this.productService.getProducts()
}


ngOnInit() {
this.getProducts();
}
addToCart(product: Product) {
  this.cartService.addToCart(product).subscribe({
    next: (data) => {
      console.log(data);
      this.snackbarService.success("item added successfully")
    },
    error: (error: HttpErrorResponse) => {
      console.log("Error Object:", error);
        this.snackbarService.error("Sign in to add items to cart");
      
    }
  });
}



 

}
