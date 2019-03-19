import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   BARS = 'bars-solid.png';
   SEARCH = ('../../assets/icons/search.png');


  constructor() { }

  ngOnInit() {

  }

}
