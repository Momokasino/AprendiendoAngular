import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from '../../services/user.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login = "Inicia sesión";
  register = "Registate";
  perfil = "Perfil";

  isLogin = false;

  faHamburger = faHamburger;

  constructor(public userService: UsersService, public router: Router) { }

  ngOnInit(): void {
      
      let token = this.userService.getToken();

      console.log(token);
      
      if (token != "") {
        this.isLogin = true;
   
        console.log("pone el login a true");    
      }
  }
  
  logout(){
    this.userService.logout();
    this.isLogin = false;
    console.log("pone el login a false");

    this.router.navigateByUrl('/login');
  }


}
