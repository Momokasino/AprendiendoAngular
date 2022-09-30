

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public email: String="";
  public password: String="";

  constructor() {}

  ngOnInit(): void {
  }

  login() {
    console.log(this.email);
    console.log(this.password);
  }

}