import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";
import { UserResponse } from "../models/user.interface";

@Injectable({
  providedIn: "root"
})
export class UsersService {

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(user: any): Observable<any> {
    return this.http.post<UserResponse>(`${environment.apiUrl}/login`, user);
  }

  register(user: any): Observable<any> {
    return this.http.post<UserResponse>(`${environment.apiUrl}/register`, user);
  }

  setToken(token: any) {
    this.cookieService.set("token", token);
  }
  getToken(): string {
    return this.cookieService.get("token");
  }

  getUserInfo(email: any): Observable<any>  {
    console.log("entra");
    
    return this.http.get(`${environment.apiUrl}/getUserInfo`, email);
  }

  logout(): void{
    return this.cookieService.delete("token");
  }
}
