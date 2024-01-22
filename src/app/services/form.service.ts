import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
forms:any[]=[]

constructor(

){
  this.init()
}

init():void{
  this.insert({
name:"ana",
email:"ana@gmail.com",
message:"hey there"
  })
}
getAllForms(){
  return this.forms
}
insert(form:{
  name:string,email:string,message:string
}){
  this.forms.push(form)
}

delete(form:any){
  const i=this.forms.indexOf(form)
  this.forms.splice(i,1)

}

}
