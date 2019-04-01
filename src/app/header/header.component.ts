import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component2.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   BARS = 'distance.png';
   SEARCH = ('../../assets/icons/search.png');


  constructor() { }

  ngOnInit() {

  }

}
