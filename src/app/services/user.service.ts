import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap,shareReplay,Observable,BehaviorSubject } from 'rxjs';
import moment from "moment";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string="http://localhost:3000"
  private loginStatusSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
  loginStatus$ = this.loginStatusSubject.asObservable();


constructor(private http:HttpClient){
}


signup(user:any){
  const signupUrl=`${this.baseUrl}/auth/signup`
  return this.http.post<any>(signupUrl,user)
}
login(user:any){
  const signinUrl=`${this.baseUrl}/auth/login`
  return this.http.post<any>(signinUrl,user)
 .pipe(
  tap(response=>this.setSession(response)),
  shareReplay()
 )
}

private setSession(authResult:any):void{
  const {access_token,expiresIn}=authResult;
  const expiresAt=moment().add(expiresIn,'second').toISOString()
  localStorage.setItem('access_token', access_token)
  localStorage.setItem('expiresAt',expiresAt)
  this.loginStatusSubject.next(true);
}
logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expiresAt");
  this.loginStatusSubject.next(false);
}

public isLoggedIn(){
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem("expiresAt");
  //const expiresAt = JSON.parse(expiration);
  return moment(expiration);
} 

}
