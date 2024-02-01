import { Component,Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { SnackbarService } from '../../services/snackbar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  constructor(private cartService:CartService,private snackbarService:SnackbarService){

  }
@Input()item:any;


}
