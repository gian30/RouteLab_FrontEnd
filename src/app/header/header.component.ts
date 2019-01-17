import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./header.css']
})
export class StickyMenuComponent implements OnInit {

  private BARS = 'bars-solid.png';
  private SEARCH = ('../../assets/icons/search.png');


  constructor() { }

  ngOnInit() {

  }

}
