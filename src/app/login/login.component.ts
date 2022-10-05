

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public email: String="";
  public password: String="";

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
  }

  login() {
    const user = {email: this.email, password:this.password};
    this.userService.login(user).subscribe(data => {
      console.log(data);   
    })
  }

}