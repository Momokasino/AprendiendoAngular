import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';

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

  constructor(public userService: UsersService) {}

  ngOnInit(): void {
  }

  register() {
    const user = {name: this.name, email: this.email, password: this.password};
    this.userService.register(user).subscribe(data => {
      console.log(data);   
    })
  }

}