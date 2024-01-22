import { Component,ElementRef,ViewChild,AfterViewInit} from '@angular/core';
import { FormService } from '../services/form.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent  {
  constructor(private service:FormService){

    this.forms=this.service.getAllForms()
    this.isSubmitted=this.forms.length > 0
  }
  @ViewChild('myForm')form:NgForm;

  name:string=""

  email:string=""

  message:string=""
  isSubmitted:boolean=false
  forms:Array<any>=[]
  
  deleteForm(form:any){
this.service.delete(form)
}
  
onSubmit(){

  this.isSubmitted=true
  this.service.insert({
    'name':this.name,
    'email':this.email,
    'message':this.message
  })
  this.name=''
  this.email=''
  this.message=''

  console.log("hey", this.form)
}

}

