import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private BARS = 'bars-solid.png';
  private SEARCH = ('../../assets/icons/search.png');


  constructor() { }

  ngOnInit() {

  }

}
