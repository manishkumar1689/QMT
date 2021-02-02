import { Component, ViewChild, EventEmitter, Output, Renderer2, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
//import { empty } from 'rxjs/observable/empty';
import { DatePipe } from '@angular/common';
import { LoginService } from './Login.service';

import { IUser } from '../models/user';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@Component({
   
    templateUrl: 'Login.component.html',
    selector: 'login-user',
 styleUrls: ['./Login.component.css']
})

export class LoginComponent {
 isSettingEnabledByUser: any;
    savedNavigatorSettings: any;
    membershipBenefits: string = '';
    renewMembership: boolean = false;
    appTitle = 'Login to Navigator';
    model: any = {};
    userSessionId: string = '';
    Message: string = '';
    success = '';
    error = '';
    errorColor: string = 'white';
    showPassword: boolean = false;
    toolTipPasswordText: string = 'Click to Show Password';
    loading: boolean = true;
    rememberme: boolean = false;
    currentUsername: string = '';
    currentUserRoleName: any[];
    
    appRole: any;
    returnUrl: any;
    CurrentTimeZone: any;
    Islogged: boolean = false;
    constantMessages: any = {};
    toolTipText: any = {};
    loginPageFiguresData: Object = {};
    showAnnouncementSection = false;

    user:IUser;

  constructor( private loginService: LoginService,private router:Router,  private cookieService: CookieService) {
    // customize default values of carousels used by this component tree
    //config.interval = 10000;
    //config.wrap = false;
    //config.keyboard = false;
    //config.pauseOnHover = false;
  }
  LoginUser() {
debugger;
    if (this.model.username.trim() != '' && this.model.password.trim() != '') {
      this.loginService.authenticateLogin({username:this.model.username, password:this.model.password}).subscribe(
        userData => {
          if (userData != null) {
                   console.log("USER DATA-->"+JSON.stringify(userData));
          sessionStorage.setItem('username',userData.name);
         // this.CurrentTimeZone = new Date().toString().split(' ').slice(5, 6).join(' ');
          this.cookieService.put("username", userData.name);
         // this.cookieService.put("password", userData.password);
          this.cookieService.put("userFullName", userData.name);
         // this.cookieService.put("userrole", userData.groups[0].roles[0]);
          this.cookieService.put("userId", userData.id);
          let tokenStr= 'Bearer '+userData.name;
          //this.cookieService.put('token', tokenStr);
          //this.cookieService.put('UserTimeZone', this.CurrentTimeZone);
          //console.log('Current Time ZONE:' + this.CurrentTimeZone);
          console.log('userId' + userData.id);
          
            this.router.navigate(['/']);
          }
          else {
           // this.notificationService.error("Invalid Credentials");
          }
        },
        error => {
          console.log("errros is",error)
         // this.notificationService.error("Internal Server Error");
        }
      );
    }
    else {
     // this.notificationService.error("Please Enter User Name and Password.");
    }
  }
 LOGIN_TOOLTIP: any =
        {
            Announcement: '',
            LoginSection1: '',
            LoginSection2: '',
            LoginSection3: '',
            LoginSection4: ''
        };
 LOGIN_TEXT: any =
        {
            Announcement: '',
            LoginSection1: '',
            LoginSection2: '',
            LoginSection3: '',
            LoginSection4: ''
        };
  login(model: any) {

  }
}
