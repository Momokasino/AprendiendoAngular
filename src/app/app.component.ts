import { UsersService } from "./services/users.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  userList: any = [];

  constructor(private usersService: UsersService){
    console.log("el compoente se ha creado");   
  }

  ngOnInit(): void {
    console.log('el componente funciona');
    this.usersService.getUsers().subscribe((response: any) => this.userList = response);
    
  }
}
