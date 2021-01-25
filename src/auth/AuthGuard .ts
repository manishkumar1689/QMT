import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { debug } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
      private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      console.log("This is canActivate Method state.url------>"+encodeURI(state.url))  
     if(this.authService.isUserLoggedIn()){         
           return true;
        }
        // not logged in so redirect to login page with the return url and return false
       this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});        
        return false;
    }
}