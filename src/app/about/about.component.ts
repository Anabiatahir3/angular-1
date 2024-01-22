import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private activatedRoute:ActivatedRoute){
console.log(this.activatedRoute)
  }
param:any;
queryParam:any[]=[];

ngOnInit(): void {
  this.param=this.activatedRoute.snapshot.params['username']
  this.queryParam.push(this.activatedRoute.snapshot.queryParams['lastname'])
  this.queryParam.push(this.activatedRoute.snapshot.queryParams['middlename'])


}
}
