import { Component, OnInit ,Inject} from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.css'
})
export class CheckoutModalComponent implements OnInit{
  constructor(private ref: MatDialogRef<CheckoutModalComponent>,  @Inject(MAT_DIALOG_DATA) public data: any){

  }
myform:FormGroup

  ngOnInit(): void {
    this.myform=new FormGroup({
    cardNumber: new FormControl(null,[Validators.required]),
    cvv: new FormControl(null,Validators.required),
    date:new FormControl(null,Validators.required)
    })
  }
  closepopup() {
    this.ref.close('Closed using function');
  }
  Saveuser(){
    if(this.myform.valid){
    this.closepopup()
    console.log(this.myform.value)
  }
}
}
