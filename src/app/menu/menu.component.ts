import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  loggedIn:boolean=false;
  constructor(private router:Router,private userService:UserService){
  }
  ngOnInit() {
    // Check the login status initially
    this.loggedIn = this.userService.isLoggedIn();

    // Subscribe to changes in login status
    this.userService.loginStatus$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
  }

  logout(){
    this.userService.logout()
  }
 
  navigateToAbout():void{
    this.router.navigate(['about'])
  }

}
