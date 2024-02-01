import { Component,ElementRef,ViewChild,AfterViewInit,OnInit} from '@angular/core';
import { UserService } from '../services/user.service';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SnackbarService } from '../services/snackbar.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  reactiveForm:FormGroup;
  constructor(private service:UserService,private router:Router,private snackBarService:SnackbarService){
  }

 

  onSubmit(){
    this.service.login(this.reactiveForm.value).subscribe({
      next:(data)=>{console.log(data)
      this.snackBarService.success("Logged in")},
      error:(error:HttpErrorResponse)=>{
        console.log(error)
        this.snackBarService.error("Invalid credentials")
      }
    })
    this.reactiveForm.reset()
   // this.router.navigate(['about'])
  }


ngOnInit(): void {
  this.reactiveForm=new FormGroup({
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,Validators.required),
  })  
}
}

