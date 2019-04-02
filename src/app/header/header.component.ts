import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'header',
  templateUrl: './header.component2.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   BARS = 'bars-solid.png';
   SEARCH = ('../../assets/icons/search.png');


  constructor( private _loginService: LoginService) { }

  ngOnInit() {

  }

}
