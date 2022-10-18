import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/login', user);
  }

  register(user: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', user);
  }

  setToken(token: any) {
    this.cookieService.set("token", token);
  }
  getToken(): string {
    return this.cookieService.get("token");
  }

  getUser() {
    return this.http.get("http://127.0.0.1:8000/api/infouser");
  }

  getUserLogged() {
    return this.cookieService.get("token");
  }

  // logout(){

  // }
}
