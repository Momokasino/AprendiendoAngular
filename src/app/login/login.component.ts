
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public email: String="";
  public password: String="";

  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit(): void {
  }

  login() {

    const user = {email: this.email, password: this.password};
  
    this.userService.login(user).subscribe({
      next: (data) => {
        this.userService.setToken(data.access_token);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Exito en el login");       
        this.router.navigateByUrl('/home');
      }
    }) 
  }
}