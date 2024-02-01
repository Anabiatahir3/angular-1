import { Component,OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart:any;
  constructor(private cartService:CartService){

  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe({
      next:(data)=>{
        this.cart=data
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
      }
  })
  }
 

}
