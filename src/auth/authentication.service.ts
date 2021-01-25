import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CookieService } from 'angular2-cookie/services/cookies.service';
//import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  //private baseUrl = environment.baseUrl;
  private baseUrl ="";
  constructor(  private httpClient:HttpClient,  private cookieService: CookieService) { 
  }
  CurrentTimeZone: any; 

  authenticate(userId, password) {
    console.log(" authenticate user");
    return this.httpClient.post<any>(this.baseUrl+'login',{userId,password}).pipe(
     map(
       userData => {
         if(userData.status=="success"){
          console.log("USER DATA-->"+JSON.stringify(userData));
          sessionStorage.setItem('username',userId);
          this.CurrentTimeZone = new Date().toString().split(' ').slice(5, 6).join(' ');
          this.cookieService.put("username", userId);
         // this.cookieService.put("password", password);
          this.cookieService.put("userFullName", userData.userFullName);
          this.cookieService.put("userrole", userData.userRole);
          this.cookieService.put("userId", userData.userId);
          let tokenStr= 'Bearer '+userData.token;
          this.cookieService.put('token', tokenStr);
          this.cookieService.put('UserTimeZone', this.CurrentTimeZone);
          console.log('Current Time ZONE:' + this.CurrentTimeZone);
          console.log('userId' + userData.userId);
         }
        return userData;
       }
     )

    );
  }

  isUserLoggedIn() {
    let user =  this.cookieService.get('username');//sessionStorage.getItem('username')   
    if((user === null)|| (user === undefined))
      return false;
   else
   return true;
  }
  

  logOut() {
    let user =  this.cookieService.get('username');
    this.updateLogin()
    console.log("Session Removed----->"+user)
    sessionStorage.removeItem('username')
    this.cookieService.removeAll();
  }
  updateLogin() {
    let loginId  =  this.cookieService.get('userId');
     this.httpClient.get<any>(`${this.baseUrl}`+'updatelogin/'+loginId).subscribe(data => {     
    });
  }
}
export class User{
  constructor(
    public status:string,
    public userRole:string,
    public userFullName:string,
   
     ) {}
  
}
