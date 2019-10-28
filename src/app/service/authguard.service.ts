import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private auth : AuthenticationService , private router: Router) { }

  canActivate(route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
    if(this.auth.isUserLoggedIn())
      return true;
    this.router.navigate(['login'])
      return false;
  }
}
