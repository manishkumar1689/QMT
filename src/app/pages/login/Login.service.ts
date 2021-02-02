import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class LoginService {

  private baseUrl = environment.baseUrl;
  constructor( private http: HttpClient) 
  { }

  // authenticateLogin(userCredentials: object): Observable<any> {  
  //   return this.http.post(
  //     `${this.baseUrl}`+'checkLogin', 
  //     userCredentials, 
  //     {responseType: 'text'}
  //   );  
  // }

  authenticateLogin(userCredentials: object){
    return of({
 id:"1",
 name:"ekumm",
 signum:"123",
 email:"manish@gmail.com",
 groups:[
   {
     id:"1",
     name:"1",
     region:"1",
     
   roles:[
   {
     id:"1",
     name:"1",
     description:"1"
   },
    {
     id:"2",
     name:"3",
     description:"4"
   }
   ]
   },
    {
     id:"2",
     name:"2",
     region:"2",
     
   roles:[
   {
     id:"1",
     name:"1",
     description:"1"
   },
    {
     id:"2",
     name:"3",
     description:"4"
   }
   ]
   }
   ]
});
    this.http.post(this.baseUrl+'checkLogin',userCredentials).pipe(map(data => {})).subscribe(result => {
       
          return result;
    });
}
}
