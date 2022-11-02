import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
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

  getUserLogged() {
    return this.cookieService.get("token");
  }

  logout(): void{
    return this.cookieService.delete("token");
  }
}
