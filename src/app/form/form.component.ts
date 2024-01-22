import { Component,ElementRef,ViewChild,AfterViewInit,OnInit} from '@angular/core';
import { FormService } from '../services/form.service';
import { FormControl, FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  forms:any[]=[]
  reactiveForm:FormGroup;
  constructor(private service:FormService){
    this.forms=this.service.getAllForms()
  }

  deleteMessage(form:any){
    this.service.delete(form)
  }

  onSubmit(){
    console.log(this.reactiveForm)
    this.service.insert({
      'name':this.reactiveForm.value.name,
      'email':this.reactiveForm.value.email,
      'message':this.reactiveForm.value.message,
      'hobbies':this.reactiveForm.value.hobbies
    })
    this.reactiveForm.reset()

  }
ngOnInit(): void {
  this.reactiveForm=new FormGroup({
    name: new FormControl(null,Validators.required),
    email: new FormControl(null,[Validators.required,Validators.email]),
    hobbies: new FormControl('travelling'),
    message: new FormControl(null,Validators.required),
  })  
}
}

