import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public name: string = "";
  public email: string = "";
  public password: string = "";
  public confirmPassword: string = "";
  public passwordError: boolean = false;

  constructor(public userService: UsersService, public router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {
  }

  register() {
    const user = {name: this.name, email: this.email, password: this.password};
    this.userService.register(user).subscribe({
      next: (data) => {
        // this.userService.setToken(data.token); 
        this.cookieService.set('token', data.token);
      },
      error: (error) => {
        console.log(error, "Error en el front");
      },
      complete: () => {
        console.log("Subido a la base de datos con éxito");     
        this.router.navigateByUrl('/');
      }
    })
  }

}