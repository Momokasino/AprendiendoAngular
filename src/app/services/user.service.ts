import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  public token$ = new BehaviorSubject<string>("");

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/login`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/register`, user);
  }

  setToken(token: any) {
    this.cookieService.set("token", token);
    this.token$.next(token);
  }
  getToken(): string {
    return this.cookieService.get("token");
  }

  getRoleUser(email: any): Observable<any>  {
    console.log(' llega con email', email);
    return this.http.get(`${environment.apiUrl}/getUserInfo/${email}`);
  }

  logout(): void{
    this.token$.next("");
    return this.cookieService.delete("token");
  }
}
