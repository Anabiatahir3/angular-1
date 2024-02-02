import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']  
})
export class CartComponent implements OnInit {
  cart: any;
  loggedIn:boolean=true

constructor(private cartService: CartService, private snackbarService: SnackbarService,private userService:UserService) {}
deleteCart(){
  this.cartService.deleteCart().subscribe({
    next:()=>{
      this.snackbarService.success("Cart deleted successfully")
      this.getUpdatedCart()
    },
    error:(error:HttpErrorResponse)=>{
      console.log(error)
    }
  })
}
  removeItem(item: any) {
    this.cartService.removeFromCart(item).subscribe({
      next: () => {
        this.snackbarService.success('Item deleted successfully');
        this.getUpdatedCart();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
  decrement(item: any) {
    this.cartService.removeSingleItem(item.product).subscribe({
      next: () => {
        console.log('decrement');
        this.getUpdatedCart();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }


  increment(item: any) {
    this.cartService.addToCart(item.product).subscribe({
      next: () => {
        console.log('Increment');
        this.getUpdatedCart();
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
    this.getUpdatedCart();
    
      this.loggedIn = this.userService.isLoggedIn();
  
      // Subscribe to changes in login status
      this.userService.loginStatus$.subscribe(loggedIn => {
        this.loggedIn = loggedIn;
      });
  
  }

  private getUpdatedCart() {
    this.cartService.getCart().subscribe({
      next: (data) => {
        this.cart = data;
        console.log(this.cart);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }
}
