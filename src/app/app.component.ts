import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'my-app';
  token = this.userService.getToken("token");
  
  faHamburger = faHamburger;

  constructor(public userService: UsersService, public router: Router) { }
  
  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

  login(){
    this.router.navigateByUrl('/login');
  }
  
}