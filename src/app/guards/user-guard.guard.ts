import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {

  constructor(private cookieService: CookieService, private router: Router) {}
 
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const cookie = this.cookieService.check('token');
    if (!cookie) {
      this.router.navigate(['/', 'login']);
      return false;
    }else{
      return true;
    }
  }
  
}
