
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
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
        // console.log(data.email)   
        this.userService.setToken(data.access_token);
        this.userService.getRoleUser(this.email);    
      },
      error: (error) => {
        console.log(error);
        alert("usuario o contraseña incorrecto");
      },
      complete: () => {
        console.log("Exito en el login");
    
        if (parseInt(this.userService.getToken("rol")) == 1) {      
          this.router.navigateByUrl('/admin');
        }else{
          this.router.navigateByUrl('/home');
        }   
                
      }
    })
  }
}