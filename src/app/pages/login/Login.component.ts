import { Component, ViewChild, EventEmitter, Output, Renderer2, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
//import { empty } from 'rxjs/observable/empty';
import { DatePipe } from '@angular/common';

declare var jQuery: any;

@Component({
   
    templateUrl: 'Login.component.html',
    selector: 'login-user',
 styleUrls: ['./Login.component.css'],
providers: [NgbCarouselConfig] 
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
    constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
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
