
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public email: String="";
  public password: String="";

  constructor(public userService: UsersService, public router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
  }

  login() {

    
    const user = {email: this.email, password: this.password};
    console.log(user);
    this.userService.login(user).subscribe({
      next: (data) => {
        // this.userService.setToken(data.token);
        this.cookieService.set('token', data.token);
      },
      error: (error) => {
        console.log(error, "problema de front");
      },
      complete: () => {
        console.log("Exito en el login");       
        this.router.navigateByUrl('/');
      }
    }) 
  }
}