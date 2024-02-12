import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CartService } from '../../services/cart.service';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.css'
})
export class CheckoutModalComponent implements OnInit{
  constructor(private ref: MatDialogRef<CheckoutModalComponent>,
    private snackbarService:SnackbarService,  @Inject(MAT_DIALOG_DATA) public data: any,
    private cartService:CartService,
    private router:Router){
  }
myform:FormGroup
isLoading:boolean=false;

  ngOnInit(): void {
    this.myform=new FormGroup({
    cardNumber: new FormControl(null,[Validators.required]),
    cvv: new FormControl(null,Validators.required),
    expiryDate:new FormControl(null,Validators.required)
    })
  }
  closepopup() {
    this.ref.close(this.myform.value);
  }
  Saveuser(){
    if(this.myform.valid){
    this.closepopup()

    console.log(this.myform.value)
    this.cartService.purchaseCart(this.myform.value).subscribe({
      next:()=>{
        this.snackbarService.success("Checkout successfully")
        setTimeout(()=>{
          this.router.navigate([''])
        },1500)
      },
      error:()=>{
        this.snackbarService.error("Problem in checking out, try again")
      }
    })
  }
}
}
