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

  rol$ = {};

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
  getToken(name: any){
    return this.cookieService.get(name);
  }

  setRolToken(token: any){
    this.cookieService.set("rol", token);
  }

  getRoleUser(email: any){
    console.log('llega con email: ', email);
    this.http.get(`${environment.apiUrl}/getUserInfo/${email}`).subscribe({
      next: (rol) => {
        console.log('Su rol es: ', rol);
        this.setRolToken(rol);            
      },
      error: (msg) => {
        console.log('Error Getting Rol: ', msg);
      },
      complete: () => {
        console.log("Rol en token");      
      }
    }) 
  }

  logout(): void{
    this.token$.next("");
    this.cookieService.delete("rol")
    return this.cookieService.delete("token");
    
  }
}
