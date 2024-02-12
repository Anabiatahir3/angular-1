import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  @Output()
  enteredText:EventEmitter<string>= new EventEmitter<string>();
  search:string=""

  onSearchBtn(){
    this.enteredText.emit(this.search)
  }

}
