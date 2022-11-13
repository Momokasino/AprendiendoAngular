
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
    });

  
    this.userService.login(user).subscribe({
      next: (data) => {
        // console.log(data.email);
        
        this.userService.setToken(data.access_token);
        
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Exito en el login");
        this.getRoleUser(this.email);
        if (this.email=="admin@admin.com") {
          this.router.navigateByUrl('/admin');
        }else{
          this.router.navigateByUrl('/home');
        }   
      }
    })
  }

  getRoleUser(email: String) {
    console.log('entra al get user info aparte');
    this.userService.getRoleUser(email);
  };
}