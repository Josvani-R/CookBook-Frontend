import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem("token");
      //try to get token out of local storage
      const expiresIn = localStorage.getItem("expiration");
      if (token) {
        return true 
        ///returns true if a token is there, allowing activation of the route (only logged in users)
      } else {
        this.router.navigate(['']);
        //navigate to log in page if the token is not present
        return false;
      }

    return true;
  }

  
  
}
