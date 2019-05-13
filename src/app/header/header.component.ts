import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import { FilterPipe} from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  BARS = 'bars-solid.png';
  SEARCH = ('../../assets/icons/search.png');
// -----------------------------------//
  characters = [
    'Beemo2'
  ];
  searchInput;
  // ---------------------------------------//

  constructor(public _loginService: LoginService) {

  }

  ngOnInit() {

  }

}
