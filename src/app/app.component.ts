import { Component, ViewEncapsulation } from '@angular/core';
import { ThemeService } from '../../projects/eds/angular/src/public_api';
import { AuthenticationService } from './pages/auth/authentication.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  menuOpened = (window.innerWidth > 768);
  settingsOpened = false;
  isLightTheme = true;
  components = [];
  constructor(private themeService: ThemeService, private authService: AuthenticationService,private router:Router) {
    this.components[0] = { resourceDisplayName: "Project OnBoarding", routingName:"projectOnBoarding"};
    this.components[1] = { resourceDisplayName: "Group OnBoarding", routingName: "groupOnBoarding" };
  }

  toggleTheme(isLight: boolean) {
   this.themeService.toggle(isLight);
  }
signOut(){
debugger;
 this.authService.logOut();
 
location.reload();
}
  menuHandler() {
    this.menuOpened = !this.menuOpened;
  }

  settingsHandler() {
    this.settingsOpened = !this.settingsOpened;
  }
  isUserLoggedIn() {
 if(this.authService.isUserLoggedIn()){         
           return true;
        }
else
{
return false;
  }
}
}
