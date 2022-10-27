import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login = "Inicia sesión";
  register = "Registate";
  perfil = "Perfil";

  faHamburger = faHamburger;

  constructor() { }

  ngOnInit(): void {
  }

}
