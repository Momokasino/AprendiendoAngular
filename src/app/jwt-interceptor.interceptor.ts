import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from '../app/services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private userService: UsersService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token: string = this.userService.getToken()
    let req = request;
    
    if (token) {
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request);
  }
}
