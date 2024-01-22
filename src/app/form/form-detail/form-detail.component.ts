import { Component,EventEmitter,Input ,OnInit,Output} from '@angular/core';

@Component({
  selector: 'form-detail',
  templateUrl: './form-detail.component.html',
  styleUrl: './form-detail.component.css'
})
export class FormDetailComponent implements OnInit {
  @Input()
singleMessage:any={}

@Output() deleteEvent:EventEmitter<any>=new EventEmitter<any>();

onDelete(message:any){
this.deleteEvent.emit(this.singleMessage)
console.log('kkk', message)
}

ngOnInit(): void {
  console.log("lll",this.singleMessage)
}


}
