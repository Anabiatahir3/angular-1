import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private router:Router,private userService:UserService,private snackbarService:SnackbarService){

  }
reactiveForm:FormGroup

async onSubmit(){
this.userService.signup(this.reactiveForm.value)
  .subscribe({
      next:data=>{
        this.snackbarService.success("User created successfuly,SignIn to browse freely")
        this.reactiveForm.reset()
      },
      error:(error:HttpErrorResponse)=>{
        console.log(error)
        this.snackbarService.error("Failed to create user")
      }
})
}
  ngOnInit(): void {
    this.reactiveForm=new FormGroup({
      username:new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,Validators.required),
     
    })  
  }
}
